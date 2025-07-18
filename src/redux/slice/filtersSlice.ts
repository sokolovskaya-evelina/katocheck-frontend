import { RinksFiltersType, ScheduleFiltersType } from "@/types/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { FavoritesEnum } from "@/types/enums"

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
      console.log(action.payload)
      state.rinks = { ...state.rinks, ...action.payload }
    },
    resetRinksFilters: state => ({ ...state, rinks: { favorites: FavoritesEnum.All } }),
  },
})

export const { setScheduleFilters, setRinksFilters, resetScheduleFilters, resetRinksFilters } =
  filtersSlice.actions
export default filtersSlice.reducer
