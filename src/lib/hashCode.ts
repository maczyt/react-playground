import { compress, decompress } from "./compress";

export const hashToCode = (): IFile[] | void => {
  const hash = location.hash.slice(1);
  try {
    if (hash) {
      const files = decompress(hash);
      return files;
    }
  } catch (e) {}
};

export const codeToHash = (files: IFile[]): string => {
  return compress(files);
};
