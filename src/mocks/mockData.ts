import { RinkShortInfoType, RinkType, ScheduleItemType, ScheduleType } from "@/types/types"

export const mockSchedule: ScheduleType<ScheduleItemType>[] = [
  {
    date: "2025-06-28T09:00:00",
    items: [
      {
        rinkId: "1a481833-2f2d-4dc6-88e5-40764c5d7c00",
        title: "Аврора",
        metroStations: [
          {
            id: 1,
            name: "Спортивная",
          },
        ],
        favorite: true,
        startTime: "2025-06-28T09:00:00",
        endTime: "2025-06-28T11:00:00",
        sessionType: "Массовое катание",
      },
      {
        rinkId: "4443cd38-1feb-44b1-abe2-485a0ba3dbf9",
        title: "Звезда",
        metroStations: [
          {
            id: 2,
            name: "Московская",
          },
        ],
        favorite: false,
        startTime: "2025-06-28T20:00:00",
        endTime: "2025-06-28T21:30:00",
        sessionType: "Хоккейный час",
      },
      {
        rinkId: "fa42451f-6ec8-4307-baae-afaa2e4e87e1",
        title: "Аврора",
        metroStations: [
          {
            name: "Спортивная",
            id: 1,
          },
          {
            name: "Приморская",
            id: 1,
          },
          {
            name: "Спортивная",
            id: 1,
          },
          {
            name: "Приморская",
            id: 2,
          },
        ],
        favorite: true,
        startTime: "2025-06-28T19:00:00",
        endTime: "2025-06-28T20:00:00",
        sessionType: "Фигурное катание",
      },
    ],
  },
  {
    date: "2025-06-29T11:00:00",
    items: [
      {
        rinkId: "89190093-fd92-46be-a1f8-a7c0f4f312f8",
        title: "Аврора",
        metroStations: [
          {
            name: "Крестовский остров",
            id: 2,
          },
        ],
        favorite: false,
        startTime: "2025-06-29T11:00:00",
        endTime: "2025-06-29T12:30:00",
        sessionType: "Учебный сеанс",
      },
      {
        rinkId: "f06818e2-949c-480c-b5b0-349c92101ae5",
        title: "Звезда",
        metroStations: [
          {
            name: "Крестовский остров",
            id: 2,
          },
          {
            name: "Спортивная",
            id: 1,
          },
        ],
        favorite: false,
        startTime: "2025-06-29T12:00:00",
        endTime: "2025-06-29T13:30:00",
        sessionType: "Фигурное катание",
      },
      {
        rinkId: "6c675654-ec93-42f2-91bf-0e7512154a10",
        title: "Звезда",
        metroStations: [
          {
            name: "Крестовский остров",
            id: 2,
          },
        ],
        favorite: false,
        startTime: "2025-06-29T10:00:00",
        endTime: "2025-06-29T11:00:00",
        sessionType: "Массовое катание",
      },
      {
        rinkId: "f1ce83b1-5dc7-4c7f-a659-bdd3349e96ca",
        title: "Севкабель",
        metroStations: [
          {
            name: "Спортивная",
            id: 1,
          },
        ],
        favorite: false,
        startTime: "2025-06-29T14:00:00",
        endTime: "2025-06-29T15:00:00",
        sessionType: "Массовое катание",
      },
    ],
  },
  {
    date: "2025-06-30T14:00:00",
    items: [
      {
        rinkId: "4c7b4d88-27c3-49fd-bdf3-ec8cf1785b15",
        title: "Звезда",
        metroStations: [
          {
            name: "Приморская",
            id: 2,
          },
        ],
        favorite: true,
        startTime: "2025-06-30T14:00:00",
        endTime: "2025-06-30T15:00:00",
        sessionType: "Хоккейный час",
      },
      {
        rinkId: "bc4182ad-cc9b-4841-9765-a894ef41e1df",
        title: "Севкабель",
        metroStations: [
          {
            name: "Московская",
            id: 2,
          },
          {
            name: "Приморская",
            id: 2,
          },
        ],
        favorite: false,
        startTime: "2025-06-30T18:00:00",
        endTime: "2025-06-30T19:30:00",
        sessionType: "Учебный сеанс",
      },
      {
        rinkId: "0c8f5a11-32c5-448d-bbd2-26b26d6706a9",
        title: "Каток Крестовский",
        metroStations: [
          {
            name: "Крестовский остров",
            id: 2,
          },
          {
            name: "Спортивная",
            id: 1,
          },
        ],
        favorite: false,
        startTime: "2025-06-30T12:00:00",
        endTime: "2025-06-30T14:00:00",
        sessionType: "Массовое катание",
      },
      {
        rinkId: "45a51167-8f88-4327-8089-33759cb2b7bd",
        title: "Аврора",
        metroStations: [
          {
            name: "Московская",
            id: 2,
          },
          {
            name: "Спортивная",
            id: 1,
          },
        ],
        favorite: true,
        startTime: "2025-06-30T12:00:00",
        endTime: "2025-06-30T13:30:00",
        sessionType: "Свободное катание",
      },
    ],
  },
  {
    date: "2025-07-01T21:00:00",
    items: [
      {
        rinkId: "5ab12c23-00d7-4711-a74c-57c4ab69f863",
        title: "Каток Крестовский",
        metroStations: [
          {
            name: "Крестовский остров",
            id: 2,
          },
          {
            name: "Приморская",
            id: 2,
          },
        ],
        favorite: false,
        startTime: "2025-07-01T21:00:00",
        endTime: "2025-07-01T22:00:00",
        sessionType: "Учебный сеанс",
      },
      {
        rinkId: "f2a5bbf2-c581-45fe-9b5b-f86ae8ef19da",
        title: "Звезда",
        metroStations: [
          {
            name: "Спортивная",
            id: 1,
          },
          {
            name: "Крестовский остров",
            id: 2,
          },
        ],
        favorite: false,
        startTime: "2025-07-01T12:00:00",
        endTime: "2025-07-01T13:30:00",
        sessionType: "Массовое катание",
      },
    ],
  },
  {
    date: "2025-07-02T13:00:00",
    items: [
      {
        rinkId: "043f607b-db45-46a2-874e-beb5fbce39b9",
        title: "Аврора",
        metroStations: [
          {
            name: "Крестовский остров",
            id: 2,
          },
          {
            name: "Московская",
            id: 2,
          },
        ],
        favorite: false,
        startTime: "2025-07-02T13:00:00",
        endTime: "2025-07-02T15:00:00",
        sessionType: "Фигурное катание",
      },
      {
        rinkId: "f59249d3-5284-4cbc-81e5-73b3ae57f805",
        title: "Каток Крестовский",
        metroStations: [
          {
            name: "Спортивная",
            id: 1,
          },
          {
            name: "Московская",
            id: 2,
          },
        ],
        favorite: true,
        startTime: "2025-07-02T14:00:00",
        endTime: "2025-07-02T15:30:00",
        sessionType: "Хоккейный час",
      },
    ],
  },
  {
    date: "2025-07-03T09:00:00",
    items: [
      {
        rinkId: "87697a8c-d439-4204-a7d9-827e35237f6f",
        title: "Звезда",
        metroStations: [
          {
            name: "Приморская",
            id: 2,
          },
          {
            name: "Московская",
            id: 2,
          },
        ],
        favorite: true,
        startTime: "2025-07-03T09:00:00",
        endTime: "2025-07-03T11:00:00",
        sessionType: "Хоккейный час",
      },
      {
        rinkId: "2c0f0da3-456b-4dcf-bd65-4ad3827b328e",
        title: "Севкабель",
        metroStations: [
          {
            name: "Приморская",
            id: 2,
          },
        ],
        favorite: false,
        startTime: "2025-07-03T09:00:00",
        endTime: "2025-07-03T11:00:00",
        sessionType: "Свободное катание",
      },
      {
        rinkId: "1e557e4b-c5e3-45e6-9807-00b882595a52",
        title: "Севкабель",
        metroStations: [
          {
            name: "Московская",
            id: 2,
          },
        ],
        favorite: false,
        startTime: "2025-07-03T20:00:00",
        endTime: "2025-07-03T21:00:00",
        sessionType: "Массовое катание",
      },
      {
        rinkId: "865493ee-bfbe-4baf-9078-82db4e05b394",
        title: "Севкабель",
        metroStations: [
          {
            name: "Спортивная",
            id: 1,
          },
        ],
        favorite: true,
        startTime: "2025-07-03T19:00:00",
        endTime: "2025-07-03T20:30:00",
        sessionType: "Хоккейный час",
      },
    ],
  },
  {
    date: "2025-07-04T15:30:00",
    items: [
      {
        rinkId: "91f3b2bd-b6de-439d-916a-e121378f80e2",
        title: "Севкабель",
        metroStations: [
          {
            name: "Крестовский остров",
            id: 2,
          },
        ],
        favorite: false,
        startTime: "2025-07-04T14:00:00",
        endTime: "2025-07-04T15:30:00",
        sessionType: "Учебный сеанс",
      },
      {
        rinkId: "6fececcd-0714-41f2-b9e0-d46c4c51df18",
        title: "Аврора",
        metroStations: [
          {
            name: "Крестовский остров",
            id: 2,
          },
          {
            name: "Московская",
            id: 2,
          },
        ],
        favorite: true,
        startTime: "2025-07-04T08:00:00",
        endTime: "2025-07-04T09:30:00",
        sessionType: "Свободное катание",
      },
      {
        rinkId: "d9941c76-5c1d-48c7-bbd5-6f7323601f35",
        title: "Аврора",
        metroStations: [
          {
            name: "Спортивная",
            id: 1,
          },
          {
            name: "Приморская",
            id: 2,
          },
        ],
        favorite: false,
        startTime: "2025-07-04T20:00:00",
        endTime: "2025-07-04T22:00:00",
        sessionType: "Свободное катание",
      },
      {
        rinkId: "717f3a4c-1667-4a66-98d2-ccf165146970",
        title: "Каток Крестовский",
        metroStations: [
          {
            name: "Крестовский остров",
            id: 2,
          },
        ],
        favorite: false,
        startTime: "2025-07-04T17:00:00",
        endTime: "2025-07-04T19:00:00",
        sessionType: "Свободное катание",
      },
    ],
  },
]

