"use client"

import { ConfigProvider } from "antd"
import type { ReactNode } from "react"
import theme from "@/lib/antd/theme"
import { AntdRegistry } from "@/lib/antd/antdRegistry"
import StoreProvider from "@/app/providers/StoreProvider"

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <StoreProvider>
      <AntdRegistry>
        <ConfigProvider theme={theme}>{children}</ConfigProvider>
      </AntdRegistry>
    </StoreProvider>
  )
}
