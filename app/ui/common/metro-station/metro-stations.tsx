import { Space } from "antd"
import { MetroStation } from "./metro-station"
import Text from "antd/es/typography/Text"

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
          <MetroStation name={metro.station} />
          {index < metroStations.length - 1 && <span>,</span>}
        </Text>
      ))}
    </Space>
  )
}
