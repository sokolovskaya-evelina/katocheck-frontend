import { IceRinkType } from "@/app/generated/prisma/enums"
import { IceRinkGetPayload } from "@/app/generated/prisma/models/IceRink"

export type RinkType = "ALL" | IceRinkType

export type IceRinkShortInfoType = IceRinkGetPayload<{
  include: {
    metroStations: true
    schedules: true
  }
}>

