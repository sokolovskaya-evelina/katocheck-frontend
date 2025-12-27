import { Space } from "antd"
import Text from "antd/es/typography/Text"

import { MetroStationEnum } from "@/app/types/enums"

import { MetroStation } from "./metro-station"

type MetroStationType = {
  id: string
  station: string
}
type Props = {
  metroStations?: MetroStationType[]
}

export function MetroStations({ metroStations = [] }: Props) {
  if (metroStations.length === 0) return null

  return (
    <Space wrap size={[8, 4]}>
      {metroStations.map((metro, index) => (
        <Text key={metro.id}>
          <MetroStation name={metro.station as MetroStationEnum} />
          {index < metroStations.length - 1 && <span>,</span>}
        </Text>
      ))}
    </Space>
  )
}
