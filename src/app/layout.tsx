import "./globals.css"
import "antd/dist/reset.css"
import type { ReactNode } from "react"
import AppProviders from "@/app/providers/app-providers"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
