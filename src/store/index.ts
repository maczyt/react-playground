import { proxy } from "valtio";
import {
  AntdCssFile,
  App,
  AppCss,
  IMPORT_MAP_FILE_NAME,
  ImportMap,
  MAIN_FILE_NAME,
  React17ImportMap,
  React17MainFile,
  React18ImportMap,
  React18MainFile,
  React19ImportMap,
  React19MainFile,
} from "../constants";
import { fileName2Language } from "../utils";
import { uid } from "uid";
import { hashToCode } from "../lib/hashCode";
import { proxyMap } from "valtio/utils";

const DefaultFiles: IFile[] = [
  {
    id: uid(),
    name: MAIN_FILE_NAME,
    language: fileName2Language(MAIN_FILE_NAME),
    value: App,
    readonly: true,
    isMain: true,
  },
  {
    id: uid(),
    name: "App.css",
    language: "css",
    value: AppCss,
  },
  {
    id: uid(),
    name: IMPORT_MAP_FILE_NAME,
    language: "json",
    value: ImportMap,
    readonly: true,
    fixed: "right",
    isImportMap: true,
  },
];

const hashStore = hashToCode();
const files = hashStore?.files ?? DefaultFiles;
const activeId = hashStore?.activeId ?? files.find((file) => file.isMain)?.id!;
const reactVersion = hashStore?.reactVersion ?? "react-18";

export const store = proxy<
  IStore & {
    editId?: string;
    get activeFile(): IFile | undefined;
    get realFiles(): IFile[];
    get importmap(): string;
  }
>({
  activeId,
  files,
  reactVersion,
  get activeFile() {
    return this.files.find((file: IFile) => file.id === this.activeId);
  },
  get realFiles() {
    // 结合react versions
    let entryFile = React18MainFile;
    if (this.reactVersion === "react-19") {
      entryFile = React19MainFile;
    } else if (this.reactVersion === "react-17") {
      entryFile = React17MainFile;
    }
    return [entryFile, AntdCssFile, ...this.files];
  },
  get importmap() {
    if (this.reactVersion === "react-19") {
      return React19ImportMap;
    } else if (this.reactVersion === "react-17") {
      return React17ImportMap;
    }
    return React18ImportMap;
  },
});

export const errorStore = proxy<{
  message?: string;
  filename?: string;
  filenameMap: Map<string, string>;
}>({
  filenameMap: proxyMap(),
});
