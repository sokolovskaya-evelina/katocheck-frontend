import { MetroStation } from "./MetroStation"
import { MetroStationEnum } from "@/types/enums"

export function MetroStations({ metroStations = [] }: { metroStations: MetroStationEnum[] }) {
  return (
    metroStations.length > 0 && (
      <div className="flex flex-wrap gap-1 mt-2">
        {metroStations.map((station, index) => (
          <div key={index} className="flex">
            <div className="flex items-baseline gap-1">
              <MetroStation name={station} />
            </div>
            {index < metroStations.length - 1 && ","}
          </div>
        ))}
      </div>
    )
  )
}
