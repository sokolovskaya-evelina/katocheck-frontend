"use client"

import { useCallback, useMemo } from "react"
import { FilterBarItem, FilterState } from "../common/filter-bar/types/filter.types"
import Filters from "../common/filter-bar/filters"
import { getMetroStationOptions } from "../../lib/utils"
import { resetScheduleFilters, setScheduleFilters } from "../../redux/slice/filtersSlice"
import { ScheduleFiltersType } from "../../types/types"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { FavoritesEnum } from "../../types/enums"
import dayjs from "dayjs"

const ScheduleFilters = () => {
  const dispatch = useAppDispatch()
  const filters = useAppSelector(state => state.filters.schedule)

  const items: FilterBarItem[] = useMemo(
    () => [
      {
        name: "dateRange",
        type: "date-range",
        label: "Дата",
        format: "DD.MM",
        minDate: dayjs(),
        maxDate: dayjs().endOf("year"),
        allowClear: false,
      },
      {
        name: "timeRange",
        type: "time-range",
        label: "Время сеансов",
        format: "HH:mm",
        needConfirm: false,
        allowClear: false,
      },
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
    const { dateRange, timeRange, ...rest } = newFilters

    1
    dispatch(
      setScheduleFilters({
        dateRange: [dayjs(dateRange[0]).toISOString(), dayjs(dateRange[1]).toISOString()],
        timeRange: [dayjs(timeRange[0]).toISOString(), dayjs(timeRange[1]).toISOString()],
        ...rest,
      } as ScheduleFiltersType)
    )
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
