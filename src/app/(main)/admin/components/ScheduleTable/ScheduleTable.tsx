"use client"

import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import dayjs from "dayjs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronRight, Files, Save, SquarePen, Trash } from "lucide-react"
import ScheduleHeader from "./ScheduleHeader"

export type ScheduleItemType = {
  rinkId: string
  startTime: string
  endTime: string
  sessionType: string
  arena?: string
  note?: string
}

export default function SkatingScheduleTable() {
  const [items, setItems] = useState<ScheduleItemType[]>([])
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({})
  const [newDate, setNewDate] = useState<Date | undefined>(undefined)
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
    const date = dayjs(newDate).startOf("day")

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
    setNewDate(undefined)
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

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Текущее расписание
          {mode === "edit" ? (
            <Button variant="ghost" className="border-primary" onClick={() => setMode("view")}>
              <Save className="stroke-primary" />
            </Button>
          ) : (
            <Button variant="ghost" onClick={() => setMode("edit")}>
              <SquarePen />
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 py-6">
        {mode === "edit" && (
          <div className="flex gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  {newDate ? dayjs(newDate).format("dddd (DD.MM)") : "Выбрать день"}
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Calendar mode="single" selected={newDate} onSelect={setNewDate} />
              </PopoverContent>
            </Popover>
            <Button onClick={handleAddDay} disabled={!newDate}>
              Добавить день
            </Button>
          </div>
        )}

        {Object.entries(grouped).map(([dayKey, sessions]) => {
          const isCollapsed = collapsed[dayKey] ?? false

          return (
            <div key={dayKey} className="border rounded-md p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCollapsed(prev => ({ ...prev, [dayKey]: !isCollapsed }))}
                  >
                    {isCollapsed ? <ChevronRight /> : <ChevronDown />}
                  </Button>
                  <h2 className="text-lg font-semibold">{dayjs(dayKey).format("DD.MM.YYYY")}</h2>
                </div>
                {mode === "edit" && (
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleAddSession(dayKey)}>
                      + Сеанс
                    </Button>
                    <Button
                      variant="outline"
                      className="border-destructive stroke-destructive fill-destructive"
                      size="sm"
                      onClick={() => handleRemoveDay(dayKey)}
                    >
                      <Trash className="stroke-destructive" />
                    </Button>
                  </div>
                )}
              </div>

              {!isCollapsed && (
                <Table>
                  <ScheduleHeader />
                  <TableBody>
                    {sessions.map(item => (
                      <TableRow key={item.startTime + item.endTime + item.sessionType}>
                        <TableCell>
                          {mode === "edit" ? (
                            <Input
                              type="time"
                              value={dayjs(item.startTime).format("HH:mm")}
                              onChange={e => {
                                const d = dayjs(item.startTime)
                                updateItem(
                                  item,
                                  "startTime",
                                  d
                                    .hour(+e.target.value.split(":"[0]))
                                    .minute(+e.target.value.split(":"[1]))
                                    .toISOString()
                                )
                              }}
                            />
                          ) : (
                            dayjs(item.startTime).format("HH:mm")
                          )}
                        </TableCell>
                        <TableCell>
                          {mode === "edit" ? (
                            <Input
                              type="time"
                              value={dayjs(item.endTime).format("HH:mm")}
                              onChange={e => {
                                const d = dayjs(item.endTime)
                                updateItem(
                                  item,
                                  "endTime",
                                  d
                                    .hour(+e.target.value.split(":"[0]))
                                    .minute(+e.target.value.split(":"[1]))
                                    .toISOString()
                                )
                              }}
                            />
                          ) : (
                            dayjs(item.endTime).format("HH:mm")
                          )}
                        </TableCell>
                        <TableCell>
                          {mode === "edit" ? (
                            <Input
                              value={item.sessionType}
                              onChange={e => updateItem(item, "sessionType", e.target.value)}
                            />
                          ) : (
                            item.sessionType
                          )}
                        </TableCell>
                        <TableCell>
                          {mode === "edit" ? (
                            <Input
                              value={item.arena ?? ""}
                              onChange={e => updateItem(item, "arena", e.target.value)}
                            />
                          ) : (
                            item.arena || "-"
                          )}
                        </TableCell>
                        <TableCell>
                          {mode === "edit" ? (
                            <Input
                              value={item.note ?? ""}
                              onChange={e => updateItem(item, "note", e.target.value)}
                            />
                          ) : (
                            item.note || "-"
                          )}
                        </TableCell>
                        <TableCell className="flex gap-2">
                          {mode === "edit" && (
                            <>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleDuplicateSession(item)}
                              >
                                <Files className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="outline"
                                className="border-destructive stroke-destructive fill-destructive"
                                size="sm"
                                onClick={() => handleRemoveSession(item)}
                              >
                                <Trash className="stroke-destructive w-4 h-4" />
                              </Button>
                            </>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
