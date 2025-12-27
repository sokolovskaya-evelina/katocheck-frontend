import { Badge, Button, Collapse, Flex } from "antd"
import Text from "antd/es/typography/Text"
import { CalendarIcon } from "lucide-react"
import Link from "next/link"

import { District, IceRinkType, MetroStation } from "@/app/generated/prisma/enums"
import dayjs from "@/app/lib/dayjs"
import { getScheduleGroupedByDay } from "@/lib/data/schedule"

import { MetroStations } from "../common/metro-station/metro-stations"

type Props = { searchParams: Record<string, string | string[]> }

export const Schedule = async ({ searchParams }: Props) => {
  const parsed = {
    startDate: typeof searchParams.startDate === "string" ? searchParams.startDate : undefined,
    endDate: typeof searchParams.endDate === "string" ? searchParams.endDate : undefined,
    startTime: typeof searchParams.startTime === "string" ? searchParams.startTime : undefined,
    endTime: typeof searchParams.endTime === "string" ? searchParams.endTime : undefined,
    rinkType:
      searchParams.rinkType === "INDOOR" || searchParams.rinkType === "OUTDOOR"
        ? (searchParams.rinkType as IceRinkType)
        : undefined,
    rinkIds: typeof searchParams.rinkIds === "string" ? searchParams.rinkIds.split(",") : undefined,
    metroIds:
      typeof searchParams.metroIds === "string"
        ? searchParams.metroIds
          .split(",")
          .filter((id): id is MetroStation =>
            Object.values(MetroStation).includes(id as MetroStation),
          )
        : undefined,
    districts:
      typeof searchParams.districts === "string"
        ? searchParams.districts
          .split(",")
          .filter((d): d is District => Object.values(District).includes(d as District))
        : undefined,
    sessionTypes:
      typeof searchParams.sessionTypes === "string"
        ? searchParams.sessionTypes.split(",")
        : undefined,
  }

  const scheduleData = await getScheduleGroupedByDay(parsed)

  const itemsForCollapse = Object.entries(scheduleData).map(([date, items]) => ({
    key: date,
    label: (
      <Flex gap={15} align="center">
        <CalendarIcon className="w-4 h-4 stroke-slate-500" />
        <Text className="capitalize">{dayjs(date).format("dddd (DD.MM)")}</Text>
      </Flex>
    ),
    children: (
      <Flex vertical gap={10}>
        {items.map((item) => (
          <Flex
            key={item.id}
            justify="space-between"
            align="start"
            gap={15}
            className="rounded-lg border p-2! bg-gray-50"
          >
            <Flex vertical>
              <Text ellipsis={{ tooltip: true }}>
                <Link href={`/rinks/${item.iceRinkId}`}>{item.iceRink.name}</Link>
              </Text>
              {item.iceRink.metroStations?.length > 0 && (
                <MetroStations metroStations={item.iceRink.metroStations} />
              )}
            </Flex>
            <Flex align="start" gap={10}>
              <Flex vertical align="end" gap={5}>
                <Text>
                  {dayjs(item.startTime).format("HH:mm")}–{dayjs(item.endTime).format("HH:mm")}
                </Text>
                <Badge
                  count={item.sessionType.name}
                  color="#d9d9d9"
                  style={{ color: "#595959", backgroundColor: "#f5f5f5" }}
                />
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>
    ),
    className: "bg-white !rounded-xl border shadow-sm px-4",
  }))

  return (
    <div>
      {itemsForCollapse.length > 0 && (
        <Collapse
          defaultActiveKey={dayjs().startOf("day").toISOString()}
          items={itemsForCollapse}
          bordered={false}
          expandIconPosition="end"
          ghost
          className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4 items-start"
        />
      )}
      {Object.keys(searchParams).length > 0 && !itemsForCollapse.length && (
        <Flex vertical align="center" className="text-center italic gap-4">
          <span>⛸️ Сеансов не найдено. Попробуйте изменить фильтры! ⛸️</span>
          <Link href="/">
            <Button>Сбросить фильтры</Button>
          </Link>
        </Flex>
      )}
      {Object.keys(searchParams).length === 0 && !itemsForCollapse.length && (
        <div className="text-center italic">Тут пока нет расписания, загляните позже 🥹</div>
      )}
    </div>
  )
}
