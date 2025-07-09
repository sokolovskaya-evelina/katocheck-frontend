import type { ThemeConfig } from "antd/es/config-provider/context"

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#0092fd",
    colorInfo: "#58a6ff",
    colorSuccess: "#0092fd",
    colorError: "#e5484d",
    colorWarning: "#f7b500",
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
    Notification: {
      colorSuccess: "#0092fd",
      colorError: "#e5484d",
      colorInfo: "#58a6ff",
    },
    Message: {
      colorSuccess: "#0092fd",
      colorError: "#e5484d",
      colorInfo: "#58a6ff",
    },
    Alert: {
      colorSuccess: "#0092fd",
      colorError: "#e5484d",
      colorInfo: "#58a6ff",
      colorWarning: "#f7b500",
    },
    Result: {
      colorSuccess: "#0092fd",
      colorError: "#e5484d",
      colorInfo: "#58a6ff",
    },
  },
}

export default theme
