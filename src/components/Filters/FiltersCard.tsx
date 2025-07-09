import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FC, PropsWithChildren } from "react"

const FiltersCard: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Card className="hidden lg:flex p-4">
      <CardContent className="flex items-center gap-4">
        {children}

        <Button className="ml-auto" size="sm">
          Применить
        </Button>
        <Button variant="link" size="sm">
          Сбросить фильтры
        </Button>
      </CardContent>
    </Card>
  )
}

export default FiltersCard
