import { Box, ThemeProvider as SystemThemeProvider } from "@mui/system";
import { ThemeProvider } from "@mui/styles";
import { darkTheme, lightTheme, ThemeContext } from "./theme";
import { useState } from "react";
import Header from "./components/Header";
import { Splitter } from "antd";
import FileSelect from "./components/FileSelector";
import Editor from "./Editor";
import Output from "./Output";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <SystemThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <Box
            sx={{
              width: "100vw",
              height: "100vh",
            }}
          >
            <Header />
            <Box
              sx={{
                height: "calc(100vh - 50px)",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  background: (theme) => theme.palette.repl.bg,
                }}
              >
                <Splitter style={{ height: "100%" }}>
                  <Splitter.Panel
                    defaultSize="50%"
                    min="20%"
                    max="70%"
                    style={{
                      overflow: "visible",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <FileSelect />
                      <Editor />
                    </Box>
                  </Splitter.Panel>
                  <Splitter.Panel>
                    <Output />
                  </Splitter.Panel>
                </Splitter>
              </Box>
            </Box>
          </Box>
        </ThemeProvider>
      </SystemThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
