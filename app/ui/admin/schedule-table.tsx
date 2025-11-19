"use client"

import { useMemo, useState } from "react"
import type { CollapseProps } from "antd"
import { Button, Card, Collapse, DatePicker, Flex, Input, Space, Table } from "antd"
import { Files, Save, SquarePen, Trash } from "lucide-react"
import dayjs from "dayjs"
import type { ColumnsType } from "antd/es/table"
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint"

export type ScheduleItemType = {
  rinkId: string
  startTime: string
  endTime: string
  sessionType: string
  arena?: string
  note?: string
}

export default function SkatingScheduleTable() {
  const screens = useBreakpoint()

  const [items, setItems] = useState<ScheduleItemType[]>([])
  const [newDate, setNewDate] = useState<dayjs.Dayjs | null>(null)
  const [mode, setMode] = useState<"view" | "edit">("edit")

  const grouped = useMemo(() => {
    return items.reduce<Record<string, ScheduleItemType[]>>((acc, item) => {
      const dateKey = dayjs(item.startTime).format("YYYY-MM-DD")
      if (!acc[dateKey]) acc[dateKey] = []
      acc[dateKey].push(item)
      return acc
    }, {})
  }, [items])

  const handleAddDay = () => {
    if (!newDate) return
    const date = newDate.startOf("day")
    setItems(prev => [
      ...prev,
      {
        rinkId: "default-rink",
        startTime: date.hour(8).minute(0).toISOString(),
        endTime: date.hour(9).minute(0).toISOString(),
        sessionType: "Открытый лёд",
        arena: "",
        note: "",
      },
    ])
    setNewDate(null)
  }

  const handleAddSession = (dayKey: string) => {
    const date = dayjs(dayKey)
    setItems(prev => [
      ...prev,
      {
        rinkId: "default-rink",
        startTime: date.hour(10).minute(0).toISOString(),
        endTime: date.hour(11).minute(0).toISOString(),
        sessionType: "Тренировка",
        arena: "",
        note: "",
      },
    ])
  }

  const handleDuplicateSession = (item: ScheduleItemType) => {
    const start = dayjs(item.startTime).add(1, "hour")
    const end = dayjs(item.endTime).add(1, "hour")
    const duplicated: ScheduleItemType = {
      ...item,
      startTime: start.toISOString(),
      endTime: end.toISOString(),
    }
    setItems(prev => {
      const index = prev.indexOf(item)
      return [...prev.slice(0, index + 1), duplicated, ...prev.slice(index + 1)]
    })
  }

  const handleRemoveSession = (item: ScheduleItemType) => {
    setItems(prev => prev.filter(i => i !== item))
  }

  const handleRemoveDay = (dayKey: string) => {
    setItems(prev => prev.filter(i => dayjs(i.startTime).format("YYYY-MM-DD") !== dayKey))
  }

  const updateItem = (item: ScheduleItemType, field: keyof ScheduleItemType, value: string) => {
    setItems(prev => prev.map(i => (i === item ? { ...i, [field]: value } : i)))
  }

  const columns = (): ColumnsType<ScheduleItemType> => [
    {
      title: "Начало",
      dataIndex: "startTime",
      render: (value, record) =>
        mode === "edit" ? (
          <Input
            type="time"
            value={dayjs(value).format("HH:mm")}
            onChange={e => {
              const d = dayjs(value)
              updateItem(
                record,
                "startTime",
                d
                  .hour(+e.target.value.split(":"[0]))
                  .minute(+e.target.value.split(":"[1]))
                  .toISOString()
              )
            }}
          />
        ) : (
          dayjs(value).format("HH:mm")
        ),
    },
    {
      title: "Конец",
      dataIndex: "endTime",
      render: (value, record) =>
        mode === "edit" ? (
          <Input
            type="time"
            value={dayjs(value).format("HH:mm")}
            onChange={e => {
              const d = dayjs(value)
              updateItem(
                record,
                "endTime",
                d
                  .hour(+e.target.value.split(":"[0]))
                  .minute(+e.target.value.split(":"[1]))
                  .toISOString()
              )
            }}
          />
        ) : (
          dayjs(value).format("HH:mm")
        ),
    },
    {
      title: "Тип сеанса",
      dataIndex: "sessionType",
      render: (value, record) =>
        mode === "edit" ? (
          <Input value={value} onChange={e => updateItem(record, "sessionType", e.target.value)} />
        ) : (
          value
        ),
    },
    {
      title: "Арена",
      dataIndex: "arena",
      render: (value, record) =>
        mode === "edit" ? (
          <Input value={value} onChange={e => updateItem(record, "arena", e.target.value)} />
        ) : (
          value || "-"
        ),
    },
    {
      title: "Примечание",
      dataIndex: "note",
      render: (value, record) =>
        mode === "edit" ? (
          <Input value={value} onChange={e => updateItem(record, "note", e.target.value)} />
        ) : (
          value || "-"
        ),
    },
    {
      title: "",
      key: "actions",
      render: (_, record) =>
        mode === "edit" ? (
          <Space wrap>
            <Button
              size="small"
              onClick={() => handleDuplicateSession(record)}
              icon={<Files className="w-4 h-4" />}
            />
            <Button
              size="small"
              danger
              onClick={() => handleRemoveSession(record)}
              icon={<Trash className="w-4 h-4" />}
            />
          </Space>
        ) : null,
    },
  ]

  const collapseItems: CollapseProps["items"] = Object.entries(grouped).map(
    ([dayKey, sessions]) => ({
      key: dayKey,
      label: (
        <Flex align="center" justify="space-between" wrap>
          <span>{dayjs(dayKey).format("DD.MM.YYYY")}</span>
          {mode === "edit" && (
            <Space wrap>
              <Button size="small" onClick={() => handleAddSession(dayKey)}>
                + Сеанс
              </Button>
              <Button
                size="small"
                danger
                onClick={() => handleRemoveDay(dayKey)}
                icon={<Trash className="w-4 h-4" />}
              />
            </Space>
          )}
        </Flex>
      ),
      children: (
        <Table
          scroll={{ x: screens.sm ? undefined : "max-content" }}
          columns={columns()}
          dataSource={sessions}
          pagination={false}
          rowKey={i => i.startTime + i.endTime}
        />
      ),
    })
  )

  return (
    <Card>
      <Card.Meta
        title={
          <Flex align="center" gap={8} wrap="wrap">
            Текущее расписание
            {mode === "edit" ? (
              <Button type="text" onClick={() => setMode("view")} icon={<Save />} />
            ) : (
              <Button type="text" onClick={() => setMode("edit")} icon={<SquarePen />} />
            )}
          </Flex>
        }
      />
      <Card style={{ marginTop: 24 }}>
        {mode === "edit" && (
          <Flex gap={8} wrap style={{ marginBottom: 16 }}>
            <DatePicker value={newDate} onChange={setNewDate} />
            <Button onClick={handleAddDay} disabled={!newDate}>
              Добавить день
            </Button>
          </Flex>
        )}
        <Collapse items={collapseItems} />
      </Card>
    </Card>
  )
}
