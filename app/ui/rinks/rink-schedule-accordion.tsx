import { Collapse, Divider, Flex, Tag } from "antd"
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react"
import dayjs from "../../lib/dayjs"
import { ScheduleItemShortType, ScheduleType } from "../../types/types"
import React from "react"
import Text from "antd/es/typography/Text"
import Title from "antd/es/typography/Title"

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

export function RinkScheduleAccordion({
  schedule,
}: {
  schedule: ScheduleType<ScheduleItemShortType>[]
}) {
  const items = schedule.map(day => ({
    key: day.date,
    label: (
      <Flex align="center" gap={15}>
        <CalendarIcon className="w-4 h-4 stroke-slate-500" />
        <Title level={4} className="capitalize !mb-0">
          {dayjs(day.date).format("dddd (DD.MM)")}
        </Title>
      </Flex>
    ),
    children: (
      <Flex vertical gap={15}>
        {day.items.map((item, i) => (
          <Flex
            key={i}
            className="border border-slate-200 bg-gray-50 rounded-md !p-2"
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
              <Tag className={getTypeColor(item.sessionType)}>{item.sessionType}</Tag>
              <Divider type="vertical" />
              <Flex align="center" gap={4}>
                <MapPinIcon className="w-4 h-4 text-gray-500" />
                <Text type="secondary">{item.arena}</Text>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>
    ),
    className: "bg-white !rounded-xl mb-5",
  }))

  return (
    <Collapse
      items={items}
      bordered={false}
      expandIconPosition="end"
      className="!bg-transparent"
      size="large"
    />
  )
}
