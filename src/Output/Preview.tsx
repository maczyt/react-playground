import { Box } from "@mui/system";
import { useMemoizedFn, useMount, useUnmount, useUpdateEffect } from "ahooks";
import { FC, useRef } from "react";
import iframeData from "./iframe.html?raw";
import { getIframeUrl } from "../utils";
import { MessageType } from "../constants";
import { useSnapshot } from "valtio";
import { errorStore, store } from "../store";
import { merge } from "lodash-es";

const iframeUrl = getIframeUrl(iframeData);
const Preview: FC<{
  code: string;
}> = ({ code }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const handleMessage = useMemoizedFn(({ data }: MessageEvent) => {
    if (data.type === MessageType.error) {
      errorStore.message = data.message;
      errorStore.filename = data.filename;
    } else if (data.type === MessageType.reloadPage) {
      // Fix importmap 更新没有生效问题
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
  });
  const snap = useSnapshot(store);

  useUpdateEffect(() => {
    // 清除一下错误信息
    errorStore.filename = "";
    errorStore.message = "";

    const importmap =
      snap.files.find((file) => file.isImportMap)?.value ?? "{}";
    try {
      const _importmap = JSON.stringify(
        merge({}, JSON.parse(snap.importmap), JSON.parse(importmap))
      );
      iframeRef.current?.contentWindow?.postMessage({
        type: MessageType.update,
        code,
        importmap: _importmap,
        cssFilesCode: snap.realFiles
          .filter((file) => file.language === "css")
          .map((file) => ({
            code: file.value,
          })),
      });
    } catch (e) {}
  }, [code, snap.files]);

  useMount(() => {
    window.addEventListener("message", handleMessage);
  });
  useUnmount(() => {
    window.removeEventListener("message", handleMessage);
  });
  return (
    <Box
      ref={iframeRef}
      component="iframe"
      src={iframeUrl}
      sx={{
        width: "100%",
        height: "100%",
        border: "none",
      }}
    />
  );
};

export default Preview;
