import prisma from "@/lib/prisma"
import dayjs from "@/app/lib/dayjs";
import {RinkTypeEnum} from "@/app/types/enums";

export const getIceRinksForOptions = async () => {
    return prisma.iceRink.findMany({
        select: {
            id: true,
            name: true,
        },
        orderBy: { name: "asc" },
    })
}

export const getIceRinksShortInfo = async (params: {
    metroIds?: string[]
    districts?: string[]
    sessionTypes?: string[]
    rinkType?: string
    hasSchedule?: boolean
}) => {
    const {
        metroIds,
        districts,
        sessionTypes,
        rinkType,
        hasSchedule
    } = params

    const hasMetro = metroIds?.length
    const hasSessionTypes = sessionTypes?.length
    const hasDistricts = districts?.length
    const hasRinkType = rinkType && rinkType !== RinkTypeEnum.All

    const where = {
        ...(hasDistricts && {
            district: { in: districts },
        }),
        ...(hasRinkType && {
            type: rinkType,
        }),
        ...(hasSessionTypes && {
            sessionTypes: {
                some: {
                    id: { in: sessionTypes },
                },
            },
        }),
        ...(hasSchedule && {
            schedules: {
                some: {
                    date: {
                        gte: dayjs().startOf("week").toDate(),
                        lte: dayjs().endOf("week").toDate(),
                    },
                },
            },
        }),
    }

    let data = await prisma.iceRink.findMany({
        where,
        include: {
            metroStations: true,
            schedules: {
                where: {
                    date: {
                        gte: dayjs().startOf("week").toDate(),
                        lte: dayjs().endOf("week").toDate(),
                    },
                },
            },
        },
    })

    if (hasMetro) {
        data = data.filter((item) =>
            item.metroStations.some((ms) => metroIds.includes(ms.station))
        )
    }

    return data
}