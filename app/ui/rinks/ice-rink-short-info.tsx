import {Card, Flex, Tag} from "antd"
import {MapPin} from "lucide-react"
import Link from "next/link"
import {MetroStations} from "../common/metro-station/metro-stations"
import Text from "antd/es/typography/Text"
import {translateDistrict} from "@/app/lib/translations/admin/enum.translationts";

export default function IceRinkShortInfo({ rink }: { rink: any }) {
  const hasSchedule = rink.schedules.length > 0

  return (
    <Card
      title={
        <Text ellipsis={{ tooltip: true }}>
          <Link href={`/rinks/${rink.rinkId}`}>{rink.name}</Link>
        </Text>
      }
    >
      <Flex vertical gap={5}>
        <Flex align="center" gap={5}>
          <MapPin className="w-4 h-4" />
          <Text>{rink.address}</Text>
        </Flex>
        {rink.metroStations.length > 0 ? (<Flex>
          <MetroStations metroStations={rink.metroStations} /> <Text className="italic">, {translateDistrict(rink.district)} район</Text></Flex>
        ) : (
          <Text className="italic">, {translateDistrict(rink.district)} район</Text>
        )}
      </Flex>

      <Flex justify="flex-end">
        <Tag color={hasSchedule ? "green" : "default"}>
          {hasSchedule ? "Расписание доступно" : "Нет расписания"}
        </Tag>
      </Flex>
    </Card>
  )
}
