import { Tabs } from "antd"

import RinksTable from "@/app/ui/admin/rinks-table"
import UserTable from "@/app/ui/admin/users-table"
import { prisma } from "@/lib/prisma"

export default async function SuperAdminTabs() {
  const users = await prisma.user.findMany()
  const rinks = await prisma.iceRink.findMany()

  const rinkOptions = rinks.map(option => ({
    label: option.name,
    value: option.id,
  }))
  return (
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
          children: <UserTable data={users} rinkOptions={rinkOptions} />,
        },
      ]}
    />
  )
};

