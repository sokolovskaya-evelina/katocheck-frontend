import { DistrictEnum, FavoritesEnum, MetroStationEnum } from "@/app/types/enums"

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
  schedule: ScheduleType<ScheduleItemShortType>[]
}

export type RinkShortInfoType = Pick<
  RinkType,
  "rinkId" | "name" | "address" | "metroStations" | "district" | "schedule"
>

type Favorites = FavoritesEnum.All | FavoritesEnum.Favorites

export type ScheduleFiltersType = {
  rinkIds?: string[]
  metroStations?: MetroStationEnum[]
  sessionTypes?: string[]
  districts?: string[]
  favorites: Favorites
  dateRange?: [string, string]
  timeRange?: [string, string]
}

export type RinksFiltersType = {
  rinkIds?: string[]
  metroStations?: MetroStationEnum[]
  favorites: Favorites
}
