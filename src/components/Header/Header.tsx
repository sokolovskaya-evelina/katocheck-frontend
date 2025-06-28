import { NavLink } from "@/components/NevLink/NavLink"
import { Logo } from "./Logo"
import { Sidebar } from "./Sidebar"

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-700">
          <NavLink href="/">Расписание</NavLink>
          <NavLink href="/rinks">Катки</NavLink>
          <NavLink href="/favorites">Избранное</NavLink>
        </nav>

        <Sidebar />
      </div>
    </header>
  )
}
