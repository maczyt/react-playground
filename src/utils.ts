export const fileName2Language = (name: string) => {
  const suffix = name.split(".").pop() || "";
  if (["js", "jsx"].includes(suffix)) return "javascript";
  if (["ts", "tsx"].includes(suffix)) return "typescript";
  if (["json"].includes(suffix)) return "json";
  if (["css"].includes(suffix)) return "css";
  return "javascript";
};

export const getIframeUrl = (data: string) => {
  // 处理es-module shim
  const shimsUrl = "//unpkg.com/es-module-shims";
  const isSupportEsModule = typeof import.meta !== "undefined";
  const newIframeRaw = isSupportEsModule
    ? data
    : data.replace("<!--es-module-shims-->", shimsUrl);
  return URL.createObjectURL(new Blob([newIframeRaw], { type: "text/html" }));
};

export const getModuleFile = (files: IFile[], moduleName: string) => {
  let name = moduleName.split("./").pop() ?? "";
  if (!name.includes(".")) {
    const real = files.find((file) => file.name.split(".").includes(name));
    if (real) {
      name = real.name;
    }
  }
  return files.find((file) => file.name === name);
};

// 编辑前对代码处理
export const beforeTransformCodeHandler = (filename: string, code: string) => {
  let _code = code;
  // 如果没有引入React，开头添加React引用
  const regexReact = /import\s+React/g;
  if (
    (filename.endsWith(".jsx") || filename.endsWith(".tsx")) &&
    !regexReact.test(code)
  ) {
    _code = `import React from 'react';\n${code}`;
  }
  return _code;
};
