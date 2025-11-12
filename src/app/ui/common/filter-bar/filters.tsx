"use client"

import { useState } from "react"
import FilterBar from "@/app/ui/common/filter-bar/filter-bar"
import { FilterBarItem, FilterState } from "@/app/ui/common/filter-bar/types/filter.types"
import { Button, Card, Flex, Modal } from "antd"
import { ListFilter } from "lucide-react"

type Props = {
  filters: FilterState
  setFilters: (filters: FilterState) => void
  resetFilters: () => void
  filterItems: FilterBarItem[]
}

const Filters = ({ filters, setFilters, filterItems, resetFilters }: Props) => {
  const [open, setOpen] = useState(false)
  const [pendingFilters, setPendingFilters] = useState<FilterState>(filters)

  const handleCancel = () => {
    setOpen(false)
    setPendingFilters(filters) // сброс временных фильтров
  }

  const handleApply = () => {
    setFilters(pendingFilters)
    setOpen(false)
  }

  const handleReset = () => {
    setPendingFilters({})
    resetFilters()
  }

  return (
    <>
      <div className="hidden lg:block max-w-screen-xl mx-auto w-full">
        <Card>
          <Flex align="end" gap={15}>
            <FilterBar
              filterValues={filters}
              onFilterChange={setFilters}
              onFilterReset={resetFilters}
              items={filterItems}
            />
          </Flex>
        </Card>
      </div>

      <div className="lg:hidden">
        <Button type="primary" icon={<ListFilter />} onClick={() => setOpen(!open)}>
          Фильтры
        </Button>
      </div>

      <Modal title="Фильтры" open={open} footer={false} onCancel={handleCancel}>
        <Flex vertical gap={15} className="w-full">
          <FilterBar
            filterValues={pendingFilters}
            onFilterChange={setPendingFilters}
            onFilterReset={resetFilters}
            items={filterItems}
            showResetBtn={false}
          />
          <Flex justify="space-between">
            <Button onClick={handleReset}>Сбросить фильтры</Button>
            <Flex gap={15}>
              <Button onClick={handleCancel}>Закрыть</Button>
              <Button type="primary" onClick={handleApply}>
                Применить
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Modal>
    </>
  )
}

export default Filters
