import Title from "antd/es/typography/Title"
import {RoleEnum} from "@/app/types/enums"
import SuperAdminTabs from "@/app/ui/admin/super-admin-panel/super-admin-tabs";
import AdminTabs from "@/app/ui/admin/admin-panel/admin-tabs";

export default async function Page() {
  const userRole: RoleEnum = RoleEnum.SuperAdmin
   //  const session = await auth();
   // if (!session) redirect("/login");
  return (
    <div>
      <Title level={2} className="mb-6">
        Панель администратора
      </Title>

      {userRole === "SUPER_ADMIN" ? (
        <SuperAdminTabs/>
      ) : (
          <AdminTabs/>
      )}
    </div>
  )
}
