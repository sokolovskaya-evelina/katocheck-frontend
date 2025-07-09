import { Dispatch, SetStateAction } from "react"
import Typography from "antd/es/typography"
import Flex from "antd/es/flex"
import Button from "antd/es/button"
import { FilterBarItem, FilterState } from "./types/filter.types"
import { FilterItem } from "@/components/FilterBar/FilterItem"

export interface FilterBarProps {
  filterValues: FilterState
  onFilterChange: Dispatch<SetStateAction<FilterState>>
  items: FilterBarItem[]
  showResetBtn?: boolean
}

function FilterBar({ filterValues, onFilterChange, items, showResetBtn = true }: FilterBarProps) {
  const setFilterValue = (key: string, value: any) => {
    onFilterChange(prevValues => ({ ...prevValues, [key]: value }))
  }

  const onFilterReset = () => {
    onFilterChange({})
  }

  return (
    <>
      {items.map(item => {
        return (
          <Flex vertical key={item.name} className="flex-1">
            <Typography.Text>{item.label}</Typography.Text>
            <FilterItem
              item={item}
              value={filterValues[item.name]}
              onChange={e => setFilterValue(item.name, e)}
            />
          </Flex>
        )
      })}
      {showResetBtn && (
        <Button type="link" onClick={onFilterReset}>
          Сбросить фильтры
        </Button>
      )}
    </>
  )
}

export default FilterBar
