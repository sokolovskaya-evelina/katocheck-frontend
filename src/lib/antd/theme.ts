import type { ThemeConfig } from "antd/es/config-provider/context"

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#0092fd",
    colorBgBase: "#f8fafc",
    colorBgContainer: "#ffffff",
    colorBorder: "#e2e8f0",
    colorText: "#0f172a",
    colorTextSecondary: "#64748b",
    borderRadius: 8,
    fontFamily: "'Inter', sans-serif",
  },
  components: {
    Button: {
      colorPrimary: "red",
      borderRadius: 6,
    },
    Layout: {
      headerBg: "#ffffff",
      footerBg: "#ffffff",
    },
  },
}

export default theme
