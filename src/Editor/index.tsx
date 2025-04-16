import MonacoEditor, { loader } from "@monaco-editor/react";
import { useSnapshot } from "valtio";
import { store } from "../store";
import { useMemoizedFn, useSize, useUpdateEffect } from "ahooks";
import { useTheme } from "../theme/useTheme";
import { Box } from "@mui/system";
import { useRef } from "react";
import { editFile } from "../store/actions";

loader.config({
  paths: {
    vs: window.location.origin + "/min/vs",
  },
});

const Editor = () => {
  const snap = useSnapshot(store);
  const { theme } = useTheme();
  const activeFile = snap.activeFile;
  const containerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<IEditor>(null);

  const size = useSize(containerRef);
  const handleMount = useMemoizedFn((editor: IEditor, monaco: IMonaco) => {
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.Preserve,
      esModuleInterop: true,
    });
    editorRef.current = editor;

    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      // 阻止浏览器保存页面
    });
  });

  useUpdateEffect(() => {
    if (!editorRef.current) return;
    editorRef.current.layout();
  }, [size?.width]);
  return (
    <Box ref={containerRef} width={"100%"} flex="1">
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
  );
};

export default Editor;
