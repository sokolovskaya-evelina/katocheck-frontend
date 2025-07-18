import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { rinksApi } from "./api/rink.api"
import favoritesReducer from "./slice/favoritesSlice"
import filtersReducer from "./slice/filtersSlice"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites", "filters"],
}

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  filters: filtersReducer,
  [rinksApi.reducerPath]: rinksApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(rinksApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
})

export const persistor = persistStore(store)

export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
