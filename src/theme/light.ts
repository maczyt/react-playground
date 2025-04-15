import { createTheme } from "@mui/system";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    base: "#444",
    nav: {
      bg: "#fff",
      border: "#ddd",
      btn: "#666",
      green: "#3ca877",
      purple: "#904cbc",
      boxShadow: "0 0 4px #00000054",
    },
    repl: {
      bg: "#fff",
      border: "#ddd",
      colorBranding: "#42b883",
      textLight: "#888",
    },
  },
});
