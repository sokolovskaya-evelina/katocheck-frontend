import { Button, Card, Space, Tabs, Text } from "antd"
import SkatingScheduleTable from "@/app/ui/admin/schedule-table";
import Info from "@/app/ui/admin/info";
import {Eye} from "lucide-react";

const AdminTabs = () => {
    return (
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
    );
};

export default AdminTabs;