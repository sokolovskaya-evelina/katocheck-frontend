"use client"

import React, { useState } from "react"
import { Button, Card, Flex, Input, Popconfirm, Select, Space, Table, Tooltip } from "antd"
import { Pencil, Save, Snowflake, Trash, X } from "lucide-react"
import type { ColumnsType } from "antd/es/table"
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint"
import Password from "antd/es/input/Password"
import { UserEnum } from "@/types/enums"
import { translateUserType } from "@/app/(main)/admin/utils/enum.translationts"
import NewUserModal from "@/app/(main)/admin/components/NewUserModal/NewUserModal"

export type RinkItemType = {
  rinkId: string
  name: string
  login: string
  password: string
  userType: UserEnum
  isActive: boolean
}

const initialData: RinkItemType[] = [
  {
    rinkId: "123",
    name: "Озерки",
    login: "ozerki123",
    password: "123",
    isActive: true,
    userType: UserEnum.Sportsman,
  },
  {
    rinkId: "0",
    name: "Магнит",
    login: "magnit",
    password: "13245",
    isActive: false,
    userType: UserEnum.Coach,
  },
]

export default function UserTable() {
  const screens = useBreakpoint()
  const [open, setOpen] = useState(false)
  const [data, setData] = useState<RinkItemType[]>(initialData)
  const [editingKey, setEditingKey] = useState<string | null>(null)
  const [editedData, setEditedData] = useState<Record<string, Partial<RinkItemType>>>({})

  const isEditing = (record: RinkItemType) => record.rinkId === editingKey

  const handleEdit = (record: RinkItemType) => {
    if (!record.isActive) return // нельзя редактировать замороженные строки
    setEditingKey(record.rinkId)
  }

  const handleInputChange = (rinkId: string, field: keyof RinkItemType, value: string) => {
    setEditedData(prev => ({
      ...prev,
      [rinkId]: { ...prev[rinkId], [field]: value },
    }))
  }

  const handleSave = () => {
    const newData = data.map(item =>
      editedData[item.rinkId] ? { ...item, ...editedData[item.rinkId] } : item
    )
    console.log("Отправляем на сервер:", Object.values(editedData))
    setData(newData)
    setEditedData({})
    setEditingKey(null)
  }

  const handleCancelEdit = () => {
    setEditingKey(null)
  }

  const handleToggleActive = (rinkId: string) => {
    setData(prev =>
      prev.map(item => (item.rinkId === rinkId ? { ...item, isActive: !item.isActive } : item))
    )
  }

  const columns: ColumnsType<RinkItemType> = [
    {
      title: "Имя",
      dataIndex: "name",
      render: (value, record) =>
        isEditing(record) ? (
          <Input
            value={editedData[record.rinkId]?.name ?? value}
            onChange={e => handleInputChange(record.rinkId, "name", e.target.value)}
          />
        ) : (
          value
        ),
    },
    {
      title: "Логин",
      dataIndex: "login",
      render: (value, record) =>
        isEditing(record) ? (
          <Input
            value={editedData[record.rinkId]?.login ?? value}
            onChange={e => handleInputChange(record.rinkId, "login", e.target.value)}
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
            value={editedData[record.rinkId]?.password ?? value}
            onChange={e => handleInputChange(record.rinkId, "password", e.target.value)}
          />
        ) : (
          <Password value={value} readOnly />
        ),
    },
    {
      title: "Тип",
      dataIndex: "userType",
      render: (value, record) =>
        isEditing(record) ? (
          <Select
            options={[
              { value: UserEnum.Sportsman, label: "Спортсмен" },
              { value: UserEnum.Coach, label: "Тренер" },
              { value: UserEnum.Parent, label: "Родитель" },
            ]}
            value={editedData[record.rinkId]?.userType ?? value}
            onChange={e => handleInputChange(record.rinkId, "userType", e)}
          />
        ) : (
          translateUserType(value)
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
              onClick={() => handleToggleActive(record.rinkId)}
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
            onConfirm={() => console.log(record.rinkId)}
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
          rowKey="rinkId"
          pagination={false}
          rowClassName={record => (!record.isActive ? "opacity-60 bg-gray-50" : "")}
        />
      </Card>
      <NewUserModal open={open} setOpen={setOpen} />
    </Card>
  )
}
