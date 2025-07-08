import { Mail, Phone, Send } from "lucide-react"

export function Contacts() {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-sm text-slate-800">
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
  )
}
