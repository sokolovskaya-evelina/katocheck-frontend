import Typography from "antd/es/typography"
import Flex from "antd/es/flex"
import Button from "antd/es/button"
import { FilterBarItem, FilterState } from "./types/filter.types"
import { FilterItem } from "@/components/FilterBar/FilterItem"

export interface FilterBarProps {
  filterValues: FilterState
  onFilterChange: (filters: FilterState) => void
  onFilterReset: () => void
  items: FilterBarItem[]
  showResetBtn?: boolean
}

function FilterBar({
  filterValues,
  onFilterChange,
  onFilterReset,
  items,
  showResetBtn = true,
}: FilterBarProps) {
  const setFilterValue = (key: string, value: any) => {
    const newFilters = { ...filterValues, [key]: value }
    onFilterChange(newFilters)
  }

  const resetFilterValue = () => {
    onFilterReset()
  }

  return (
    <>
      {items.map(item => (
        <Flex vertical key={item.name} className="flex-1">
          <Typography.Text>{item.label}</Typography.Text>
          <FilterItem
            item={item}
            value={filterValues[item.name]}
            onChange={e => setFilterValue(item.name, e)}
          />
        </Flex>
      ))}

      {showResetBtn && (
        <Button type="link" onClick={resetFilterValue}>
          Сбросить фильтры
        </Button>
      )}
    </>
  )
}

export default FilterBar
