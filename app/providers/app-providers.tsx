import { AntdRegistry } from "@ant-design/nextjs-registry"
import { ConfigProvider } from "antd"
import locale from "antd/locale/ru_RU"
import type { ReactNode } from "react"

import theme from "../lib/antd/theme"

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <AntdRegistry>
      <ConfigProvider locale={locale} theme={theme}>
        {children}
      </ConfigProvider>
    </AntdRegistry>
  )
}
