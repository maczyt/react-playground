import { proxy } from "valtio";
import {
  App,
  ENTRY_FILE_NAME,
  IMPORT_MAP_FILE_NAME,
  ImportMap,
  Main,
  MAIN_FILE_NAME,
} from "../constants";
import { fileName2Language } from "../utils";
import { uid } from "uid";

export const EntryFileId = uid();
const DefaultFiles = [
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
];

export const store = proxy<{
  files: IFile[];
  importMaps: IFile[];
  activeId: string;
  editId?: string;
  get activeFile(): IFile | undefined;
}>({
  activeId: DefaultFiles.find((file) => file.name === MAIN_FILE_NAME)?.id!,
  files: DefaultFiles,
  importMaps: [
    {
      id: uid(),
      name: IMPORT_MAP_FILE_NAME,
      language: fileName2Language(IMPORT_MAP_FILE_NAME),
      value: ImportMap,
      readonly: true,
    },
  ],
  get activeFile() {
    return this.files.find((file: IFile) => file.id === this.activeId);
  },
});
