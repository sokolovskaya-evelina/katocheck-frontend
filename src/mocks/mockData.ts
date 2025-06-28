import { ScheduleType } from "@/types/types"

export const mockSchedule: ScheduleType[] = [
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
