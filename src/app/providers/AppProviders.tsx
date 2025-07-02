"use client"

import { StyleProvider } from "@ant-design/cssinjs"
import { ConfigProvider, theme } from "antd"
import type { ReactNode } from "react"

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <StyleProvider hashPriority="high">
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
          token: {
            colorPrimary: "#1677ff",
            borderRadius: 6,
          },
        }}
      >
        {children}
      </ConfigProvider>
    </StyleProvider>
  )
}
