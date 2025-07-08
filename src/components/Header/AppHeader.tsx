"use client"

import { Button, Drawer, Layout, Menu } from "antd"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import { MenuOutlined } from "@ant-design/icons"
import { navItems } from "@/lib/constsnts"

const { Header } = Layout

export function AppHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Header className="shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-blue-600">
          KatoCheck
        </Link>

        <div className="hidden md:flex flex-1 justify-end">
          <Menu
            mode="horizontal"
            selectedKeys={[pathname]}
            className="border-none bg-white w-full justify-end"
            theme="light"
            items={navItems.map(({ href, label }) => ({
              key: href,
              label: <Link href={href}>{label}</Link>,
            }))}
          />
        </div>

        <div className="md:hidden">
          <Button type="text" icon={<MenuOutlined />} onClick={() => setOpen(true)} />
        </div>

        <Drawer placement="right" onClose={() => setOpen(false)} open={open} width={250}>
          <nav className="flex flex-col gap-4 text-base">
            {navItems.map(item => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
        </Drawer>
      </div>
    </Header>
  )
}
