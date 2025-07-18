"use client"

import { useCallback, useMemo } from "react"
import { FilterBarItem, FilterState } from "@/components/FilterBar/types/filter.types"
import Filters from "@/components/FilterBar/Filters"
import { getMetroStationOptions } from "@/lib/utils"
import { resetScheduleFilters, setScheduleFilters } from "@/redux/slice/filtersSlice"
import { RinksFiltersType } from "@/types/types"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { FavoritesEnum } from "@/types/enums"

const ScheduleFilters = () => {
  const dispatch = useAppDispatch()
  const filters = useAppSelector(state => state.filters.schedule)

  const items: FilterBarItem[] = useMemo(
    () => [
      {
        name: "rinkIds",
        type: "select",
        label: "Каток",
        options: [
          { value: 1, label: "Каток 1" },
          { value: 2, label: "Каток 2" },
          { value: 3, label: "Каток 3" },
          { value: 4, label: "Каток 4" },
        ],
        allowClear: true,
        mode: "multiple",
        maxTagCount: "responsive",
      },
      {
        name: "metroIds",
        type: "select",
        label: "Станция метро",
        options: getMetroStationOptions(),
        allowClear: true,
        mode: "multiple",
        maxTagCount: "responsive",
      },
      {
        name: "sessionTypes",
        type: "select",
        label: "Вид сеанса",
        allowClear: true,
        options: [{ label: "Свободное катание", value: 1 }],
        mode: "multiple",
        maxTagCount: "responsive",
      },
      {
        name: "isFavorite",
        type: "select",
        label: "Избранное",
        defaultValue: FavoritesEnum.All,
        options: [
          { label: "Все", value: FavoritesEnum.All },
          { label: "Только избранное", value: FavoritesEnum.Favorites },
        ],
      },
    ],
    []
  )

  const handleSetFilters = useCallback((newFilters: FilterState) => {
    dispatch(setScheduleFilters(newFilters as RinksFiltersType))
  }, [])

  const handleResetFilters = useCallback(() => {
    dispatch(resetScheduleFilters())
  }, [])

  return (
    <Filters
      filters={filters}
      setFilters={handleSetFilters}
      resetFilters={handleResetFilters}
      filterItems={items}
    />
  )
}

export default ScheduleFilters
