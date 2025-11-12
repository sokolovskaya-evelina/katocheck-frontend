import { Card, Flex, Tag } from "antd"
import { MapPin } from "lucide-react"
import Link from "next/link"
import { MetroStations } from "@/app/ui/common/metro-station/metro-stations"
import { FavoriteButton } from "@/app/ui/common/favorite-button"
import { RinkShortInfoType } from "@/app/types/types"
import Text from "antd/es/typography/Text"

export default function IceRinkShortInfo({ rink }: { rink: RinkShortInfoType }) {
  const hasSchedule = Object.keys(rink.schedule ?? {}).length > 0

  return (
    <Card
      title={
        <Text ellipsis={{ tooltip: true }}>
          <Link href={`/rinks/${rink.rinkId}`}>{rink.name}</Link>
        </Text>
      }
      extra={<FavoriteButton id={rink.rinkId} />}
    >
      <Flex vertical gap={5}>
        <Flex align="center" gap={5}>
          <MapPin className="w-4 h-4" />
          <Text>{rink.address}</Text>
        </Flex>
        {rink.metroStations.length > 0 ? (
          <MetroStations metroStations={rink.metroStations} />
        ) : (
          <Text>{rink.district}</Text>
        )}
      </Flex>

      <Flex justify="flex-end">
        <Tag color={hasSchedule ? "blue" : "default"}>
          {hasSchedule ? "Расписание доступно" : "Нет расписания"}
        </Tag>
      </Flex>
    </Card>
  )
}
