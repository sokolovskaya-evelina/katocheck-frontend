"use client"

import { useState } from "react"
import FilterBar from "@/components/FilterBar/FilterBar"
import { FilterBarItem, FilterState } from "@/components/FilterBar/types/filter.types"
import { Button, Card, Flex, Modal } from "antd"
import { ListFilter } from "lucide-react"

type Props = {
  filters: FilterState
  setFilters: (filters: FilterState) => void
  filterItems: FilterBarItem[]
}

const Filters = ({ filters, setFilters, filterItems }: Props) => {
  const [open, setOpen] = useState(false)

  const handleCancel = () => setOpen(false)

  return (
    <>
      <div className="hidden lg:block max-w-screen-xl mx-auto w-full">
        <Card>
          <Flex align="end" gap={15}>
            <FilterBar filterValues={filters} onFilterChange={setFilters} items={filterItems} />
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
            filterValues={filters}
            onFilterChange={setFilters}
            items={filterItems}
            showResetBtn={false}
          />
          <Flex justify="space-between">
            <Button onClick={() => setFilters({})}>Сбросить фильтры</Button>
            <Flex gap={15}>
              <Button onClick={handleCancel}>Закрыть</Button>
              <Button type="primary" onClick={handleCancel}>
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
