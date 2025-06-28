import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import FiltersCard from "@/components/Filters/FiltersCard"
import FiltersModal from "@/components/Filters/FiltersModal"

const ScheduleFilters = () => {
  return (
    <>
      <FiltersCard>
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Каток" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="kre">Крестовский остров</SelectItem>
            <SelectItem value="sev">Севкабель</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Метро" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="prim">Приморская</SelectItem>
            <SelectItem value="mosk">Московская</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Вид сеанса" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="free">Свободное катание</SelectItem>
            <SelectItem value="learn">Учебный сеанс</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center space-x-2">
          <Checkbox color="primary" id="favorites" />
          <Label htmlFor="favorites">Избранное</Label>
        </div>
      </FiltersCard>
      <FiltersModal>
        <div>
          <Label className="mb-2">Каток</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Каток" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="kre">Крестовский остров</SelectItem>
              <SelectItem value="sev">Севкабель</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="mb-2">Метро</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Метро" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="prim">Приморская</SelectItem>
              <SelectItem value="mosk">Московская</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="mb-2">Вид сеанса</Label>{" "}
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Вид сеанса" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="free">Свободное катание</SelectItem>
              <SelectItem value="learn">Учебный сеанс</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox color="primary" id="favorites" />
          <Label htmlFor="favorites">Избранное</Label>
        </div>
      </FiltersModal>
    </>
  )
}

export default ScheduleFilters
