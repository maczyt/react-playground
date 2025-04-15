export { default as App } from "./template/App.tsx?raw";
export { default as Main } from "./template/main.tsx?raw";
export { default as ImportMap } from "./template/import-map.json?raw";
export { default as AppCss } from "./template/App.css?raw";

// App组件名
export const MAIN_FILE_NAME = "App.tsx";
// esm模块映射文件名
export const IMPORT_MAP_FILE_NAME = "import-map.json";
// 主入口文件名
export const ENTRY_FILE_NAME = "main.tsx";

// post message 事件名
export enum MessageType {
  done = "done",
  load = "loaded",
  update = "update",
  compile = "compile",
}
