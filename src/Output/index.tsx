import { Box } from "@mui/system";
import Preview from "./Preview";
import { useEffect, useRef, useState } from "react";
import CompileWorker from "./compile.worker.ts?worker&inline";
import { useDebounceFn, useMount } from "ahooks";
import { MessageType } from "../constants";
import { EntryFileId, store } from "../store";
import { watch } from "valtio/utils";
import { useSnapshot } from "valtio";

const Output = () => {
  const compilerRef = useRef<Worker | null>(null);
  const [compiledCode, setCompiledCode] = useState("");
  const snap = useSnapshot(store);
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
  const { run: runCompile } = useDebounceFn((file: IFile) => {
    // 保存路由hash

    compilerRef.current?.postMessage({
      type: MessageType.compile,
      value: {
        name: file.name,
        value: file.value,
        files: snap.files.map((file) => ({
          ...Object.keys(file).reduce((map, key) => {
            map[key] = file[key as keyof IFile];
            return map;
          }, Object.create(null)),
        })),
      },
    });
  });
  // 编译代码
  useEffect(() => {
    watch((get) => {
      const files = get(store).files;
      const entryFile = files.find((file) => file.id === EntryFileId);
      runCompile(entryFile);
    }, {});
  }, []);

  return (
    <Box width="100%" height="100%">
      <Preview code={compiledCode} />
    </Box>
  );
};

export default Output;
