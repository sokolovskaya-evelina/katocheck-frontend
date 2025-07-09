import { Badge, Button, Collapse, Flex } from "antd"
import { CalendarIcon, Heart } from "lucide-react"
import Link from "next/link"
import { MetroStations } from "@/components/MetroStation/MetroStations"
import { ScheduleItemType, ScheduleType } from "@/types/types"
import dayjs from "@/lib/dayjs"
import { mockSchedule } from "@/mocks/mockData"
import Text from "antd/es/typography/Text"

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
            <Flex align="center" gap={10}>
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
              <Button
                type="text"
                icon={
                  <Heart
                    className={
                      item.favorite ? "fill-primary stroke-transparent" : "stroke-slate-400"
                    }
                  />
                }
              />
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
