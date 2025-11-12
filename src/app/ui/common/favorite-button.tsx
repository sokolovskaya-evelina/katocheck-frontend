"use client"

import { Heart } from "lucide-react"
import { Button, notification, Tooltip } from "antd"
import { useMemo } from "react"
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks"
import { addFavorite, removeFavorite } from "@/app/redux/slice/favoritesSlice"

type Props = {
  id: string
}

export function FavoriteButton({ id }: Props) {
  const dispatch = useAppDispatch()
  const favorites = useAppSelector(state => state.favorites.ids)
  const isFavorite = favorites.includes(id)
  const [api, contextHolder] = notification.useNotification()

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id))
      api.success({ message: "Каток удалён из избранного", duration: 3, key: "favorite-toast" })
    } else {
      dispatch(addFavorite(id))
      api.success({ message: "Каток добавлен в избранное", duration: 3, key: "favorite-toast" })
    }
  }

  const icon = useMemo(
    () => <Heart className={isFavorite ? "fill-primary stroke-transparent" : "stroke-slate-400"} />,
    [isFavorite]
  )

  return (
    <>
      {contextHolder}
      <Tooltip title={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}>
        <Button type="text" icon={icon} onClick={handleClick} />
      </Tooltip>
    </>
  )
}
