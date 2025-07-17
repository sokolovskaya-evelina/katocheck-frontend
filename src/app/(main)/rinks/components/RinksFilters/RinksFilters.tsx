"use client"

import { useMemo, useState } from "react"
import { FilterBarItem, FilterState } from "@/components/FilterBar/types/filter.types"
import Filters from "@/components/FilterBar/Filters"
import { getMetroStationOptions } from "@/lib/utils"

const RinksFilters = () => {
  const [filters, setFilters] = useState<FilterState>({})

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
        name: "isFavorite",
        type: "select",
        label: "Избранное",
        defaultValue: "all",
        options: [
          { label: "Все", value: "all" },
          { label: "Только избранное", value: "isFavorite" },
        ],
        maxTagCount: "responsive",
      },
    ],
    []
  )

  return <Filters filters={filters} setFilters={setFilters} filterItems={items} />
}

export default RinksFilters
