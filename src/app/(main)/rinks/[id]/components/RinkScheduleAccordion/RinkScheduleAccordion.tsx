import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react"
import React from "react"
import { ScheduleItemShortType, ScheduleType } from "@/types/types"
import { Badge } from "@/components/ui/badge"
import dayjs from "@/lib/dayjs"

const getTypeColor = (type: string) => {
  switch (type) {
    case "Свободное катание":
      return "bg-blue-100 text-blue-800"
    case "Час хоккея":
      return "bg-red-100 text-red-800"
    case "Детское время":
      return "bg-yellow-100 text-yellow-800"
    case "Фигурное катание":
      return "bg-purple-100 text-purple-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function RinkScheduleAccordion({
  schedule,
}: {
  schedule: ScheduleType<ScheduleItemShortType>[]
}) {
  return (
    <Accordion type="multiple" className="w-full space-y-2">
      {schedule.map(data => (
        <AccordionItem
          key={data.date}
          value={`item-${data.date}`}
          className="rounded-xl border px-4 py-2 shadow-sm bg-white"
        >
          <AccordionTrigger className="text-left text-base font-medium">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-muted-foreground" />
              <span className="capitalize">{dayjs(data.date).format("dddd (DD.MM)")}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            {data.items.map((item, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row md:items-center justify-between border rounded-lg p-3 bg-gray-50 shaow-sm"
              >
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <ClockIcon className="w-4 h-4 text-gray-500" />
                  <span className="font-medium">{`${dayjs(item.startTime).format("HH:mm")} – ${dayjs(item.endTime).format("HH:mm")}`}</span>
                </div>
                <div className="flex items-center gap-2 mt-1 md:mt-0 text-sm flex-wrap">
                  <Badge variant="outline" className={getTypeColor(item.sessionType)}>
                    {item.sessionType}
                  </Badge>
                  <div className="flex items-center gap-1 text-gray-600">
                    <MapPinIcon className="w-4 h-4 text-gray-500" />
                    {item.arena}
                  </div>
                </div>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
