import { getMetroStationColor } from "@/lib/utils"
import { MetroStationEnum } from "@/types/enums"

type Props = {
  name: MetroStationEnum
  indicatorPosition?: "start" | "end"
}

export function MetroStation({ name, indicatorPosition = "end" }: Props) {
  return (
    <div
      className={`flex items-baseline gap-1 ${indicatorPosition === "start" ? "flex-row" : "flex-row-reverse"}`}
    >
      <div className={`w-2 h-2 rounded-full ${getMetroStationColor(name)}`} />
      <span>{name}</span>
    </div>
  )
}
