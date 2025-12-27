import { Collapse, Divider, Flex, Tag, Button } from "antd"
import Text from "antd/es/typography/Text"
import Title from "antd/es/typography/Title"
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import React from "react"

import { ScheduleGetPayload } from "@/app/generated/prisma/models/Schedule"
import dayjs from "@/app/lib/dayjs"
import { RinkScheduleFilters } from "@/app/ui/rinks/rink-schedule-filters"
import { getIceRinkScheduleById } from "@/lib/data/ice-rinks"

const getTypeColor = (type: string) => {
  switch (type) {
    case "Свободное катание":
      return "!bg-blue-100 !text-blue-800"
    case "Хоккейный час":
      return "!bg-red-100 !text-red-800"
    case "Учебный сеанс":
      return "!bg-yellow-100 !text-yellow-800"
    case "Массовое катание":
      return "!bg-purple-100 !text-purple-800"
    default:
      return "!bg-gray-100 !text-gray-800"
  }
}

type Props = {
  searchParams: Record<string, string | string[]>
  id: string
}

type ScheduleWithArenaAndType = ScheduleGetPayload<{
  include: {
    arena: true
    sessionType: true
  }
}>

export async function RinkSchedule({ searchParams, id }: Props) {
  const parsed = {
    day: typeof searchParams.day === "string" ? searchParams.day : undefined,
    arenaId: typeof searchParams.arenaId === "string" ? searchParams.arenaId : undefined,
    sessionType: typeof searchParams.sessionType === "string" ? searchParams.sessionType : undefined,
  }

  const rinkSchedule = await getIceRinkScheduleById(id, parsed)

  if (!rinkSchedule) return notFound()

  const arenaOptions = Object.values(rinkSchedule.arenas).map(option => ({ value: option.id, label: option.name }))
  const sessionTypeOptions = Object.values(rinkSchedule.sessionTypes).map(option => ({
    value: option.id,
    label: option.name,
  }))

  const schedule: Record<string, ScheduleWithArenaAndType[]> = rinkSchedule.schedules.reduce(
    (acc, item) => {
      const dateKey = dayjs(item.date).format("YYYY-MM-DD")
      if (!acc[dateKey]) acc[dateKey] = []
      acc[dateKey].push(item)
      return acc
    },
    {} as Record<string, ScheduleWithArenaAndType[]>,
  )


  const itemsForCollapse = Object.entries(schedule).map(([date, items]) => ({
    key: date,
    label: (
      <Flex align="center" gap={15}>
        <CalendarIcon className="w-4 h-4 stroke-slate-500" />
        <Title level={5} className="capitalize mb-0!">
          {dayjs(date).format("dddd (DD.MM)")}
        </Title>
      </Flex>
    ),
    children: (
      <Flex vertical gap={15}>
        {items.map((item, i) => (
          <Flex
            key={i}
            className="border border-slate-200 bg-gray-50 rounded-md p-2!"
            justify="space-between"
            align="center"
            wrap="wrap"
            gap={12}
          >
            <Flex align="center" gap={8}>
              <ClockIcon className="w-4 h-4 text-gray-500" />
              <Text className="font-medium text-sm">
                {dayjs(item.startTime).format("HH:mm")} – {dayjs(item.endTime).format("HH:mm")}
              </Text>
            </Flex>

            <Flex align="center" gap={8} wrap="wrap">
              <Tag className={getTypeColor(item.sessionType.name)}>{item.sessionType.name}</Tag>
              <Divider type="vertical" />
              <Flex align="center" gap={4}>
                <MapPinIcon className="w-4 h-4 text-gray-500" />
                <Text type="secondary">{item.arena.name}</Text>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>
    ),
    className: "bg-white !rounded-xl mb-5",
  }))

  return (
    <Flex vertical gap={12}>
      <Flex gap={12} vertical>
        <RinkScheduleFilters sessionTypeOptions={sessionTypeOptions} arenaOptions={arenaOptions} />
      </Flex>
      {parsed.day ? (
        Object.entries(schedule).map(([, item], i) => (
          <Flex
            key={i}
            className="border border-slate-200 bg-gray-50 rounded-md p-2!"
            justify="space-between"
            align="center"
            wrap="wrap"
            gap={12}
          >
            {item.map(i => (
              <Flex key={i.id} align="center" gap={8}>
                <ClockIcon className="w-4 h-4 text-gray-500" />
                <Text className="font-medium text-sm">
                  {dayjs(i.startTime).format("HH:mm")} – {dayjs(i.endTime).format("HH:mm")}
                </Text>
              </Flex>
            ))}

            <Flex align="center" gap={8} wrap="wrap">
              {item.map(i => (
                <Flex align="center" key={i.id}>
                  <Tag className={getTypeColor(i.sessionType.name)}>{i.sessionType.name}</Tag>
                  <Divider type="vertical" />
                  <Flex align="center" gap={4}>
                    <MapPinIcon className="w-4 h-4 text-gray-500" />
                    <Text type="secondary">{i.arena.name}</Text>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Flex>
        ))
      ) : (
        <Collapse
          items={itemsForCollapse}
          bordered={false}
          expandIconPosition="end"
          ghost
          size="small"
        />
      )}
      {Object.keys(schedule).length === 0 && Object.keys(searchParams).length > 0 && (
        <Flex vertical align="center" className="text-center italic gap-4">
          <span>⛸️ По данным фильтрам сеансы не найдены ⛸️</span>
          <Link href={`/rinks/${id}`}>
            <Button>Сбросить фильтры</Button>
          </Link>
          ️
        </Flex>
      )}
      {Object.keys(schedule).length === 0 && Object.keys(searchParams).length === 0 && (
        <Flex vertical align="center" className="text-center italic gap-4">
          <span>⛸️ Сеансов не найдено ⛸️</span>
        </Flex>
      )}
    </Flex>
  )
}
