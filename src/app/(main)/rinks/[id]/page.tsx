import Map from "../components/Map/Map"
import IceRinkFullInfo from "./../components/IceRinkFullInfo/IceRinkFullInfo"
import { mockRink } from "@/mocks/mockData"
import { RinkScheduleAccordion } from "./../components/RinkScheduleAccordion/RinkScheduleAccordion"
import { Card, Flex } from "antd"

export default function Page() {
  return (
    <Flex vertical gap={32}>
      <IceRinkFullInfo rink={mockRink} />

      <Flex gap={16} wrap="wrap">
        <div className="flex-[1_1_100%] lg:flex-[1_1_48%] min-w-[300px]">
          <RinkScheduleAccordion schedule={mockRink.schedule} />
        </div>

        <div className="flex-[1_1_100%] lg:flex-[1_1_48%] min-w-[300px]">
          <Card>
            <Map location={[60.036484, 30.306125]} />
          </Card>
        </div>
      </Flex>
    </Flex>
  )
}
