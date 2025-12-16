"use client"

import React, { useEffect, useMemo, useState } from "react"
import { Flex, Segmented } from "antd"
import dayjs from "@/app/lib/dayjs"
import Text from "antd/es/typography/Text"
import { useRouter, useSearchParams } from "next/navigation"

const initialFilterState = {
    day: "ALL",
    arenaId: "ALL",
    sessionType: "ALL",
}

type Props = {
    schedule: any[]
    arenaOptions: { label: string; value: string }[]
    sessionTypeOptions: { label: string; value: string }[]
}

export function RinkScheduleFilters({ schedule, arenaOptions, sessionTypeOptions }: Props) {
    const searchParams = useSearchParams()
    const router = useRouter()

    const [filters, setFilters] = useState(initialFilterState)

    const daysOptions = useMemo(() => {
        const result = [{ value: "ALL", label: "Все" }]
        for (let i = 0; i < 7; i++) {
            const date = dayjs().startOf("week").add(i, "day")
            result.push({ value: date.format("YYYY-MM-DD"), label: `${date.format("dd")} (${date.format("DD.MM")})` })
        }
        return result
    }, [])

    useEffect(() => {
        const params = Object.fromEntries(searchParams.entries())

        const updatedFilters = {
            ...initialFilterState,
            day: params.day || "ALL",
            arenaId: params.arenaId || "ALL",
            sessionType: params.sessionType || "ALL",
        }

        setFilters(updatedFilters)
    }, [searchParams])

    const updateFilters = (key: keyof typeof filters, value: string) => {
        const newFilters = { ...filters, [key]: value }
        setFilters(newFilters)

        const p = new URLSearchParams()
        if (newFilters.day !== "ALL") p.set("day", newFilters.day)
        if (newFilters.arenaId !== "ALL") p.set("arenaId", newFilters.arenaId)
        if (newFilters.sessionType !== "ALL") p.set("sessionType", newFilters.sessionType)
        router.push("?" + p.toString(), {scroll: false})
    }

    return (
        <Flex gap={12} vertical>
            <Segmented
                options={daysOptions.map((d) => ({
                    label: (
                        <Text
                            className="capitalize"
                            strong={
                                d.value !== "ALL" &&
                                dayjs(d.value).startOf("day").isSame(dayjs().startOf("day"))
                            }
                        >
                            {d.label}
                        </Text>
                    ),
                    value: d.value,
                }))}
                value={filters.day}
                onChange={(val) => updateFilters("day", val)}
            />
            {arenaOptions.length > 1 && (
                <Segmented
                    options={[{ value: "ALL", label: "Все" }, ...arenaOptions]}
                    value={filters.arenaId}
                    onChange={(val) => updateFilters("arenaId", val)}
                />
            )}
            {sessionTypeOptions.length > 1 && (
                <Segmented
                    options={[{ value: "ALL", label: "Все" }, ...sessionTypeOptions]}
                    value={filters.sessionType}
                    onChange={(val) => updateFilters("sessionType", val)}
                />
            )}
        </Flex>
    )
}
