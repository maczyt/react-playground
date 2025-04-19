import JSZip from "jszip";
import { store } from "../store";
import { toJS } from "../utils";
import html from "../download/index.html?raw";
import pkg from "../download/package.json?raw";
import viteConfig from "../download/vite.config.ts?raw";
import { saveAs } from "file-saver";
import { mapValues, merge } from "lodash-es";
import MagicString from "magic-string";
import beautify from "js-beautify";

export const download = async () => {
  const zip = new JSZip();
  const files: IFile[] = store.realFiles.map((file) => toJS(file));
  const src = zip.folder("src")!;
  let _pkg = pkg;
  files.forEach((file) => {
    if (file.isImportMap) {
      try {
        const pkgJson = JSON.parse(pkg);
        const map = JSON.parse(file.value).imports;
        const newPkgJson = merge(pkgJson, {
          dependencies: mapValues(map, (_v, key) =>
            key === "antd" ? "4.24.16" : "latest"
          ),
        });
        _pkg = JSON.stringify(newPkgJson, null, 2);
      } catch (e) {}
      return;
    }
    src.file(file.name, file.value);
  });
  zip.file("vite.config.ts", viteConfig);
  zip.file("package.json", _pkg);

  // 插入css
  const cssFiles = files.filter((file) => file.language === "css");
  let _html = html;
  if (cssFiles.length > 0) {
    const magic = new MagicString(html);
    const index = html.indexOf("</head>");
    magic.appendLeft(
      index,
      cssFiles
        .map((file) => `<link rel="stylesheet" href="./src/${file.name}">`)
        .join("")
    );
    _html = beautify.html(magic.toString(), {
      indent_size: 2, // 缩进大小
      wrap_line_length: 0, // 禁用换行
      end_with_newline: true, // 以换行符结束
    });
  }
  zip.file("index.html", _html);
  const content = await zip.generateAsync({ type: "blob" });
  saveAs(content, "react-project.zip");
};
