import { Logo } from "../header/logo"
import { Footer } from "antd/es/layout/layout"
import { FooterLinks } from "./footer-links"
import { Contacts } from "./contacts"

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
