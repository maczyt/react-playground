import JSZip from "jszip";
import { store } from "../store";
import { toJS } from "../utils";
import html from "../download/index.html?raw";
import pkg from "../download/package.json?raw";
import viteConfig from "../download/vite.config.ts?raw";
import { saveAs } from "file-saver";

export const download = async () => {
  const zip = new JSZip();
  const files = store.realFiles.map((file) => toJS(file));
  const src = zip.folder("src")!;
  files.forEach((file) => {
    src.file(file.name, file.value);
  });
  zip.file("vite.config.ts", viteConfig);
  zip.file("package.json", pkg);
  zip.file("index.html", html);

  const content = await zip.generateAsync({ type: "blob" });
  saveAs(content, "react-project.zip");
};
