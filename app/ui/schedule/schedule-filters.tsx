"use client"

import { useEffect, useMemo, useState } from "react"
import { Button, Flex, Modal } from "antd"
import Typography from "antd/es/typography"
import { ListFilter } from "lucide-react"
import DatePicker from "antd/es/date-picker"
import Select from "antd/es/select"
import TimePicker from "antd/es/time-picker"
import dayjs from "@/app/lib/dayjs"
import { getMetroStationOptions } from "@/app/lib/utils"
import { RinkTypeEnum } from "@/app/types/enums"
import { useRouter, useSearchParams } from "next/navigation"
import { districtOptions, rinkTypeOptions } from "@/app/lib/constsnts"

const initialFilterState = {
    dateRange: [dayjs(), dayjs().endOf("week")],
    timeRange: [dayjs().startOf("day"), dayjs().endOf("day")],
    rinkIds: [],
    metroIds: [],
    districts: [],
    sessionTypes: [],
    rinkType: RinkTypeEnum.All
}

type Props = {
    rinks: { id: string; name: string }[]
    sessionTypes: { id: string; name: string }[]
}

function areFiltersEqual(a, b) {
    return (
        dayjs(a.dateRange[0]).isSame(b.dateRange[0], "day") &&
        dayjs(a.dateRange[1]).isSame(b.dateRange[1], "day") &&
        dayjs(a.timeRange[0]).isSame(b.timeRange[0], "minute") &&
        dayjs(a.timeRange[1]).isSame(b.timeRange[1], "minute") &&
        JSON.stringify(a.rinkIds) === JSON.stringify(b.rinkIds) &&
        JSON.stringify(a.metroIds) === JSON.stringify(b.metroIds) &&
        JSON.stringify(a.districts) === JSON.stringify(b.districts) &&
        JSON.stringify(a.sessionTypes) === JSON.stringify(b.sessionTypes) &&
        a.rinkType === b.rinkType
    )
}

