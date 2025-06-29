import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { MapPin } from "lucide-react"
import Link from "next/link"
import { MetroStations } from "@/components/MetroStation/MetroStations"
import { Badge } from "@/components/ui/badge"
import { FavoriteButton } from "@/components/FavoriteButton/FavoriteButton"
import { RinkShortInfoType } from "@/types/types"

export default function IceRinkShortInfo({ rink }: { rink: RinkShortInfoType }) {
  const hasSchedule = Object.keys(rink.schedule ?? {}).length > 0
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex justify-between items-center overflow-hidden">
          <Tooltip>
            <TooltipTrigger className={"hover:text-primary transition max-w-full  truncate"}>
              <Link href={`/rinks/${rink.rinkId}`}>{rink.name}</Link>
            </TooltipTrigger>
            <TooltipContent>{rink.name}</TooltipContent>
          </Tooltip>
          <FavoriteButton isFavorite={rink.isFavorite} />
        </CardTitle>
        <CardDescription>
          <p className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {rink.address}
          </p>
          {rink.metro.length > 0 ? <MetroStations metroStations={rink.metro} /> : rink.district}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2 justify-end">
        <Badge variant={hasSchedule ? "default" : "secondary"}>
          {hasSchedule ? "Расписание доступно" : "Нет расписания"}
        </Badge>
      </CardContent>
    </Card>
  )
}
