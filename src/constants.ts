import { fileName2Language } from "./utils";
import React17Main from "./template/react17/main.tsx?raw";
import React18Main from "./template/react18/main.tsx?raw";
import React19Main from "./template/react19/main.tsx?raw";
import AntdCss from "./template/antd.css?raw";

import { uid } from "uid";

export { default as React17ImportMap } from "./template/react17/import-map.json?raw";
export { default as React18ImportMap } from "./template/react18/import-map.json?raw";
export { default as React19ImportMap } from "./template/react19/import-map.json?raw";
export { default as App } from "./template/App.tsx?raw";
export { default as ImportMap } from "./template/import-map.json?raw";
export { default as AppCss } from "./template/App.css?raw";

// App组件名
export const MAIN_FILE_NAME = "App.tsx";
// esm模块映射文件名
export const IMPORT_MAP_FILE_NAME = "Import Map";
// 主入口文件名
export const ENTRY_FILE_NAME = "main.tsx";

// post message 事件名
export enum MessageType {
  done = "done",
  load = "loaded",
  update = "update",
  compile = "compile",
  error = "error",
}
export const React17MainFile: IFile = {
  id: uid(),
  name: ENTRY_FILE_NAME,
  language: fileName2Language(ENTRY_FILE_NAME),
  value: React17Main,
  hidden: true,
  isEntry: true,
};
export const React18MainFile: IFile = {
  id: uid(),
  name: ENTRY_FILE_NAME,
  language: fileName2Language(ENTRY_FILE_NAME),
  value: React18Main,
  hidden: true,
  isEntry: true,
};
export const React19MainFile: IFile = {
  id: uid(),
  name: ENTRY_FILE_NAME,
  language: fileName2Language(ENTRY_FILE_NAME),
  value: React19Main,
  hidden: true,
  isEntry: true,
};

export const AntdCssFile: IFile = {
  id: uid(),
  name: "antd.css",
  language: "css",
  value: AntdCss,
  hidden: true,
  readonly: true,
};
