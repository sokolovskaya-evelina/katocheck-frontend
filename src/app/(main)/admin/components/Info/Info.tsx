import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Description from "@/components/Description/Description"
import { Save, SquarePen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Map from "@/app/(main)/rinks/components/Map/Map"

export default function Info() {
  const [mode, setMode] = useState<"view" | "edit">("edit")

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Общая информация
          {mode === "edit" ? (
            <Button variant="ghost" className="border-primary" onClick={() => setMode("view")}>
              <Save className="stroke-primary" />
            </Button>
          ) : (
            <Button variant="ghost" onClick={() => setMode("edit")}>
              <SquarePen />
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 py-6">
        {mode === "edit" ? (
          <div className="flex flex-col lg:flex-row items-start gap-4">
            <div className="w-full lg:w-1/2">
              <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <Label>Название катка</Label>
                  <Input />
                </div>
                <div>
                  <Label>Станции метро</Label>
                  <Input />
                </div>
                <div>
                  <Label>Номера телефонов</Label>
                  <Input />
                </div>
                <div>
                  <Label>Адресс</Label>
                  <Input />
                </div>
                <div>
                  <Label>Район</Label>
                  <Input />
                </div>
                <div>
                  <Label>Социальные сети</Label>
                  <Input />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <Map location={[60.036484, 30.306125]} />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            <Description title="Название катка" description="Озерки" />
            <Description title="Адресс" description="Озерки" />
            <Description title="Станции метро" description="Озерки" />
            <Description title="Район" description="Озерки" />
            <Description title="Номера телефонов" description="Озерки" />
            <Description title="Социальные сети" description="Озерки" />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
