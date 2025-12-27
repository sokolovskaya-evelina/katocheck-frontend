"use client"

import { Button, Drawer, Layout, Menu } from "antd"
import { AlignJustify } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

import { navItems } from "@/app/lib/constsnts"
import { Logo } from "@/app/ui/common/header/logo"

const { Header: AppHeader } = Layout

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <AppHeader className="shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
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
          <Button type="text" icon={<AlignJustify />} onClick={() => setOpen(true)} />
        </div>

        <Drawer placement="right" onClose={() => setOpen(false)} open={open}>
          <nav className="flex flex-col gap-4 text-base">
            {navItems.map(item => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
        </Drawer>
      </div>
    </AppHeader>
  )
}
