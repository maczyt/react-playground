import { uid } from "uid";
import { store } from ".";
import { fileName2Language } from "../utils";

export const addFile = () => {
  let name = "";
  const fileNames = store.files.map((file) => file.name);
  if (!fileNames.includes("Comp.tsx")) {
    name = "Comp.tsx";
  } else {
    const nums = Array.from({ length: 100 }, (_, index) => index + 1);
    for (const num of nums) {
      if (!fileNames.includes(`Comp${num}.tsx`)) {
        name = `Comp${num}.tsx`;
        break;
      }
    }
    if (!name) {
      throw new Error("你创建的文件也太多了吧");
    }
  }
  const id = uid();
  store.files.push({
    id: id,
    name: name,
    language: fileName2Language(name),
    value: "",
  });
  store.editId = id;
};

export const editFile = (fileId: string, updater: (file: IFile) => void) => {
  const file = store.files.find((file) => file.id === fileId);
  if (file) {
    updater(file);
  }
};
