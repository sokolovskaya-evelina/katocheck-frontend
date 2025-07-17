import { configureStore } from "@reduxjs/toolkit"
import { rinksApi } from "./api/rink.api"

export const makeStore = () => {
  return configureStore({
    reducer: {
      [rinksApi.reducerPath]: rinksApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(rinksApi.middleware),
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
