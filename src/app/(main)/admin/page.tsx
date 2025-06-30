"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye } from "lucide-react"
import Info from "./components/Info/Info"
import SkatingScheduleTable from "./components/ScheduleTable/ScheduleTable"

export default function AdminPage() {
  return (
    <div className="text-base">
      <h1 className="text-2xl font-bold mb-6">Административная панель</h1>

      <Tabs defaultValue="actualSchedule">
        <div className="w-full overflow-x-auto">
          <TabsList className="inline-flex min-w-max gap-2 px-1">
            <TabsTrigger value="actualSchedule">Текущее расписание</TabsTrigger>
            <TabsTrigger value="editProfile">Редактировать информацию</TabsTrigger>
            <TabsTrigger value="archiveSchedule">Архив</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="actualSchedule">
          <SkatingScheduleTable />
        </TabsContent>

        <TabsContent value="editProfile">
          <Info />
        </TabsContent>

        <TabsContent value="archiveSchedule">
          <div className="grid gap-4">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="p-4 bg-white rounded shadow-sm flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">katok_ozerski_{i + 1}_04.xlsx</p>
                  <p className="text-sm text-muted-foreground">Загружено 10.04.2025</p>
                </div>
                <Button variant="ghost" className="text-primary gap-2">
                  <Eye className="w-4 h-4" /> Посмотреть
                </Button>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
