import MonacoEditor, { loader } from "@monaco-editor/react";
import { useSnapshot } from "valtio";
import { store } from "../store";
import { useMemoizedFn } from "ahooks";

loader.config({
  paths: {
    vs: window.location.origin + "/min/vs",
  },
});

const Editor = () => {
  const snap = useSnapshot(store);
  const activeFile = snap.activeFile;
  const handleMount = useMemoizedFn((editor: IEditor, monaco: IMonaco) => {
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.Preserve,
      esModuleInterop: true,
    });
  });
  return activeFile ? (
    <MonacoEditor
      value={activeFile.value}
      height={"100%"}
      language={activeFile.language}
      path={activeFile.name}
      onMount={handleMount}
    />
  ) : null;
};

export default Editor;
