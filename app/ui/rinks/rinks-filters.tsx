"use client"

import { Button, Checkbox, Flex, Modal } from "antd"
import Select from "antd/es/select"
import Typography from "antd/es/typography"
import { ListFilter } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useMemo, useState } from "react"

import { District, IceRinkType, MetroStation } from "@/app/generated/prisma/enums"
import { districtOptions, rinkTypeOptions } from "@/app/lib/constsnts"
import { getMetroStationOptions } from "@/app/lib/utils"
import { RinkTypeEnum } from "@/app/types/enums"

type FiltersState = {
  metroIds: MetroStation[]
  districts: District[]
  sessionTypes: string[]
  rinkType: IceRinkType | "ALL"
  hasSchedule: boolean
}

const initialFilterState: FiltersState = {
  metroIds: [],
  districts: [],
  sessionTypes: [],
  rinkType: RinkTypeEnum.All,
  hasSchedule: false,
}

type Props = {
  sessionTypes: { id: string; name: string }[]
}

function areFiltersEqual(a: FiltersState, b: FiltersState) {
  return (
    JSON.stringify(a.metroIds) === JSON.stringify(b.metroIds) &&
    JSON.stringify(a.districts) === JSON.stringify(b.districts) &&
    JSON.stringify(a.sessionTypes) === JSON.stringify(b.sessionTypes) &&
    a.rinkType === b.rinkType &&
    a.hasSchedule === b.hasSchedule
  )
}

const RinksFilters = ({ sessionTypes }: Props) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const [localFilters, setLocalFilters] = useState<FiltersState>(initialFilterState)
  const [draftFilters, setDraftFilters] = useState<FiltersState>(initialFilterState)

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries())

    const metroIds: MetroStation[] = params.metroIds
        ?.split(",")
        .filter((v): v is MetroStation =>
          Object.values(MetroStation).includes(v as MetroStation),
        )
      ?? []

    const districts: District[] = params.districts
        ?.split(",")
        .filter((v): v is District => Object.values(District).includes(v as District))
      ?? []

    const rinkType =
      params.rinkType === IceRinkType.INDOOR || params.rinkType === IceRinkType.OUTDOOR
        ? params.rinkType
        : RinkTypeEnum.All

    const updatedFilters: FiltersState = {
      metroIds,
      districts,
      sessionTypes: params.sessionTypes?.split(",") ?? [],
      rinkType,
      hasSchedule: params.hasSchedule === "true",
    }

    setLocalFilters(updatedFilters)
    setDraftFilters(updatedFilters)
  }, [searchParams])

  const updateParams = () => {
    const p = new URLSearchParams()

    if (draftFilters.metroIds.length) p.set("metroIds", draftFilters.metroIds.join(","))
    if (draftFilters.districts.length) p.set("districts", draftFilters.districts.join(","))
    if (draftFilters.sessionTypes.length) p.set("sessionTypes", draftFilters.sessionTypes.join(","))
    if (draftFilters.rinkType !== RinkTypeEnum.All) p.set("rinkType", draftFilters.rinkType)
    if (draftFilters.hasSchedule) p.set("hasSchedule", "true")

    router.push("?" + p.toString())
  }

  const sessionTypeOptions = useMemo(
    () => sessionTypes.map(option => ({ value: option.id, label: option.name })),
    [sessionTypes],
  )

  return (
    <div className="flex justify-end mt-2 mb-2">
      <Flex gap={10}>
        <Button
          type="primary"
          icon={<ListFilter />}
          onClick={() => {
            setDraftFilters(localFilters)
            setOpen(true)
          }}
        >
          Фильтры
        </Button>
      </Flex>

      <Modal
        title="Фильтры"
        open={open}
        onCancel={() => {
          setDraftFilters(localFilters)
          setOpen(false)
        }}
        footer={false}
      >
        <Flex vertical gap={15} className="w-full">
          <Flex vertical>
            <Typography.Text>Станция метро</Typography.Text>
            <Select
              allowClear
              mode="multiple"
              maxTagCount="responsive"
              options={getMetroStationOptions()}
              value={draftFilters.metroIds}
              onChange={val => setDraftFilters(prev => ({ ...prev, metroIds: val }))}
            />
          </Flex>
          <Flex vertical>
            <Typography.Text>Район</Typography.Text>
            <Select
              allowClear
              mode="multiple"
              maxTagCount="responsive"
              options={districtOptions}
              value={draftFilters.districts}
              onChange={val => setDraftFilters(prev => ({ ...prev, districts: val }))}
            />
          </Flex>
          <Flex vertical>
            <Typography.Text>Вид сеанса</Typography.Text>
            <Select
              allowClear
              mode="multiple"
              maxTagCount="responsive"
              options={sessionTypeOptions}
              value={draftFilters.sessionTypes}
              onChange={val => setDraftFilters(prev => ({ ...prev, sessionTypes: val }))}
            />
          </Flex>
          <Flex vertical>
            <Typography.Text>Тип катка</Typography.Text>
            <Select
              options={rinkTypeOptions}
              maxTagCount="responsive"
              value={draftFilters.rinkType}
              onChange={val => setDraftFilters(prev => ({ ...prev, rinkType: val }))}
            />
          </Flex>
          <Flex vertical>
            <Checkbox
              checked={draftFilters.hasSchedule}
              onChange={e => setDraftFilters(prev => ({ ...prev, hasSchedule: e.target.checked }))}
            >
              Только с расписанием
            </Checkbox>
          </Flex>
          <Flex justify="space-between">
            <Button onClick={() => setDraftFilters(initialFilterState)}>Сбросить</Button>
            <Flex gap={15}>
              <Button
                onClick={() => {
                  setDraftFilters(localFilters)
                  setOpen(false)
                }}
              >
                Закрыть
              </Button>
              <Button
                type="primary"
                disabled={areFiltersEqual(draftFilters, localFilters)}
                onClick={() => {
                  setLocalFilters(draftFilters)
                  updateParams()
                  setOpen(false)
                }}
              >
                Применить
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Modal>
    </div>
  )
}

export default RinksFilters
