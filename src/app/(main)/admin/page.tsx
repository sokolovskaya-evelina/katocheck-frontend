"use client"

import { Button, Card, Space, Tabs } from "antd"
import { Eye } from "lucide-react"
import Info from "./components/Info/Info"
import SkatingScheduleTable from "./components/ScheduleTable/ScheduleTable"
import Title from "antd/es/typography/Title"
import Text from "antd/es/typography/Text"
import RinksTable from "@/app/(main)/admin/components/RinksTable/RinksTable"
import UsersTable from "@/app/(main)/admin/components/UsersTable/UsersTable"
import { RoleEnum } from "@/types/enums"

export default function AdminPage() {
  const userRole: RoleEnum = RoleEnum.SuperAdmin

  return (
    <div>
      <Title level={2} className="mb-6">
        Панель администратора
      </Title>

      {userRole === "SUPER_ADMIN" ? (
        <Tabs
          defaultActiveKey="rinks"
          items={[
            {
              key: "rinks",
              label: "Катки",
              children: <RinksTable />,
            },
            {
              key: "users",
              label: "Пользователи",
              children: <UsersTable />,
            },
          ]}
        />
      ) : (
        <Tabs
          defaultActiveKey="actualSchedule"
          items={[
            {
              key: "actualSchedule",
              label: "Текущее расписание",
              children: <SkatingScheduleTable />,
            },
            {
              key: "editProfile",
              label: "Редактировать информацию",
              children: <Info />,
            },
            {
              key: "archiveSchedule",
              label: "Архив",
              children: (
                <Space direction="vertical" size="middle" className="w-full">
                  {[1, 2, 3].map((_, i) => (
                    <Card key={i} className="p-0">
                      <div className="flex justify-between items-center">
                        <div>
                          <Text strong>katok_ozerski_{i + 1}_04.xlsx</Text>
                          <br />
                          <Text type="secondary" className="text-sm">
                            Загружено 10.04.2025
                          </Text>
                        </div>
                        <Button type="link" className="text-primary flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          Посмотреть
                        </Button>
                      </div>
                    </Card>
                  ))}
                </Space>
              ),
            },
          ]}
        />
      )}
    </div>
  )
}
