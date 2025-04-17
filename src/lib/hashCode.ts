import { compress, decompress } from "./compress";

export const hashToCode = (): IStore | undefined => {
  const hash = location.hash.slice(1);
  try {
    if (hash) {
      const store = decompress(hash);
      return store;
    }
  } catch (e) {}
};

export const codeToHash = (store: IStore): string => {
  return compress(store);
};
