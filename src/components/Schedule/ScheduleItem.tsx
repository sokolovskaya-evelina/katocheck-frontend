import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CalendarIcon, Heart } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import { MetroStations } from "@/components/MetroStation/MetroStations"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScheduleItemType, ScheduleType } from "@/types/types"
import dayjs from "@/lib/dayjs"

type Props = {
  data: ScheduleType<ScheduleItemType>
}

const ScheduleItem = ({ data }: Props) => {
  return (
    <AccordionItem
      value={`item-${data.date}`}
      className="rounded-xl border px-4 py-2 shadow-sm bg-white"
    >
      <AccordionTrigger className="text-left text-base font-medium">
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-4 h-4 text-muted-foreground" />
          <span className="capitalize">
            {dayjs(data.date).format("dddd")} {dayjs(data.date).format("(DD.MM)")}
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="space-y-3 pt-2">
        {data.items.map((item: any, i: number) => (
          <div
            key={i}
            className="flex items-start gap-2 text-sm text-gray-700 justify-between border rounded-lg p-2 bg-gray-50 shaow-sm"
          >
            <div className="flex flex-col items-start">
              <Tooltip>
                <TooltipTrigger className="hover:text-primary transition max-w-full text-base font-bold truncate">
                  <Link href={`/rinks/3`}>{item.title}</Link>
                </TooltipTrigger>
                <TooltipContent>{item.title}</TooltipContent>
              </Tooltip>
              {item.metroStations && <MetroStations metroStations={item.metroStations} />}
            </div>
            <div className="flex gap-1 items-center">
              <div className="flex flex-col items-end">
                <span>
                  {dayjs(item.startTime).format("HH:mm")}-{dayjs(item.endTime).format("HH:mm")}
                </span>
                <Badge className="mt-2" variant="outline">
                  {item.sessionType}
                </Badge>
              </div>
              <Button variant="ghost" size="icon">
                <Heart
                  className={item.favorite ? "fill-primary text-primary" : "text-muted-foreground"}
                />
              </Button>
            </div>
          </div>
        ))}
      </AccordionContent>
    </AccordionItem>
  )
}

export default ScheduleItem
