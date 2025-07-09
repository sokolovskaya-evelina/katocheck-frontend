import ScheduleFilters from "@/components/Schedule/ScheduleFilters"
import Schedule from "@/components/Schedule/Schedule"
import { Flex } from "antd"

const Home = () => {
  return (
    <Flex vertical gap={15}>
      <ScheduleFilters />
      <Schedule />
    </Flex>
  )
}

export default Home
