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
}

export type ScheduleType = {
  date: string
  items: ScheduleItemType[]
}
