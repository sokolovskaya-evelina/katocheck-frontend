export type MetroStationType = {
  id: number
  name: string
}

export type ScheduleItemType = {
  rinkId: string
  title: string
  metroStations: MetroStationType[]
  favorite: boolean
  startTime: string
  endTime: string
  sessionType: string
  arena?: string
}

export type ScheduleItemShortType = Pick<
  ScheduleItemType,
  "startTime" | "endTime" | "arena" | "sessionType"
>

export type ScheduleType<T> = {
  date: string
  items: T[]
}

export type Rink = {
  rinkId: string
  name: string
  imageUrl?: string
  address: string
  metro: MetroStationType[]
  district?: string
  phones: string[]
  socials: { name: string; url: string }[]
  location: [number, number]
  isFavorite: boolean
  schedule: ScheduleType<ScheduleItemShortType>[]
}
