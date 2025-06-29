import IceRinkShortInfo from "./components/IceRinkShortInfo/IceRinkShortInfo"
import { mockRinks } from "@/mocks/mockData"

export default function Page() {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4">
      {mockRinks.map(rink => (
        <IceRinkShortInfo key={rink.rinkId} rink={rink} />
      ))}
    </div>
  )
}
