import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { RinkType } from "../../types/types"

export const rinksApi = createApi({
  reducerPath: "rinksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/",
  }),
  endpoints: builder => ({
    getRinks: builder.query<RinkType[], void>({
      query: () => "rinks",
    }),
  }),
})

export const { useGetRinksQuery } = rinksApi
