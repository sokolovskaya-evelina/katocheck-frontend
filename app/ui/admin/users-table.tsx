"use client"

import React, { useState } from "react"
import { Button, Card, Flex, Input, Popconfirm, Select, Space, Table, Tooltip } from "antd"
import { Pencil, Save, Snowflake, Trash, X } from "lucide-react"
import type { ColumnsType } from "antd/es/table"
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint"
import Password from "antd/es/input/Password"
import { translateRole } from "@/app/lib/translations/admin/enum.translationts"
import NewUserModal from "@/app/ui/admin/new-user-modal"
import { RoleEnum } from "@/app/types/enums"
import {roleOptions} from "@/app/lib/constsnts";

type UserItemType = {
  id: string
  username: string
  login: string
  password: string
  rinkId: string
  role: RoleEnum
  isActive: string
}

type Props = {
  data: any[]
  rinkOptions: any
}

export default function UserTable({data, rinkOptions}: Props) {
  const screens = useBreakpoint()
  const [open, setOpen] = useState(false)
  const [_, setData] = useState<UserItemType[]>({})
  const [editingKey, setEditingKey] = useState<string | null>(null)
  const [editedData, setEditedData] = useState<Record<string, Partial<UserItemType>>>({})

  const isEditing = (record: UserItemType) => record.id === editingKey

  const handleEdit = (record: UserItemType) => {
    if (!record.isActive) return // нельзя редактировать замороженные строки
    setEditingKey(record.id)
  }

  const handleInputChange = (id: string, field: keyof UserItemType, value: string) => {
    setEditedData(prev => ({
      ...prev,
      [id]: { ...prev[id], [field]: value },
    }))
  }

  const handleSave = () => {
    const newData = data.map(item =>
      editedData[item.id] ? { ...item, ...editedData[item.id] } : item
    )
    console.log("Отправляем на сервер:", Object.values(editedData))
    setData(newData)
    setEditedData({})
    setEditingKey(null)
  }

  const handleCancelEdit = () => {
    setEditingKey(null)
  }

  // const handleToggleActive = (id: string) => {
  //   setData(prev =>
  //     prev.map(item => (item.id === id ? { ...item, isActive: !item.isActive } : item))
  //   )
  // }

  const columns: ColumnsType<UserItemType> = [
    {
      title: "Имя",
      dataIndex: "username",
      render: (value, record) =>
        isEditing(record) ? (
          <Input
            value={editedData[record.id]?.username ?? value}
            onChange={e => handleInputChange(record.id, "username", e.target.value)}
          />
        ) : (
          value
        ),
    },
    {
      title: "Логин",
      dataIndex: "email",
      render: (value, record) =>
        isEditing(record) ? (
          <Input
            value={editedData[record.id]?.login ?? value}
            onChange={e => handleInputChange(record.id, "login", e.target.value)}
          />
        ) : (
          value
        ),
    },
    {
      title: "Пароль",
      dataIndex: "password",
      render: (value, record) =>
        isEditing(record) ? (
          <Password
            value={editedData[record.id]?.password ?? value}
            onChange={e => handleInputChange(record.id, "password", e.target.value)}
          />
        ) : (
          <Password value={value} readOnly />
        ),
    },
    {
      title: "Роль",
      dataIndex: "role",
      width: "150px",
      render: (value, record) =>
        isEditing(record) ? (
          <Select
            options={roleOptions}
            value={editedData[record.id]?.role ?? value}
            onChange={e => handleInputChange(record.id, "role", e)}
          />
        ) : (
          translateRole(value)
        ),
    },
    {
      title: "",
      key: "actions",
      width: 200,
      align: "center",
      render: (_, record) => (
        <Space>
          {isEditing(record) ? (
            <>
              <Button type="primary" icon={<Save className="w-4 h-4" />} onClick={handleSave} />
              <Button danger icon={<X className="w-4 h-4" />} onClick={handleCancelEdit} />
            </>
          ) : (
            <Button
              onClick={() => handleEdit(record)}
              icon={<Pencil className="w-4 h-4" />}
              disabled={!record.isActive}
            />
          )}

          <Tooltip title={record.isActive ? "Заморозить" : "Разморозить"}>
            <Button
              // onClick={() => handleToggleActive(record.id)}
              icon={
                <Snowflake
                  className={`w-4 h-4 transition-colors ${record.isActive ? "" : "stroke-primary"}`}
                />
              }
              type={record.isActive ? "default" : "dashed"}
            />
          </Tooltip>

          <Popconfirm
            title="Уверены, что хотите удалить?"
            onConfirm={() => console.log(record.id)}
          >
            <Button danger icon={<Trash className="w-4 h-4" />} />
          </Popconfirm>
        </Space>
      ),
    },
  ]

  return (
    <Card>
      <Card.Meta
        title={
          <Flex align="center" gap={16} wrap="wrap">
            Пользователи
            <Button type="primary" onClick={() => setOpen(true)}>
              Добавить пользователя
            </Button>
          </Flex>
        }
      />
      <Card style={{ marginTop: 24 }}>
        <Table
          scroll={{ x: screens.sm ? undefined : "max-content" }}
          columns={columns}
          dataSource={data}
          rowKey="id"
          pagination={false}
          rowClassName={record => (!record.isActive ? "opacity-60 bg-gray-50" : "")}
        />
      </Card>
      <NewUserModal open={open} setOpen={setOpen} rinkOptions={rinkOptions} />
    </Card>
  )
}
