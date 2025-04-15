import { createTheme } from "@mui/system";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    base: "#ddd",
    nav: {
      bg: "#1a1a1a",
      border: "#383838",
      btn: "#666",
      green: "#3ca877",
      purple: "#904cbc",
      boxShadow: "none",
      borderBottom: "1px solid #383838",
    },
    repl: {
      bg: "#1a1a1a",
      border: "#383838",
      colorBranding: "#42d392",
      textLight: "#aaa",
    },
  },
});
