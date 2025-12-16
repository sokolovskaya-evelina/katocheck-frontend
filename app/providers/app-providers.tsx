import {ConfigProvider} from "antd"
import type {ReactNode} from "react"
import theme from "../lib/antd/theme"
import {AntdRegistry} from '@ant-design/nextjs-registry';
import locale from "antd/locale/ru_RU"

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
        <AntdRegistry>
          <ConfigProvider locale={locale} theme={theme}>
            {children}
          </ConfigProvider>
        </AntdRegistry>
  )
}
