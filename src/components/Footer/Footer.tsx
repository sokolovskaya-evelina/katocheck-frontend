import { Mail, Phone, Send } from "lucide-react"
import { Logo } from "@/components/Header/Logo"
import { NavLink } from "@/components/NevLink/NavLink"

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-screen-xl mx-auto px-6 pt-10 pb-5 flex flex-col md:flex-row justify-between gap-6 text-sm text-slate-800">
        <Logo />
        <div className="flex gap-4 items-center">
          <NavLink href="/" className="text-muted-foreground">
            Расписание
          </NavLink>
          <NavLink href="/rinks">Катки</NavLink>
          <NavLink href="/favorites">Избранное</NavLink>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 pb-10 flex flex-col md:flex-row justify-between gap-6 text-sm text-slate-800">
        <div>
          <h3 className="font-bold mb-2">КОНТАКТЫ</h3>
          <p className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a href="mailto:info@katocheck.example.com" className="hover:underline">
              info@katocheck.example.com
            </a>
          </p>
          <p className="flex items-center gap-2 mt-1">
            <Phone className="w-4 h-4" />
            <a href="tel:+711111111" className="hover:underline">
              +7 (111) 111-11-11
            </a>
          </p>
          <p className="flex items-center gap-2 mt-1">
            <Send className="w-4 h-4" />
            <a href="tg://resolve?domain=sokolovskaya_evelina" className="hover:underline">
              @sokolovskaya_evelina
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
