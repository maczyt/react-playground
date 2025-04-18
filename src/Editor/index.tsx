import MonacoEditor, { loader } from "@monaco-editor/react";
import { useSnapshot } from "valtio";
import { store } from "../store";
import { useMemoizedFn, useSize, useUpdateEffect } from "ahooks";
import { useTheme } from "../theme/useTheme";
import { Box } from "@mui/system";
import { useRef } from "react";
import { editFile } from "../store/actions";
import { createATA } from "./ata";
import { debounce } from "lodash-es";
import antd from "../download/antd.d.ts?raw";
import { Button, Modal, Typography } from "antd";

loader.config({
  paths: {
    vs:
      window.location.origin +
      (process.env.NODE_ENV === "development"
        ? "/min/vs"
        : "/react-playground/min/vs"),
  },
});

const Editor = () => {
  const snap = useSnapshot(store);
  const { theme } = useTheme();
  const activeFile = snap.activeFile;
  const containerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<IEditor>(null);

  const size = useSize(containerRef);
  const handleMount = useMemoizedFn(
    async (editor: IEditor, monaco: IMonaco) => {
      monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
        jsx: monaco.languages.typescript.JsxEmit.Preserve,
        esModuleInterop: true,
        resolveJsonModule: true,
        allowSyntheticDefaultImports: true,
        allowJs: true,
      });
      editorRef.current = editor;

      // for antd
      monaco.languages.typescript.typescriptDefaults.addExtraLib(
        antd,
        `file:///node_modules/@types/antd/index.d.ts`
      );

      // ata
      const ata = await createATA((code, path) => {
        monaco.languages.typescript.typescriptDefaults.addExtraLib(
          code,
          `file://${path}`
        );
      });
      ata?.(editor.getValue());
      const handleEditorChange = debounce(() => {
        ata?.(editor.getValue());
      });
      editor.onDidChangeModelContent(handleEditorChange);
      editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
        // 阻止浏览器保存页面
      });
    }
  );

  useUpdateEffect(() => {
    if (!editorRef.current) return;
    editorRef.current.layout();
  }, [size?.width]);

  return (
    <Box
      ref={containerRef}
      width={"100%"}
      flex="1"
      display="flex"
      flexDirection={"column"}
    >
      <Box
        sx={{
          pl: "64px",
        }}
      >
        <Button
          color="primary"
          variant="link"
          style={{ padding: 0 }}
          onClick={() => {
            Modal.info({
              title: "Available Packages",
              width: 600,
              content: (
                <div>
                  <p>
                    我们内置了 <Typography.Text code>antd</Typography.Text>,
                    您可以直接使用.
                  </p>
                  <p>
                    支持es的模块，我们理论上来说都可以使用，可以来{" "}
                    <Button
                      color="primary"
                      variant="link"
                      href="https://esm.sh"
                      target="_blank"
                      style={{ padding: 0 }}
                    >
                      esm.sh
                    </Button>{" "}
                    查看.
                  </p>
                </div>
              ),
              onOk() {},
            });
          }}
        >
          What's available?
        </Button>
      </Box>
      <Box flex="1">
        {activeFile ? (
          <MonacoEditor
            value={activeFile.value}
            onChange={(value) => {
              editFile(activeFile.id, (file) => {
                file.value = value ?? "";
              });
            }}
            height={"100%"}
            language={activeFile.language}
            path={activeFile.name}
            onMount={handleMount}
            theme={theme === "dark" ? "vs-dark" : "light"}
          />
        ) : null}
      </Box>
    </Box>
  );
};

export default Editor;
