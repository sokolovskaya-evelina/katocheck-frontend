import prisma from "@/lib/prisma";
import dayjs from "@/app/lib/dayjs";
import {RinkTypeEnum} from "@/app/types/enums";

export async function getScheduleGroupedByDay(params: {
    startDate?: string
    endDate?: string
    startTime?: string
    endTime?: string
    rinkIds?: string[]
    metroIds?: string[]
    districts?: string[]
    sessionTypes?: string[]
    rinkType?: string
}) {
    const {
        startDate,
        endDate,
        startTime,
        endTime,
        rinkIds,
        metroIds,
        districts,
        sessionTypes,
        rinkType,
    } = params

    const hasDate = startDate && endDate
    const hasTime = startTime && endTime
    const hasMetro = metroIds?.length
    const hasRinks = rinkIds?.length
    const hasSessionTypes = sessionTypes?.length
    const hasDistrict = !!districts
    const hasRinkType = rinkType && rinkType !== RinkTypeEnum.All
    console.log(hasDistrict)
    const schedule = await prisma.schedule.findMany({
        where: {
            ...(hasDate && {
                date: {
                    gte: dayjs(startDate).startOf("day").toDate(),
                    lte: dayjs(endDate).endOf("day").toDate(),
                },
            }),
            ...(hasRinks && {
                iceRinkId: { in: rinkIds },
            }),
            ...(hasSessionTypes && {
                sessionTypeId: { in: sessionTypes },
            }),
            ...(hasDistrict && {
                iceRink: {
                    district: {in: districts},
                },
            }),
            ...(hasRinkType && {
                iceRink: {
                    ...(hasDistrict ? { district: {in: districts} } : {}),
                    type: rinkType,
                },
            }),
        },
        include: {
            iceRink: {
                include: { metroStations: true },
            },
            sessionType: true,
        },
        orderBy: { startTime: "asc" },
    })

    let filtered = hasTime
        ? schedule.filter((item) => {
            const hour = dayjs(item.startTime).format("HH:mm")
            return (
                dayjs(hour, "HH:mm").isSameOrAfter(dayjs(startTime, "HH:mm")) &&
                dayjs(hour, "HH:mm").isSameOrBefore(dayjs(endTime, "HH:mm"))
            )
        })
        : schedule

    if (hasMetro) {
        filtered = filtered.filter((item) =>
            item.iceRink.metroStations.some((ms) => metroIds.includes(ms.station))
        )
    }

    return filtered.reduce((acc, item) => {
        const dateKey = dayjs(item.date).format("YYYY-MM-DD")
        if (!acc[dateKey]) acc[dateKey] = []
        acc[dateKey].push(item)
        return acc
    }, {} as Record<string, typeof filtered>)
}

export const getAllSessionTypes = async () => {
    return prisma.sessionType.findMany({
        orderBy: { name: "asc" },
    })
}
