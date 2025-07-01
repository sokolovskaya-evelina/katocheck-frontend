import { getMetroStationColor } from "@/lib/utils"
import { MetroStationEnum } from "@/types/enums"

export function MetroStation({ name }: { name: MetroStationEnum }) {
  return (
    <div className="flex items-baseline gap-1">
      <span>{name}</span>
      <div className={`w-2 h-2 rounded-full ${getMetroStationColor(name)}`} />
    </div>
  )
}
