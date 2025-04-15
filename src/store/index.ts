import { proxy } from "valtio";
import {
  App,
  AppCss,
  ENTRY_FILE_NAME,
  IMPORT_MAP_FILE_NAME,
  ImportMap,
  Main,
  MAIN_FILE_NAME,
} from "../constants";
import { fileName2Language } from "../utils";
import { uid } from "uid";

export const EntryFileId = uid();
const DefaultFiles: IFile[] = [
  {
    id: EntryFileId,
    name: ENTRY_FILE_NAME,
    language: fileName2Language(ENTRY_FILE_NAME),
    value: Main,
    hidden: true,
  },
  {
    id: uid(),
    name: MAIN_FILE_NAME,
    language: fileName2Language(MAIN_FILE_NAME),
    value: App,
    readonly: true,
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
  },
];

export const store = proxy<{
  files: IFile[];
  activeId: string;
  editId?: string;
  get activeFile(): IFile | undefined;
}>({
  activeId: DefaultFiles.find((file) => file.name === MAIN_FILE_NAME)?.id!,
  files: DefaultFiles,
  get activeFile() {
    return this.files.find((file: IFile) => file.id === this.activeId);
  },
});
