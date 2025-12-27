import { Card, Flex, Tag } from "antd"
import Text from "antd/es/typography/Text"
import { MapPin } from "lucide-react"
import Link from "next/link"

import { translateDistrict } from "@/app/lib/translations/admin/enum.translationts"
import { DistrictEnum } from "@/app/types/enums"
import { IceRinkShortInfoType } from "@/app/types/types"

import { MetroStations } from "../common/metro-station/metro-stations"

export default function IceRinkShortInfo({ rink }: { rink: IceRinkShortInfoType }) {
  const hasSchedule = rink.schedules.length > 0

  return (
    <Card
      title={
        <Text ellipsis={{ tooltip: true }}>
          <Link href={`/rinks/${rink.id}`}>{rink.name}</Link>
        </Text>
      }
    >
      <Flex vertical gap={5}>
        <Flex vertical gap={5}>
          {rink.address && (
            <Flex align="center" gap={5}>
              <MapPin className="w-4 h-4" />
              <Text>{rink.address}</Text>
            </Flex>
          )}
          {rink.metroStations && (
            <Flex>
              <MetroStations metroStations={rink.metroStations} />{" "}
              {rink.district && (
                <Text className="italic">
                  , {translateDistrict(rink.district as DistrictEnum)} район
                </Text>
              )}
            </Flex>
          )}
          {rink.district && (
            <Text className="italic">{translateDistrict(rink.district as DistrictEnum)} район</Text>
          )}
        </Flex>

        <Flex justify="flex-end">
          <Tag color={hasSchedule ? "green" : "default"}>
            {hasSchedule ? "Расписание доступно" : "Нет расписания"}
          </Tag>
        </Flex>
      </Flex>
    </Card>
  )
}
