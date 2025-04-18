import { setupTypeAcquisition } from "@typescript/ata";
import * as ts from "typescript";

export const createATA = async (onDownload?: ATADownloadFn) => {
  try {
    // @ts-ignore
    // const ts = await import("https://esm.sh/typescript@5.8.3");
    const ata = setupTypeAcquisition({
      typescript: ts,
      projectName: "react-playground",
      delegate: {
        receivedFile(code, path) {
          onDownload?.(code, path);
        },
      },
      fetcher(input, init) {
        const url = input.toString();
        if (["antd"].some((pkg) => url.includes(pkg))) {
          return Promise.resolve(new Response("", { status: 404 }));
        }
        return fetch(input, init);
      },
    });
    return ata;
  } catch (e) {
    console.log("e", e);
  }
};
