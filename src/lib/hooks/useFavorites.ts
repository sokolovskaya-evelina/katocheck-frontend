import { useEffect, useState, useCallback } from "react"

const STORAGE_KEY = "favoriteRinks"

export function useFavorites(id: string) {
  const [isFavorite, setIsFavorite] = useState(false)

  const getFavorites = useCallback((): string[] => {
    if (typeof window === "undefined") return []
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]")
    } catch {
      return []
    }
  }, [])

  const saveFavorites = (favorites: string[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
  }

  const add = () => {
    const current = getFavorites()
    const updated = [...new Set([...current, id])]
    saveFavorites(updated)
    setIsFavorite(true)
  }

  const remove = () => {
    const current = getFavorites()
    const updated = current.filter(f => f !== id)
    saveFavorites(updated)
    setIsFavorite(false)
  }

  useEffect(() => {
    const current = getFavorites()
    setIsFavorite(current.includes(id))
  }, [id, getFavorites])

  return { isFavorite, add, remove }
}
