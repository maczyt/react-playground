import { transform } from "@babel/standalone";
import { MessageType } from "../constants";
import { beforeTransformCodeHandler, getModuleFile } from "../utils";

const filenameMap = new Map<string, string>();
self.addEventListener("message", async ({ data }: MessageEvent) => {
  if (data.type !== "compile") return;
  filenameMap.clear();
  const compiledCode = codeTransform(
    data.value.value,
    data.value.name,
    data.value.files,
    data.value.reactVersion
  );
  self.postMessage({
    type: MessageType.update,
    code: compiledCode,
    map: filenameMap,
  });
});

function codeTransform(
  code: string,
  filename: string,
  files: IFile[],
  reactVersion: string
) {
  const _code = beforeTransformCodeHandler(filename, code, reactVersion);
  const result = transform(_code, {
    presets: ["react", "typescript"],
    filename,
    plugins: [
      {
        visitor: {
          ImportDeclaration(path) {
            // 处理各种import资源
            const moduleName = path.node.source.value;
            // 处理react版本
            if (moduleName.includes("react")) {
              if (!moduleName.includes("@")) {
                path.node.source.value = `${moduleName}@${reactVersion}`;
              }
            }
            if (moduleName.startsWith(".")) {
              const moduleFile = getModuleFile(files, moduleName);
              if (!moduleFile) return;
              // css
              if (moduleFile.name.endsWith(".css")) {
                path.remove();
              }
              // json
              else if (moduleFile.name.endsWith(".json")) {
                // TODO: json to js
              } else {
                const result =
                  codeTransform(
                    moduleFile.value,
                    moduleFile.name,
                    files,
                    reactVersion
                  ) ?? "";

                const url = URL.createObjectURL(
                  new Blob([result], { type: "application/javascript" })
                );
                filenameMap.set(url, moduleFile.name);
                path.node.source.value = url;
              }
            }
          },
        },
      },
    ],
  }).code;
  return result;
}
