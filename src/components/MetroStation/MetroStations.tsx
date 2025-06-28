import { MetroStation } from "./MetroStation"
import { MetroStationType } from "@/types/types"

export function MetroStations({ metroStations = [] }: { metroStations: MetroStationType[] }) {
  return (
    metroStations.length > 0 && (
      <div className="flex flex-wrap gap-1 mt-2">
        {metroStations.map((station, index) => (
          <div key={station.id} className="flex">
            <div className="flex items-baseline gap-1">
              <MetroStation name={station.name} />
            </div>
            {index < metroStations.length - 1 && ","}
          </div>
        ))}
      </div>
    )
  )
}
