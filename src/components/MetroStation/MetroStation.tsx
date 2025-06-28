import { getMetroStationColor } from "@/lib/utils"

export function MetroStation({ name }: { name: string }) {
  return (
    <div className="flex items-baseline gap-1">
      <span>{name}</span>
      <div className={`w-2 h-2 rounded-full ${getMetroStationColor(name)}`} />
    </div>
  )
}
