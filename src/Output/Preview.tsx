import { Box } from "@mui/system";
import { useMemoizedFn, useMount, useUnmount, useUpdateEffect } from "ahooks";
import { FC, useRef } from "react";
import iframeData from "./iframe.html?raw";
import { getIframeUrl } from "../utils";
import { MessageType } from "../constants";
import importmap from "../template/import-map.json?raw";
import { useSnapshot } from "valtio";
import { store } from "../store";

const iframeUrl = getIframeUrl(iframeData);
const Preview: FC<{
  code: string;
}> = ({ code }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const handleMessage = useMemoizedFn((ev: MessageEvent) => {
    console.log("ev", ev);
  });
  const snap = useSnapshot(store);

  useUpdateEffect(() => {
    iframeRef.current?.contentWindow?.postMessage({
      type: MessageType.update,
      code,
      importmap,
      cssFilesCode: snap.files
        .filter((file) => file.language === "css")
        .map((file) => ({
          code: file.value,
        })),
    });
  }, [code, snap.files]);

  useMount(() => {
    window.addEventListener("message", handleMessage);
  });
  useUnmount(() => {
    window.removeEventListener("message", handleMessage);
  });
  return (
    <Box width="100%" height="100%">
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
    </Box>
  );
};

export default Preview;
