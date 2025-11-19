"use client"

import { ConfigProvider } from "antd"
import type { ReactNode } from "react"
import theme from "../lib/antd/theme"
import { AntdRegistry } from '@ant-design/nextjs-registry';
import StoreProvider from "./store-provider"
import { PersistGate } from "redux-persist/integration/react"
import locale from "antd/locale/ru_RU"
import {persistor} from "@/app/redux/store";

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
