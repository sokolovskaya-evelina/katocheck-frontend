import { getMetroStationColor } from "@/lib/utils"
import { MetroStationEnum } from "@/types/enums"
import { Space } from "antd"
import Text from "antd/es/typography/Text"

type Props = {
  name: MetroStationEnum
  indicatorPosition?: "start" | "end"
}

export function MetroStation({ name, indicatorPosition = "start" }: Props) {
  const direction = indicatorPosition === "start" ? "row" : "row-reverse"

  return (
    <Space direction="horizontal" className={`flex items-baseline gap-1 flex-${direction}`}>
      <div className={`w-2 h-2 rounded-full ${getMetroStationColor(name)}`} />
      <Text>{name}</Text>
    </Space>
  )
}
