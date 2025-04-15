import { Box } from "@mui/system";
import Preview from "./Preview";
import { useEffect, useRef, useState } from "react";
import CompileWorker from "./compile.worker.ts?worker&inline";
import { useMount } from "ahooks";
import { MessageType } from "../constants";
import { EntryFileId, store } from "../store";

const Output = () => {
  const compilerRef = useRef<Worker | null>(null);
  const [compiledCode, setCompiledCode] = useState("");
  useMount(() => {
    if (!compilerRef.current) {
      compilerRef.current = new CompileWorker();

      // 接收编译完成请求
      compilerRef.current.addEventListener(
        "message",
        ({ data }: MessageEvent) => {
          if (data.type === MessageType.update) {
            setCompiledCode(data.code);
          }
        }
      );
    }
  });
  // 编译代码
  useEffect(() => {
    const entryFile = store.files.find((file) => file.id === EntryFileId);
    compilerRef.current?.postMessage({
      type: MessageType.compile,
      value: { name: entryFile?.name, value: entryFile?.value },
    });
  }, []);

  return (
    <Box width="100%" height="100%">
      <Preview code={compiledCode} />
    </Box>
  );
};

export default Output;
