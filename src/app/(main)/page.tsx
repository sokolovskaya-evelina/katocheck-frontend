import { Accordion } from "@/components/ui/accordion"
import ScheduleFilters from "@/components/Schedule/ScheduleFilters"
import ScheduleItem from "@/components/Schedule/ScheduleItem"
import { mockSchedule } from "@/mocks/mockData"

export default function Home() {
  return (
    <div>
      <ScheduleFilters />
      <Accordion
        type="multiple"
        className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4 items-start"
      >
        {mockSchedule.map(data => (
          <ScheduleItem data={data} key={data.date} />
        ))}
      </Accordion>
    </div>
  )
}
