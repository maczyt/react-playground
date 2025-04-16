import { deflateSync, inflateSync } from "fflate";

export const compress = <T extends object>(obj: T) => {
  const str = JSON.stringify(obj);

  // unit 8 array
  const encoder = new TextEncoder();
  const data = encoder.encode(str);

  // deflate压缩
  const compressed = deflateSync(data);

  // 将 Unit8Array 专场二进制字符串
  const binaryStr = Array.from(compressed)
    .map((byte) => String.fromCharCode(byte))
    .join("");

  // 将字符串编码成 base64
  // 方法可以将一个二进制字符串（例如，将字符串中的每一个字节都视为一个二进制数据字节）编码为 Base64 编码的 ASCII 字符
  const base64 = btoa(binaryStr);
  return base64;
};

export const decompress = (base64: string) => {
  const binaryStr = atob(base64);
  const compressed = new Uint8Array(binaryStr.length);
  for (let i = 0; i < binaryStr.length; i++) {
    compressed[i] = binaryStr.charCodeAt(i);
  }
  const decompressed = inflateSync(compressed);
  const decoder = new TextDecoder();
  const str = decoder.decode(decompressed);
  return JSON.parse(str);
};
