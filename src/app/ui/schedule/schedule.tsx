import { Badge, Collapse, Flex } from "antd"
import { CalendarIcon } from "lucide-react"
import Link from "next/link"
import { MetroStations } from "@/app/ui/common/metro-station/metro-stations"
import { ScheduleItemType, ScheduleType } from "@/app/types/types"
import dayjs from "@/app/lib/dayjs"
import { mockSchedule } from "@/mocks/mockData"
import Text from "antd/es/typography/Text"
import { FavoriteButton } from "@/app/ui/common/favorite-button"

const Schedule = () => {
  const items = mockSchedule.map((data: ScheduleType<ScheduleItemType>) => ({
    key: data.date,
    label: (
      <Flex gap={15} align="center">
        <CalendarIcon className="w-4 h-4 stroke-slate-500" />
        <Text className="capitalize">{dayjs(data.date).format("dddd (DD.MM)")}</Text>
      </Flex>
    ),
    children: (
      <Flex vertical gap={10}>
        {data.items.map((item, i) => (
          <Flex
            key={i}
            justify="space-between"
            align="start"
            gap={15}
            className="rounded-lg border !p-2 bg-gray-50"
          >
            <Flex vertical>
              <Text ellipsis={{ tooltip: true }}>
                <Link href={`/rinks/3`}>{item.title}</Link>
              </Text>
              {item.metroStations && <MetroStations metroStations={item.metroStations} />}
            </Flex>
            <Flex align="start" gap={10}>
              <Flex vertical align="end" gap={5}>
                <Text>
                  {dayjs(item.startTime).format("HH:mm")}–{dayjs(item.endTime).format("HH:mm")}
                </Text>
                <Badge
                  count={item.sessionType}
                  color="#d9d9d9"
                  style={{ color: "#595959", backgroundColor: "#f5f5f5" }}
                />
              </Flex>
              <FavoriteButton id={item.rinkId} />
            </Flex>
          </Flex>
        ))}
      </Flex>
    ),
    className: "bg-white !rounded-xl border shadow-sm px-4",
  }))

  return (
    <div>
      <Collapse
        items={items}
        bordered={false}
        expandIconPosition="end"
        className="!bg-transparent grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4 items-start"
      />
    </div>
  )
}

export default Schedule
