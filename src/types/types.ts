import { DistrictEnum, MetroStationEnum } from "@/types/enums"

export type ScheduleItemType = {
  rinkId: string
  title: string
  metroStations: MetroStationEnum[]
  favorite: boolean
  startTime: string
  endTime: string
  sessionType: string
  arena?: string
  note?: string
}

export type ScheduleItemShortType = Pick<
  ScheduleItemType,
  "startTime" | "endTime" | "arena" | "sessionType" | "note"
>

export type ScheduleType<T> = {
  date: string
  items: T[]
}

export type RinkType = {
  rinkId: string
  name: string
  imageUrl?: string
  address: string
  metroStations: MetroStationEnum[]
  district?: DistrictEnum
  phones: string[]
  socials: { name: string; url: string }[]
  location: [number, number]
  isFavorite: boolean
  schedule: ScheduleType<ScheduleItemShortType>[]
}

export type RinkShortInfoType = Pick<
  RinkType,
  "rinkId" | "name" | "isFavorite" | "address" | "metroStations" | "district" | "schedule"
>
