import { ReactNode } from "react"

type Props = {
  title?: string
  description?: string | ReactNode
}

export default function Description({ title, description }: Props) {
  return (
    <div className="flex gap-2">
      <span className="font-bold">{title}:</span>
      <span className="text-muted-foreground">{description}</span>
    </div>
  )
}
