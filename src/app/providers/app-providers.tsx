"use client"

import { ConfigProvider } from "antd"
import type { ReactNode } from "react"
import theme from "@/app/lib/antd/theme"
import { AntdRegistry } from "@/app/lib/antd/antd-registry"
import StoreProvider from "@/app/providers/store-provider"
import { PersistGate } from "redux-persist/integration/react"
import { persistor } from "@/app/redux/store"
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
