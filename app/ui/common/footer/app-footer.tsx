import { Footer } from "antd/es/layout/layout"

import { Logo } from "../header/logo"

import { Contacts } from "./contacts"
import { FooterLinks } from "./footer-links"

export function AppFooter() {
  return (
    <Footer className="border-t">
      <div
        className="max-w-7xl mx-auto pb-5 flex flex-col md:flex-row justify-between gap-6 text-sm text-slate-800">
        <Logo />
        <FooterLinks />
      </div>
      <Contacts />
    </Footer>
  )
}
