"use client"

import { Heart } from "lucide-react"
import { Button, Tooltip, notification } from "antd"
import { useState } from "react"

export function FavoriteButton({ isFavorite: initial }: { isFavorite: boolean }) {
  const [isFavorite, setIsFavorite] = useState(initial)
  const [api, contextHolder] = notification.useNotification()

  const handleClick = () => {
    const prev = isFavorite
    const next = !isFavorite
    setIsFavorite(next)

    api.error({
      message: next ? "Каток добавлен в избранное" : "Каток удалён",
      duration: 5,
      key: "favorite-toast",
      actions: (
        <Button
          type="link"
          size="small"
          onClick={() => {
            setIsFavorite(prev)
            api.destroy("favorite-toast")
          }}
        >
          Отменить
        </Button>
      ),
      showProgress: true,
      pauseOnHover: true,
    })
  }

  return (
    <Tooltip title={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}>
      <Button
        type="text"
        icon={
          <Heart className={isFavorite ? "fill-primary stroke-transparent" : "stroke-slate-400"} />
        }
        onClick={handleClick}
      />
      {contextHolder}
    </Tooltip>
  )
}
