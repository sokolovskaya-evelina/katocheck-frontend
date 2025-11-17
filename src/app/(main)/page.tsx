import ScheduleFilters from "@/app/ui/schedule/schedule-filters"
import Schedule from "@/app/ui/schedule/schedule"
import { Flex } from "antd"
import prisma from "@/lib/prisma";

export default async function Page() {
    const users = await prisma.user.findMany();
    console.log(users)
    return (
    <Flex vertical gap={15}>
      <ScheduleFilters />
      <Schedule />
    </Flex>
  )
}
