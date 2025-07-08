"use client"

import { ConfigProvider } from "antd"
import type { ReactNode } from "react"
import theme from "@/lib/antd/theme"
import { AntdRegistry } from "@/lib/antd/antdRegistry"

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <AntdRegistry>
      <ConfigProvider theme={theme}>{children}</ConfigProvider>
    </AntdRegistry>
  )
}
