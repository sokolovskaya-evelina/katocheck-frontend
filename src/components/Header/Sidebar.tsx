"use client"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NavLink } from "@/components/NevLink/NavLink"

export function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            {open ? <X className="h-5 w-5 outline-0" /> : <Menu className="h-5 w-5" />}
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-[250px] p-4">
          <nav className="flex flex-col gap-4 mt-4">
            <NavLink href="/public" onClick={() => setOpen(false)}>
              Расписание
            </NavLink>
            <NavLink href="/rinks" onClick={() => setOpen(false)}>
              Катки
            </NavLink>
            <NavLink href="/favorites" onClick={() => setOpen(false)}>
              Избранное
            </NavLink>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
