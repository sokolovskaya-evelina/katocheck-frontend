import { Space } from "antd"
import { MetroStation } from "./metro-station"
import { MetroStationEnum } from "@/app/types/enums"
import Text from "antd/es/typography/Text"

type Props = {
  metroStations?: MetroStationEnum[]
}

export function MetroStations({ metroStations = [] }: Props) {
  if (metroStations.length === 0) return null

  return (
    <Space wrap size={[8, 4]}>
      {metroStations.map((station, index) => (
        <Text key={index}>
          <MetroStation name={station} />
          {index < metroStations.length - 1 && <span>,</span>}
        </Text>
      ))}
    </Space>
  )
}