export const mockRink: RinkType = {
  rinkId: "e89ae6a4-09c7-4298-985b-efc148a99d4b",
  name: "Каток Озерки",
  address: "ул. Есенина, д. 1",
  metro: [
    {
      name: "Озерки",
      id: 1,
    },
  ],
  district: "Выборгский район",
  phones: ["+7 (812) 123-45-67"],
  socials: [
    {
      name: "vk",
      url: "https://vk.com/ozerski",
    },
    {
      name: "telegram",
      url: "https://t.me/ozerski",
    },
  ],
  location: [60.037, 30.331],
  isFavorite: true,
  schedule: [
    {
      date: "2025-06-29",
      items: [
        {
          startTime: "2025-06-29T15:00:00",
          endTime: "2025-06-29T16:30:00",
          arena: "Основная арена",
          sessionType: "Свободное катание",
        },
        {
          startTime: "2025-06-29T08:00:00",
          endTime: "2025-06-29T09:30:00",
          arena: "Основная арена",
          sessionType: "Учебный сеанс",
        },
        {
          startTime: "2025-06-29T13:00:00",
          endTime: "2025-06-29T14:00:00",
          arena: "Основная арена",
          sessionType: "Массовое катание",
        },
        {
          startTime: "2025-06-29T13:00:00",
          endTime: "2025-06-29T14:00:00",
          arena: "Основная арена",
          sessionType: "Хоккейный час",
        },
      ],
    },
    {
      date: "2025-06-30",
      items: [
        {
          startTime: "2025-06-30T12:00:00",
          endTime: "2025-06-30T13:30:00",
          arena: "Основная арена",
          sessionType: "Учебный сеанс",
        },
        {
          startTime: "2025-06-30T13:00:00",
          endTime: "2025-06-30T14:00:00",
          arena: "Основная арена",
          sessionType: "Фигурное катание",
        },
        {
          startTime: "2025-06-30T11:00:00",
          endTime: "2025-06-30T13:00:00",
          arena: "Основная арена",
          sessionType: "Свободное катание",
        },
        {
          startTime: "2025-06-30T18:00:00",
          endTime: "2025-06-30T20:00:00",
          arena: "Основная арена",
          sessionType: "Массовое катание",
        },
      ],
    },
    {
      date: "2025-07-01",
      items: [
        {
          startTime: "2025-07-01T12:00:00",
          endTime: "2025-07-01T14:00:00",
          arena: "Основная арена",
          sessionType: "Массовое катание",
        },
        {
          startTime: "2025-07-01T14:00:00",
          endTime: "2025-07-01T15:00:00",
          arena: "Основная арена",
          sessionType: "Фигурное катание",
        },
      ],
    },
    {
      date: "2025-07-02",
      items: [
        {
          startTime: "2025-07-02T11:00:00",
          endTime: "2025-07-02T12:30:00",
          arena: "Основная арена",
          sessionType: "Фигурное катание",
        },
        {
          startTime: "2025-07-02T20:00:00",
          endTime: "2025-07-02T22:00:00",
          arena: "Основная арена",
          sessionType: "Свободное катание",
        },
        {
          startTime: "2025-07-02T09:00:00",
          endTime: "2025-07-02T10:00:00",
          arena: "Основная арена",
          sessionType: "Учебный сеанс",
        },
      ],
    },
    {
      date: "2025-07-03",
      items: [
        {
          startTime: "2025-07-03T13:00:00",
          endTime: "2025-07-03T15:00:00",
          arena: "Основная арена",
          sessionType: "Учебный сеанс",
        },
        {
          startTime: "2025-07-03T11:00:00",
          endTime: "2025-07-03T13:00:00",
          arena: "Основная арена",
          sessionType: "Фигурное катание",
        },
      ],
    },
    {
      date: "2025-07-04",
      items: [
        {
          startTime: "2025-07-04T18:00:00",
          endTime: "2025-07-04T19:30:00",
          arena: "Основная арена",
          sessionType: "Свободное катание",
        },
        {
          startTime: "2025-07-04T20:00:00",
          endTime: "2025-07-04T21:30:00",
          arena: "Основная арена",
          sessionType: "Хоккейный час",
        },
        {
          startTime: "2025-07-04T08:00:00",
          endTime: "2025-07-04T10:00:00",
          arena: "Основная арена",
          sessionType: "Массовое катание",
        },
      ],
    },
    {
      date: "2025-07-05",
      items: [
        {
          startTime: "2025-07-05T12:00:00",
          endTime: "2025-07-05T13:30:00",
          arena: "Основная арена",
          sessionType: "Учебный сеанс",
        },
        {
          startTime: "2025-07-05T14:00:00",
          endTime: "2025-07-05T15:00:00",
          arena: "Основная арена",
          sessionType: "Хоккейный час",
        },
        {
          startTime: "2025-07-05T14:00:00",
          endTime: "2025-07-05T15:30:00",
          arena: "Основная арена",
          sessionType: "Учебный сеанс",
        },
        {
          startTime: "2025-07-05T17:00:00",
          endTime: "2025-07-05T19:00:00",
          arena: "Основная арена",
          sessionType: "Свободное катание",
        },
      ],
    },
  ],
}

