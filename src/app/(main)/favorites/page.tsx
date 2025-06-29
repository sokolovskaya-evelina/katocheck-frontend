import { mockRinks } from "@/mocks/mockData"
import IceRinkShortInfo from "@/components/IceRinkShortInfo/IceRinkShortInfo"

export default function Page() {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4">
      {mockRinks.length > 0 &&
        mockRinks
          .filter(rink => rink.isFavorite)
          .map(rink => <IceRinkShortInfo key={rink.rinkId} rink={rink} />)}
    </div>
  )
}
