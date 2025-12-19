"use client"

import {
    Button,
    Form,
    Input,
    Popconfirm,
    Table,
    Typography,
    Card,
    Flex,
    message,
} from "antd"
import { useEffect, useState } from "react"
import type { Rink } from "@/types/prisma" // поправь путь
import NewRinkModal from "./new-rink-modal"
import {deleteRink, getAllRinks, updateRink} from "@/app/lib/actions/admin/ice-rinks";

type EditableRink = Rink & { key: string }

export default function RinksTable() {
    const [form] = Form.useForm()
    const [messageApi, contextHolder] = message.useMessage();

    const [data, setData] = useState<EditableRink[]>([])
    const [editingKey, setEditingKey] = useState("")
    const [loading, setLoading] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    const isEditing = (record: EditableRink) => record.key === editingKey

    const fetchData = async () => {
        setLoading()
        const rinks = await getAllRinks()
        setData(rinks.map(r => ({ ...r, key: r.id })))
    }
    console.log(data)
    useEffect(() => {
        fetchData()
    }, [])

    const edit = (record: EditableRink) => {
        form.setFieldsValue({ name: "", ...record })
        setEditingKey(record.key)
    }

    const cancel = () => setEditingKey("")

    const save = async (key: string) => {
        try {
            const row = await form.validateFields()
            const old = data.find(item => item.key === key)
            if (!old) return
            await updateRink(key, row)
            await fetchData()
            setEditingKey("")
            messageApi.open({
                type: 'success',
                content: 'Данные успешно обновлены',
            });
        } catch (err) {
            console.error(err)
            messageApi.open({
                type: 'error',
                content: 'Произошла ошибка, попробуйте ещё раз',
            });        }
    }

    const handleDelete = async (id: string) => {
        try {
            await deleteRink(id)
            await fetchData()
            messageApi.success("Каток удалён")
        } catch (err) {
            console.error(err)
            messageApi.error("Ошибка при удалении")
        }
    }

    const columns = [
        {
            title: "Название",
            dataIndex: "name",
            editable: true,
        },
        {
            title: "Админы",
            dataIndex: "managers",
            render: (managers: Rink["managers"]) =>
                managers.map(m => m.name).join(", "),
        },
        {
            title: "Действия",
            dataIndex: "actions",
            render: (_: any, record: EditableRink) => {
                const editable = isEditing(record)
                return editable ? (
                    <span>
            <Typography.Link onClick={() => save(record.key)} style={{ marginRight: 8 }}>
              Сохранить
            </Typography.Link>
            <Popconfirm title="Отменить изменения?" onConfirm={cancel}>
              <a>Отмена</a>
            </Popconfirm>
          </span>
                ) : (
                    <Flex gap={8}>
                        <Typography.Link disabled={editingKey !== ""} onClick={() => edit(record)}>
                            Редактировать
                        </Typography.Link>
                        <Popconfirm title="Удалить каток?" onConfirm={() => handleDelete(record.id)}>
                            <Typography.Link type="danger">Удалить</Typography.Link>
                        </Popconfirm>
                    </Flex>
                )
            },
        },
    ]

    const mergedColumns = columns.map(col => {
        if (!col.editable) return col
        return {
            ...col,
            onCell: (record: EditableRink) => ({
                record,
                inputType: "text",
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        }
    })

    const EditableCell = ({
                              editing,
                              dataIndex,
                              title,
                              inputType,
                              record,
                              children,
                              ...restProps
                          }: any) => {
        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item name={dataIndex} style={{ margin: 0 }} rules={[{ required: true, message: `Введите ${title}` }]}>
                        <Input />
                    </Form.Item>
                ) : (
                    children
                )}
            </td>
        )
    }

    return (
        <Card>
            {contextHolder}
            <Card.Meta
                title={
                    <Flex align="center" gap={16}>
                        Катки
                        <Button type="primary" onClick={() => setModalOpen(true)}>
                            Добавить каток
                        </Button>
                    </Flex>
                }
            />
            <Form form={form} component={false}>
                <Table
                    components={{ body: { cell: EditableCell } }}
                    bordered
                    dataSource={data}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{ onChange: cancel }}
                    style={{ marginTop: 24 }}
                    loading={loading}
                />
            </Form>
            <NewRinkModal open={modalOpen} setOpen={setModalOpen} onCreated={fetchData} />
        </Card>
    )
}
