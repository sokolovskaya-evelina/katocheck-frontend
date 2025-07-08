"use client"

import { useServerInsertedHTML } from "next/navigation"
import { ReactNode, useState } from "react"
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs"

const styleCache = createCache()

export function AntdRegistry({ children }: { children: ReactNode }) {
  const [cache] = useState(() => styleCache)

  useServerInsertedHTML(() => {
    const styleText = extractStyle(cache)
    return <style id="antd" dangerouslySetInnerHTML={{ __html: styleText }} />
  })

  return <StyleProvider cache={cache}>{children}</StyleProvider>
}
