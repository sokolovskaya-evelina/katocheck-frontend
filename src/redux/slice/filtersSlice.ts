import { RinksFiltersType, ScheduleFiltersType } from "@/types/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { FavoritesEnum } from "@/types/enums"
import dayjs from "@/lib/dayjs"

type FiltersState = {
  schedule: ScheduleFiltersType
  rinks: RinksFiltersType
}

const initialState: FiltersState = {
  rinks: {
    favorites: FavoritesEnum.All,
  },
  schedule: {
    favorites: FavoritesEnum.All,
    dateRange: [dayjs().toISOString(), dayjs().add(7, "days").toISOString()],
    timeRange: [dayjs().startOf("day").toISOString(), dayjs().endOf("day").toISOString()],
  },
}

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setScheduleFilters: (state, action: PayloadAction<ScheduleFiltersType>) => {
      state.schedule = { ...state.schedule, ...action.payload }
    },
    resetScheduleFilters: state => ({ ...state, schedule: { favorites: FavoritesEnum.All } }),
    setRinksFilters: (state, action: PayloadAction<RinksFiltersType>) => {
      state.rinks = { ...state.rinks, ...action.payload }
    },
    resetRinksFilters: state => ({ ...state, rinks: { favorites: FavoritesEnum.All } }),
  },
})

export const { setScheduleFilters, setRinksFilters, resetScheduleFilters, resetRinksFilters } =
  filtersSlice.actions
export default filtersSlice.reducer
