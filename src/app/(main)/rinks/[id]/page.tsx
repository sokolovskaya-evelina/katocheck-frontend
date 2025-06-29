import { Card } from "@/components/ui/card"
import Map from "../components/Map/Map"
import IceRinkFullInfo from "@/components/IceRinkShortInfo/IceRinkShortInfo"
import { mockRink } from "@/mocks/mockData"
import { RinkScheduleAccordion } from "./../components/RinkScheduleAccordion/RinkScheduleAccordion"

export default function Page() {
  return (
    <div className="space-y-4">
      <IceRinkFullInfo rink={mockRink} />
      <div className="flex flex-col lg:flex-row items-start gap-4">
        <div className="w-full lg:w-1/2">
          <RinkScheduleAccordion schedule={mockRink.schedule} />
        </div>
        <Card className="p-4 w-full lg:w-1/2">
          <Map location={[60.036484, 30.306125]} />
        </Card>
      </div>
    </div>
  )
}
