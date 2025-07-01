import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Description from "@/components/Description/Description"
import { Save, SquarePen, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMemo, useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Map from "@/app/(main)/rinks/components/Map/Map"
import { DistrictEnum } from "@/types/enums"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Controller, useForm } from "react-hook-form"
import MultiSelect, { MultiSelectOption } from "@/components/MultiSelect/MultiSelect"
import { Badge } from "@/components/ui/badge"
import { getMetroStationOptions } from "@/lib/utils"

export default function Info() {
  const [mode, setMode] = useState<"view" | "edit">("edit")
  const [socials, setSocials] = useState([{ name: "", url: "" }])
  const [selected, setSelected] = useState<string[]>([])

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      address: "",
      district: "",
      metroStations: [],
      phones: "",
      arenas: "",
      sessionTypes: "",
    },
  })

  const districtOptions = useMemo(() => {
    return Object.values(DistrictEnum).map(district => ({ label: district, value: district }))
  }, [])

  const addSocial = () => {
    setSocials(prev => [...prev, { name: "", url: "" }])
  }

  const onSubmit = (data: any) => {
    console.log({ ...data, socials })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Общая информация
          {mode === "edit" ? (
            <Button variant="ghost" className="border-primary" onClick={handleSubmit(onSubmit)}>
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col lg:flex-row items-start gap-4"
          >
            <div className="lg:w-1/2 space-y-6">
              {/* Общая информация */}
              <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label>Название катка</Label>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Адрес</Label>
                  <Controller
                    name="address"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Район</Label>
                  <Controller
                    name="district"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Район" />
                        </SelectTrigger>
                        <SelectContent>
                          {districtOptions.map(({ value, label }) => (
                            <SelectItem key={value} value={value}>
                              {label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Станции метро</Label>
                  <MultiSelect
                    groups={getMetroStationOptions()}
                    value={selected}
                    onChange={setSelected}
                    maxTagsCount={2}
                    renderTag={(option: MultiSelectOption, remove) => (
                      <Badge
                        key={option.value}
                        variant="outline"
                        className="flex items-center gap-1 px-2 py-1 rounded-full text-sm"
                      >
                        {option.label}
                        <X className="w-3 h-3 cursor-pointer" onClick={remove} />
                      </Badge>
                    )}
                  />
                </div>
              </div>

              {/* Контакты и соцсети */}
              <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label>Номера телефонов</Label>
                  <Controller
                    name="phones"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Социальные сети</Label>
                  {socials.map((_, index) => (
                    <div key={index} className="flex gap-2">
                      <Input placeholder="Название" className="w-1/3" />
                      <Input placeholder="URL" className="w-2/3" />
                    </div>
                  ))}
                  <Button onClick={addSocial} variant="outline" size="sm" type="button">
                    <Plus className="w-4 h-4 mr-1" /> Добавить
                  </Button>
                </div>
              </div>

              {/* Арены и сеансы */}
              <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label>Арены</Label>
                  <Controller
                    name="arenas"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Типы сеансов</Label>
                  <Controller
                    name="sessionTypes"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                  />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <Map location={[60.036484, 30.306125]} />
            </div>
          </form>
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
