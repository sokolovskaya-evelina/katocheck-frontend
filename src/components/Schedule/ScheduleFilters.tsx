"use client"

import { useMemo, useState } from "react"
import FilterBar from "@/components/FilterBar/FilterBar"
import { FilterBarItem, FilterState } from "@/components/FilterBar/types/filter.types"
import { Button, Card, Flex, Modal } from "antd"
import { ListFilter } from "lucide-react"

const ScheduleFilters = () => {
  const [filters, setFilters] = useState<FilterState>({})
  const [open, setOpen] = useState(false)

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
        options: [{ label: "Озерки", value: 1 }],
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
        label: "Вид сеанса",
        allowClear: true,
        options: [{ label: "Свободное катание", value: 1 }],
        mode: "multiple",
        maxTagCount: "responsive",
      },
    ],
    []
  )

  const handleCancel = () => setOpen(false)

  return (
    <>
      <div className="hidden lg:block max-w-screen-xl mx-auto w-full">
        <Card>
          <Flex align="end" gap={15}>
            <FilterBar filterValues={filters} onFilterChange={setFilters} items={items} />
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
            items={items}
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

export default ScheduleFilters
