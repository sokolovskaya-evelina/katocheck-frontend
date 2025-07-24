"use client"

import { ConfigProvider } from "antd"
import type { ReactNode } from "react"
import theme from "@/lib/antd/theme"
import { AntdRegistry } from "@/lib/antd/antdRegistry"
import StoreProvider from "@/app/providers/StoreProvider"
import { PersistGate } from "redux-persist/integration/react"
import { persistor } from "@/redux/store"
import locale from "antd/locale/ru_RU"

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <StoreProvider>
      <PersistGate loading={null} persistor={persistor}>
        <AntdRegistry>
          <ConfigProvider locale={locale} theme={theme}>
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </PersistGate>
    </StoreProvider>
  )
}