export const mockRinks: RinkShortInfoType[] = [
  {
    rinkId: "fa70de71-d9bb-4c4a-a05a-222a95960996",
    name: "Каток #1",
    isFavorite: false,
    address: "г. Санкт-Петербург, улица Ленина, д. 9",
    metro: [
      {
        name: "Озерки",
        id: 1,
      },
    ],
    district: "Выборгский",
    schedule: [],
  },
  {
    rinkId: "107a9dc8-2dcc-43fe-a831-7009c7934030",
    name: "Каток #2",
    isFavorite: false,
    address: "г. Санкт-Петербург, улица Ленина, д. 44",
    metro: [
      {
        name: "Приморская",
        id: 1,
      },
    ],
    district: "Петроградский",
    schedule: [
      {
        date: "2025-06-29",
        items: [
          {
            startTime: "2025-06-29T16:00:00",
            endTime: "2025-06-29T17:30:00",
            arena: "Основная арена",
            sessionType: "Фигурное катание",
          },
          {
            startTime: "2025-06-29T16:00:00",
            endTime: "2025-06-29T17:00:00",
            arena: "Основная арена",
            sessionType: "Массовое катание",
          },
          {
            startTime: "2025-06-29T10:00:00",
            endTime: "2025-06-29T11:30:00",
            arena: "Основная арена",
            sessionType: "Свободное катание",
          },
        ],
      },
      {
        date: "2025-06-30",
        items: [
          {
            startTime: "2025-06-30T13:00:00",
            endTime: "2025-06-30T15:00:00",
            arena: "Основная арена",
            sessionType: "Фигурное катание",
          },
        ],
      },
      {
        date: "2025-07-01",
        items: [
          {
            startTime: "2025-07-01T19:00:00",
            endTime: "2025-07-01T20:00:00",
            arena: "Основная арена",
            sessionType: "Учебный сеанс",
          },
        ],
      },
    ],
  },
  {
    rinkId: "6df5b354-22a5-4a99-bf84-9ef0a982196b",
    name: "Каток #3",
    isFavorite: true,
    address: "г. Санкт-Петербург, улица Парковая, д. 44",
    metro: [
      {
        name: "Спортивная",
        id: 2,
      },
    ],
    district: "Центральный",
    schedule: [
      {
        date: "2025-06-29",
        items: [
          {
            startTime: "2025-06-29T12:00:00",
            endTime: "2025-06-29T13:00:00",
            arena: "Основная арена",
            sessionType: "Фигурное катание",
          },
          {
            startTime: "2025-06-29T12:00:00",
            endTime: "2025-06-29T13:00:00",
            arena: "Основная арена",
            sessionType: "Свободное катание",
          },
          {
            startTime: "2025-06-29T18:00:00",
            endTime: "2025-06-29T19:30:00",
            arena: "Основная арена",
            sessionType: "Фигурное катание",
          },
        ],
      },
      {
        date: "2025-06-30",
        items: [
          {
            startTime: "2025-06-30T11:00:00",
            endTime: "2025-06-30T12:00:00",
            arena: "Основная арена",
            sessionType: "Фигурное катание",
          },
          {
            startTime: "2025-06-30T09:00:00",
            endTime: "2025-06-30T11:00:00",
            arena: "Основная арена",
            sessionType: "Учебный сеанс",
          },
        ],
      },
      {
        date: "2025-07-01",
        items: [
          {
            startTime: "2025-07-01T16:00:00",
            endTime: "2025-07-01T17:00:00",
            arena: "Основная арена",
            sessionType: "Фигурное катание",
          },
          {
            startTime: "2025-07-01T13:00:00",
            endTime: "2025-07-01T15:00:00",
            arena: "Основная арена",
            sessionType: "Свободное катание",
          },
        ],
      },
    ],
  },
  {
    rinkId: "6367cd53-976f-42bd-b784-b0f60aa125a1",
    name: "Каток #4",
    isFavorite: false,
    address: "г. Санкт-Петербург, улица Ленина, д. 17",
    metro: [
      {
        name: "Пионерская",
        id: 1,
      },
    ],
    district: "Фрунзенский",
    schedule: [
      {
        date: "2025-06-29",
        items: [
          {
            startTime: "2025-06-29T09:00:00",
            endTime: "2025-06-29T10:30:00",
            arena: "Основная арена",
            sessionType: "Массовое катание",
          },
        ],
      },
      {
        date: "2025-06-30",
        items: [
          {
            startTime: "2025-06-30T09:00:00",
            endTime: "2025-06-30T10:00:00",
            arena: "Основная арена",
            sessionType: "Учебный сеанс",
          },
        ],
      },
      {
        date: "2025-07-01",
        items: [
          {
            startTime: "2025-07-01T09:00:00",
            endTime: "2025-07-01T11:00:00",
            arena: "Основная арена",
            sessionType: "Фигурное катание",
          },
          {
            startTime: "2025-07-01T15:00:00",
            endTime: "2025-07-01T16:00:00",
            arena: "Основная арена",
            sessionType: "Массовое катание",
          },
        ],
      },
    ],
  },
  {
    rinkId: "12dcc831-4d8e-477c-a549-8f0adeed6be7",
    name: "Каток #5",
    isFavorite: true,
    address: "г. Санкт-Петербург, улица Советская, д. 34",
    metro: [
      {
        name: "Гостиный двор",
        id: 2,
      },
    ],
    district: "Калининский",
    schedule: [
      {
        date: "2025-06-29",
        items: [
          {
            startTime: "2025-06-29T19:00:00",
            endTime: "2025-06-29T20:30:00",
            arena: "Основная арена",
            sessionType: "Фигурное катание",
          },
          {
            startTime: "2025-06-29T20:00:00",
            endTime: "2025-06-29T22:00:00",
            arena: "Основная арена",
            sessionType: "Хоккейный час",
          },
        ],
      },
      {
        date: "2025-06-30",
        items: [
          {
            startTime: "2025-06-30T14:00:00",
            endTime: "2025-06-30T15:30:00",
            arena: "Основная арена",
            sessionType: "Свободное катание",
          },
          {
            startTime: "2025-06-30T18:00:00",
            endTime: "2025-06-30T19:00:00",
            arena: "Основная арена",
            sessionType: "Свободное катание",
          },
          {
            startTime: "2025-06-30T12:00:00",
            endTime: "2025-06-30T13:30:00",
            arena: "Основная арена",
            sessionType: "Учебный сеанс",
          },
        ],
      },
      {
        date: "2025-07-01",
        items: [
          {
            startTime: "2025-07-01T19:00:00",
            endTime: "2025-07-01T20:00:00",
            arena: "Основная арена",
            sessionType: "Учебный сеанс",
          },
          {
            startTime: "2025-07-01T19:00:00",
            endTime: "2025-07-01T20:00:00",
            arena: "Основная арена",
            sessionType: "Фигурное катание",
          },
          {
            startTime: "2025-07-01T15:00:00",
            endTime: "2025-07-01T17:00:00",
            arena: "Основная арена",
            sessionType: "Массовое катание",
          },
        ],
      },
    ],
  },
  {
    rinkId: "115037ff-bb94-4fe5-abe7-536406714fed",
    name: "Каток #6",
    isFavorite: false,
    address: "г. Санкт-Петербург, улица Советская, д. 44",
    metro: [
      {
        name: "Ладожская",
        id: 3,
      },
    ],
    district: "Адмиралтейский",
    schedule: [
      {
        date: "2025-06-29",
        items: [
          {
            startTime: "2025-06-29T20:00:00",
            endTime: "2025-06-29T21:00:00",
            arena: "Основная арена",
            sessionType: "Массовое катание",
          },
        ],
      },
      {
        date: "2025-06-30",
        items: [
          {
            startTime: "2025-06-30T15:00:00",
            endTime: "2025-06-30T17:00:00",
            arena: "Основная арена",
            sessionType: "Массовое катание",
          },
          {
            startTime: "2025-06-30T10:00:00",
            endTime: "2025-06-30T11:00:00",
            arena: "Основная арена",
            sessionType: "Массовое катание",
          },
          {
            startTime: "2025-06-30T20:00:00",
            endTime: "2025-06-30T21:30:00",
            arena: "Основная арена",
            sessionType: "Учебный сеанс",
          },
        ],
      },
      {
        date: "2025-07-01",
        items: [
          {
            startTime: "2025-07-01T13:00:00",
            endTime: "2025-07-01T15:00:00",
            arena: "Основная арена",
            sessionType: "Фигурное катание",
          },
        ],
      },
    ],
  },
  {
    rinkId: "018946ac-cb24-443a-915a-26f72f65de7a",
    name: "Каток #7",
    isFavorite: false,
    address: "г. Санкт-Петербург, улица Парковая, д. 2",
    metro: [
      {
        name: "Владимирская",
        id: 5,
      },
    ],
    district: "Московский",
    schedule: [
      {
        date: "2025-06-29",
        items: [
          {
            startTime: "2025-06-29T09:00:00",
            endTime: "2025-06-29T10:30:00",
            arena: "Основная арена",
            sessionType: "Массовое катание",
          },
        ],
      },
      {
        date: "2025-06-30",
        items: [
          {
            startTime: "2025-06-30T13:00:00",
            endTime: "2025-06-30T15:00:00",
            arena: "Основная арена",
            sessionType: "Свободное катание",
          },
          {
            startTime: "2025-06-30T10:00:00",
            endTime: "2025-06-30T11:00:00",
            arena: "Основная арена",
            sessionType: "Хоккейный час",
          },
        ],
      },
      {
        date: "2025-07-01",
        items: [
          {
            startTime: "2025-07-01T16:00:00",
            endTime: "2025-07-01T17:30:00",
            arena: "Основная арена",
            sessionType: "Хоккейный час",
          },
          {
            startTime: "2025-07-01T10:00:00",
            endTime: "2025-07-01T11:00:00",
            arena: "Основная арена",
            sessionType: "Хоккейный час",
          },
          {
            startTime: "2025-07-01T09:00:00",
            endTime: "2025-07-01T11:00:00",
            arena: "Основная арена",
            sessionType: "Хоккейный час",
          },
        ],
      },
    ],
  },
  {
    rinkId: "8a63858f-214b-4494-b5c2-33c1e53eb833",
    name: "Каток #8",
    isFavorite: true,
    address: "г. Санкт-Петербург, улица Ленина, д. 25",
    metro: [
      {
        name: "Маяковская",
        id: 5,
      },
    ],
    district: "Невский",
    schedule: [
      {
        date: "2025-06-29",
        items: [
          {
            startTime: "2025-06-29T19:00:00",
            endTime: "2025-06-29T20:30:00",
            arena: "Основная арена",
            sessionType: "Хоккейный час",
          },
        ],
      },
      {
        date: "2025-06-30",
        items: [
          {
            startTime: "2025-06-30T09:00:00",
            endTime: "2025-06-30T10:00:00",
            arena: "Основная арена",
            sessionType: "Массовое катание",
          },
        ],
      },
      {
        date: "2025-07-01",
        items: [
          {
            startTime: "2025-07-01T11:00:00",
            endTime: "2025-07-01T12:30:00",
            arena: "Основная арена",
            sessionType: "Хоккейный час",
          },
          {
            startTime: "2025-07-01T13:00:00",
            endTime: "2025-07-01T15:00:00",
            arena: "Основная арена",
            sessionType: "Свободное катание",
          },
          {
            startTime: "2025-07-01T15:00:00",
            endTime: "2025-07-01T16:00:00",
            arena: "Основная арена",
            sessionType: "Фигурное катание",
          },
        ],
      },
    ],
  },
  {
    rinkId: "d0306574-9101-46d2-957b-5124a333aba7",
    name: "Каток #9",
    isFavorite: false,
    address: "г. Санкт-Петербург, улица Парковая, д. 24",
    metro: [
      {
        name: "Балтийская",
        id: 6,
      },
    ],
    district: "Красногвардейский",
    schedule: [
      {
        date: "2025-06-29",
        items: [
          {
            startTime: "2025-06-29T13:00:00",
            endTime: "2025-06-29T15:00:00",
            arena: "Основная арена",
            sessionType: "Учебный сеанс",
          },
          {
            startTime: "2025-06-29T09:00:00",
            endTime: "2025-06-29T10:00:00",
            arena: "Основная арена",
            sessionType: "Свободное катание",
          },
          {
            startTime: "2025-06-29T20:00:00",
            endTime: "2025-06-29T22:00:00",
            arena: "Основная арена",
            sessionType: "Массовое катание",
          },
        ],
      },
      {
        date: "2025-06-30",
        items: [
          {
            startTime: "2025-06-30T19:00:00",
            endTime: "2025-06-30T20:30:00",
            arena: "Основная арена",
            sessionType: "Свободное катание",
          },
        ],
      },
      {
        date: "2025-07-01",
        items: [
          {
            startTime: "2025-07-01T17:00:00",
            endTime: "2025-07-01T19:00:00",
            arena: "Основная арена",
            sessionType: "Хоккейный час",
          },
          {
            startTime: "2025-07-01T15:00:00",
            endTime: "2025-07-01T16:00:00",
            arena: "Основная арена",
            sessionType: "Учебный сеанс",
          },
          {
            startTime: "2025-07-01T17:00:00",
            endTime: "2025-07-01T19:00:00",
            arena: "Основная арена",
            sessionType: "Фигурное катание",
          },
        ],
      },
    ],
  },
  {
    rinkId: "76b682bb-e91f-44c6-b027-c27b59f1f730",
    name: "Каток #10",
    isFavorite: false,
    address: "г. Санкт-Петербург, улица Ленина, д. 11",
    metro: [
      {
        name: "Удельная",
        id: 1,
      },
    ],
    district: "Кировский",
    schedule: [
      {
        date: "2025-06-29",
        items: [
          {
            startTime: "2025-06-29T12:00:00",
            endTime: "2025-06-29T13:30:00",
            arena: "Основная арена",
            sessionType: "Учебный сеанс",
          },
          {
            startTime: "2025-06-29T17:00:00",
            endTime: "2025-06-29T18:30:00",
            arena: "Основная арена",
            sessionType: "Учебный сеанс",
          },
        ],
      },
      {
        date: "2025-06-30",
        items: [
          {
            startTime: "2025-06-30T10:00:00",
            endTime: "2025-06-30T11:30:00",
            arena: "Основная арена",
            sessionType: "Хоккейный час",
          },
        ],
      },
      {
        date: "2025-07-01",
        items: [
          {
            startTime: "2025-07-01T15:00:00",
            endTime: "2025-07-01T16:30:00",
            arena: "Основная арена",
            sessionType: "Хоккейный час",
          },
          {
            startTime: "2025-07-01T16:00:00",
            endTime: "2025-07-01T17:00:00",
            arena: "Основная арена",
            sessionType: "Фигурное катание",
          },
        ],
      },
    ],
  },
]
