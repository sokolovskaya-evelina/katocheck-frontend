"use client"

import { Heart } from "lucide-react"
import { Button, notification, Tooltip } from "antd"
import { useMemo } from "react"
import { useFavorites } from "@/lib/hooks/useFavorites"

type Props = {
  id: string
}

export function FavoriteButton({ id }: Props) {
  const { isFavorite, add, remove } = useFavorites(id)
  const [api, contextHolder] = notification.useNotification()

  const handleClick = () => {
    if (isFavorite) {
      remove()
      api.info({ message: "Каток удалён из избранного", duration: 5, key: "favorite-toast" })
    } else {
      add()
      api.success({ message: "Каток добавлен в избранное", duration: 5, key: "favorite-toast" })
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