const ScheduleFilters = ({ rinks, sessionTypes }: Props) => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [open, setOpen] = useState(false)

    const [localFilters, setLocalFilters] = useState(initialFilterState)
    const [draftFilters, setDraftFilters] = useState(initialFilterState)

    useEffect(() => {
        const params = Object.fromEntries(searchParams.entries())

        const updatedFilters = {
            ...initialFilterState,
            dateRange: params.startDate && params.endDate
                ? [dayjs(params.startDate, "YYYY-MM-DD"), dayjs(params.endDate, "YYYY-MM-DD")]
                : initialFilterState.dateRange,
            timeRange: params.startTime && params.endTime
                ? [dayjs(params.startTime, "HH:mm"), dayjs(params.endTime, "HH:mm")]
                : initialFilterState.timeRange,
            rinkIds: params.rinkIds ? params.rinkIds.split(",") : [],
            metroIds: params.metroIds ? params.metroIds.split(",") : [],
            districts: params.districts ? params.districts.split(",") : [],
            sessionTypes: params.sessionTypes ? params.sessionTypes.split(",") : [],
            rinkType: params.rinkType || RinkTypeEnum.All,
        }

        setLocalFilters(updatedFilters)
        setDraftFilters(updatedFilters)
    }, [searchParams])

    const updateParams = () => {
        const p = new URLSearchParams()

        p.set("startDate", draftFilters.dateRange[0].format("YYYY-MM-DD"))
        p.set("endDate", draftFilters.dateRange[1].format("YYYY-MM-DD"))
        p.set("startTime", draftFilters.timeRange[0].format("HH:mm"))
        p.set("endTime", draftFilters.timeRange[1].format("HH:mm"))

        if (draftFilters.rinkIds.length) p.set("rinkIds", draftFilters.rinkIds.join(","))
        if (draftFilters.metroIds.length) p.set("metroIds", draftFilters.metroIds.join(","))
        if (draftFilters.districts.length) p.set("districts", draftFilters.districts.join(","))
        if (draftFilters.sessionTypes.length) p.set("sessionTypes", draftFilters.sessionTypes.join(","))
        if (draftFilters.rinkType !== RinkTypeEnum.All) p.set("rinkType", draftFilters.rinkType)

        router.push("?" + p.toString())
    }

    const rinkOptions = useMemo(() => rinks.map(option => ({ value: option.id, label: option.name })), [rinks])
    const sessionTypeOptions = useMemo(() => sessionTypes.map(option => ({ value: option.id, label: option.name })), [sessionTypes])

    return (
        <div className="flex justify-end mt-2 mb-2">
            <div>
                <Button type="primary" icon={<ListFilter />} onClick={() => {
                    setDraftFilters(localFilters)
                    setOpen(true)
                }}>
                    Фильтры
                </Button>
            </div>

            <Modal title="Фильтры" open={open} onCancel={() => {
                setDraftFilters(localFilters)
                setOpen(false)
            }} footer={false}>
                <Flex vertical gap={15} className="w-full">
                    <Flex vertical className="flex-1">
                        <Typography.Text>Дата</Typography.Text>
                        <DatePicker.RangePicker
                            format="DD.MM"
                            minDate={dayjs()}
                            maxDate={dayjs().endOf("year")}
                            allowClear={false}
                            value={draftFilters.dateRange}
                            onChange={(val) => val && setDraftFilters(prev => ({ ...prev, dateRange: val }))}
                        />
                    </Flex>
                    <Flex vertical className="flex-1">
                        <Typography.Text>Время сеансов</Typography.Text>
                        <TimePicker.RangePicker
                            format="HH:mm"
                            allowClear={false}
                            needConfirm={false}
                            value={draftFilters.timeRange}
                            onChange={(val) => val && setDraftFilters(prev => ({ ...prev, timeRange: val }))}
                        />
                    </Flex>
                    <Flex vertical className="flex-1">
                        <Typography.Text>Каток</Typography.Text>
                        <Select
                            allowClear
                            mode="multiple"
                            maxTagCount="responsive"
                            options={rinkOptions}
                            value={draftFilters.rinkIds}
                            onChange={(val) => setDraftFilters(prev => ({ ...prev, rinkIds: val }))}
                        />
                    </Flex>
                    <Flex vertical className="flex-1">
                        <Typography.Text>Станция метро</Typography.Text>
                        <Select
                            allowClear
                            mode="multiple"
                            maxTagCount="responsive"
                            options={getMetroStationOptions()}
                            value={draftFilters.metroIds}
                            onChange={(val) => setDraftFilters(prev => ({ ...prev, metroIds: val }))}
                        />
                    </Flex>
                    <Flex vertical className="flex-1">
                        <Typography.Text>Район</Typography.Text>
                        <Select
                            allowClear
                            mode="multiple"
                            maxTagCount="responsive"
                            options={districtOptions}
                            value={draftFilters.districts}
                            onChange={(val) => setDraftFilters(prev => ({ ...prev, districts: val }))}
                        />
                    </Flex>
                    <Flex vertical className="flex-1">
                        <Typography.Text>Вид сеанса</Typography.Text>
                        <Select
                            allowClear
                            mode="multiple"
                            maxTagCount="responsive"
                            options={sessionTypeOptions}
                            value={draftFilters.sessionTypes}
                            onChange={(val) => setDraftFilters(prev => ({ ...prev, sessionTypes: val }))}
                        />
                    </Flex>
                    <Flex vertical className="flex-1">
                        <Typography.Text>Тип катка</Typography.Text>
                        <Select
                            maxTagCount="responsive"
                            options={rinkTypeOptions}
                            value={draftFilters.rinkType}
                            onChange={(val) => setDraftFilters(prev => ({ ...prev, rinkType: val }))}
                        />
                    </Flex>
                    <Flex justify="space-between">
                        <Button onClick={() => setDraftFilters(initialFilterState)}>Сбросить</Button>
                        <Flex gap={15}>
                            <Button onClick={() => {
                                setDraftFilters(localFilters)
                                setOpen(false)
                            }}>Закрыть</Button>
                            <Button type="primary" disabled={areFiltersEqual(draftFilters, localFilters)} onClick={() => {
                                setLocalFilters(draftFilters)
                                updateParams()
                                setOpen(false)
                            }}>
                                Применить
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Modal>
        </div>
    )
}

export default ScheduleFilters
