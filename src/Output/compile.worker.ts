import { transform } from "@babel/standalone";
import { MessageType } from "../constants";
import { beforeTransformCodeHandler, getModuleFile } from "../utils";
import { store } from "../store";

self.addEventListener("message", async ({ data }: MessageEvent) => {
  if (data.type !== "compile") return;
  const compiledCode = codeTransform(data.value.value, data.value.name);
  self.postMessage({
    type: MessageType.update,
    code: compiledCode,
  });
});

function codeTransform(code: string, filename: string) {
  const _code = beforeTransformCodeHandler(filename, code);
  const result = transform(_code, {
    presets: ["react", "typescript"],
    filename,
    plugins: [
      {
        visitor: {
          ImportDeclaration(path) {
            // 处理各种import资源
            const moduleName = path.node.source.value;
            if (moduleName.startsWith(".")) {
              console.log("moduleName", moduleName);
              const moduleFile = getModuleFile(store.files, moduleName);
              if (!moduleFile) return;
              // css
              if (moduleFile.name.endsWith(".css")) {
                path.remove();
              }
              // json
              else if (moduleFile.name.endsWith(".json")) {
              } else {
                const result =
                  codeTransform(moduleFile.value, moduleFile.name) ?? "";
                path.node.source.value = URL.createObjectURL(
                  new Blob([result], { type: "application/javascript" })
                );
              }
            }
          },
        },
      },
    ],
  }).code;
  return result;
}
