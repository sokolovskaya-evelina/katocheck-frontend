import { District, IceRinkType, MetroStation } from "@/app/generated/prisma/enums"
import { IceRinkWhereInput } from "@/app/generated/prisma/models"
import dayjs from "@/app/lib/dayjs"
import { IceRinkShortInfoType, RinkType } from "@/app/types/types"
import { prisma } from "@/lib/prisma"

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
  metroIds?: MetroStation[]
  districts?: District[]
  sessionTypes?: string[]
  rinkType?: RinkType
  hasSchedule?: boolean
}) => {
  const { metroIds, districts, sessionTypes, rinkType, hasSchedule } = params

  const hasMetro = metroIds?.length
  const hasSessionTypes = sessionTypes?.length
  const hasDistricts = districts?.length
  const hasRinkType = rinkType && rinkType !== "ALL"

  const where: IceRinkWhereInput = {
    ...(hasDistricts && {
      district: {
        in: districts as District[],
      },
    }),
    ...(hasRinkType && {
      type: rinkType as IceRinkType,
    }),
    ...(hasSessionTypes && {
      sessionTypes: {
        some: {
          id: {
            in: sessionTypes,
          },
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

  const data: IceRinkShortInfoType[] = await prisma.iceRink.findMany({
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
    return data.filter(item => item.metroStations.some(ms => metroIds.includes(ms.station)))
  }

  return data
}

export const getIceRinkInfoById = async (id: string) => {
  return prisma.iceRink.findUnique({
    where: { id },
    include: {
      metroStations: true,
      phones: true,
      socialLinks: true,
    },
  })
}

export const getIceRinkScheduleById = async (
  id: string,
  filters?: {
    day?: string
    arenaId?: string
    sessionType?: string
  },
) => {
  const { day, arenaId, sessionType } = filters || {}

  const defaultPeriod = {
    gte: dayjs().startOf("week").toDate(),
    lte: dayjs().endOf("week").toDate(),
  }

  const startOfDay = day ? dayjs(day).startOf("day").toDate() : undefined
  const endOfDay = day ? dayjs(day).endOf("day").toDate() : undefined

  return prisma.iceRink.findUnique({
    where: { id },
    include: {
      arenas: true,
      sessionTypes: true,
      schedules: {
        where: {
          ...(day
            ? {
              startTime: {
                gte: startOfDay,
                lte: endOfDay,
              },
            }
            : {
              startTime: { ...defaultPeriod },
            }),
          ...(arenaId && {
            arenaId,
          }),
          ...(sessionType && {
            sessionTypeId: sessionType,
          }),
        },
        orderBy: {
          startTime: "asc",
        },
        include: {
          arena: true,
          sessionType: true,
        },
      },
    },
  })
}
