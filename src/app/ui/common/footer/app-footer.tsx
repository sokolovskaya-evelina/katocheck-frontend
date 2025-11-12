import { Logo } from "@/app/ui/common/header/logo"
import { Footer } from "antd/es/layout/layout"
import { FooterLinks } from "@/app/ui/common/footer/footer-links"
import { Contacts } from "@/app/ui/common/footer/contacts"

export function AppFooter() {
  return (
    <Footer className="border-t">
      <div className="max-w-screen-xl mx-auto pb-5 flex flex-col md:flex-row justify-between gap-6 text-sm text-slate-800">
        <Logo />
        <FooterLinks />
      </div>
      <Contacts />
    </Footer>
  )
}
