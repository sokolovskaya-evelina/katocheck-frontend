"use client"

import React, {useEffect, useMemo, useState} from "react"
import {Flex, Tabs, TabsProps} from "antd"
import dayjs from "@/app/lib/dayjs"
import {useRouter, useSearchParams} from "next/navigation"

const initialFilterState = {
    day: "ALL",
    arenaId: "ALL",
    sessionType: "ALL",
}

type Props = {
    arenaOptions: { label: string; value: string }[]
    sessionTypeOptions: { label: string; value: string }[]
}

export function RinkScheduleFilters({ arenaOptions, sessionTypeOptions }: Props) {
    const searchParams = useSearchParams()
    const router = useRouter()

    const [filters, setFilters] = useState(initialFilterState)

    const daysOptions = useMemo(() => {
        const result = [{ value: "ALL", label: "Все" }]
        for (let i = 0; i < 7; i++) {
            const date = dayjs().startOf("week").add(i, "day")
            result.push({
                value: date.format("YYYY-MM-DD"),
                label: `${date.format("dd")} (${date.format("DD.MM")})`,
            })
        }
        return result
    }, [])

    useEffect(() => {
        const params = Object.fromEntries(searchParams.entries())
        setFilters({
            ...initialFilterState,
            day: params.day || "ALL",
            arenaId: params.arenaId || "ALL",
            sessionType: params.sessionType || "ALL",
        })
    }, [searchParams])

    const updateFilters = (key: keyof typeof filters, value: string) => {
        const newFilters = { ...filters, [key]: value }
        setFilters(newFilters)

        const p = new URLSearchParams()
        if (newFilters.day !== "ALL") p.set("day", newFilters.day)
        if (newFilters.arenaId !== "ALL") p.set("arenaId", newFilters.arenaId)
        if (newFilters.sessionType !== "ALL") p.set("sessionType", newFilters.sessionType)
        router.push("?" + p.toString(), { scroll: false })
    }

    const toTabItems = (list: { label: string; value: string }[]): TabsProps["items"] =>
        list.map((item) => ({
            key: item.value,
            label: item.label,
        }))

    return (
        <Flex vertical>
            <Tabs
                items={toTabItems(daysOptions)}
                activeKey={filters.day}
                onChange={(val) => updateFilters("day", val)}
                size="small"
                type="card"
            />
            {arenaOptions.length > 1 && (
                <Tabs
                    items={toTabItems([{ value: "ALL", label: "Все" }, ...arenaOptions])}
                    activeKey={filters.arenaId}
                    onChange={(val) => updateFilters("arenaId", val)}
                    size="small"
                    type="card"
                />
            )}
            {sessionTypeOptions.length > 1 && (
                <Tabs
                    items={toTabItems([{ value: "ALL", label: "Все" }, ...sessionTypeOptions])}
                    activeKey={filters.sessionType}
                    onChange={(val) => updateFilters("sessionType", val)}
                    size="small"
                    type="card"
                />
            )}
        </Flex>
    )
}
