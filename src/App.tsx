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
              display: "grid",
              gridTemplateRows: "auto 1fr",
            }}
          >
            <Header />
            <Box>
              <Splitter style={{ height: "100%" }}>
                <Splitter.Panel defaultSize="50%" min="20%" max="70%">
                  <Box
                    sx={{
                      height: "100%",
                      display: "grid",
                      gridTemplateRows: "auto 1fr",
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
        </ThemeProvider>
      </SystemThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
