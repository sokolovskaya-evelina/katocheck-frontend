import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type FavoritesState = {
  ids: string[]
}

const initialState: FavoritesState = {
  ids: [],
}

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      if (!state.ids.includes(action.payload)) {
        state.ids.push(action.payload)
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.ids = state.ids.filter(id => id !== action.payload)
    },
    setFavorites: (state, action: PayloadAction<string[]>) => {
      state.ids = action.payload
    },
  },
})

export const { addFavorite, removeFavorite, setFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
