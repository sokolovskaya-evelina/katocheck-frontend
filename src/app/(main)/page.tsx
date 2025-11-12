import ScheduleFilters from "@/app/ui/schedule/schedule-filters"
import Schedule from "@/app/ui/schedule/schedule"
import { Flex } from "antd"

export default function Page() {
  return (
    <Flex vertical gap={15}>
      <ScheduleFilters />
      <Schedule />
    </Flex>
  )
}
