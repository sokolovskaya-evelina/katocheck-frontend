"use client"

import { useCallback, useMemo } from "react"
import Filters from "../common/filter-bar/filters"
import { getMetroStationOptions } from "../../lib/utils"
import type { FilterBarItem, FilterState } from "../common/filter-bar/types/filter.types"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { resetRinksFilters, setRinksFilters } from "../../redux/slice/filtersSlice"
import { RinksFiltersType } from "../../types/types"
import { FavoritesEnum } from "../../types/enums"

const RinksFilters = () => {
  const dispatch = useAppDispatch()
  const filters = useAppSelector(state => state.filters.rinks)

  const items: FilterBarItem[] = useMemo(
    () => [
      {
        name: "rinkIds",
        type: "select",
        label: "Каток",
        options: [
          { value: "1", label: "Каток 1" },
          { value: "2", label: "Каток 2" },
          { value: "3", label: "Каток 3" },
          { value: "4", label: "Каток 4" },
        ],
        allowClear: true,
        mode: "multiple",
        maxTagCount: "responsive",
      },
      {
        name: "metroStations",
        type: "select",
        label: "Станция метро",
        options: getMetroStationOptions(),
        allowClear: true,
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
    dispatch(setRinksFilters(newFilters as RinksFiltersType))
  }, [])

  const handleResetFilters = useCallback(() => {
    dispatch(resetRinksFilters())
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

export default RinksFilters
