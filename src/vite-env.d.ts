/// <reference types="vite/client" />
import type { EditorProps } from "@monaco-editor/react";

declare global {
  interface IFile {
    id: string;
    name: string;
    value: string;
    language: string;
    active?: boolean;
    /**
     * 是否可以修改name和删除
     */
    readonly?: boolean;
    /**
     * 不显示在编辑面板中
     */
    hidden?: boolean;
  }

  interface IFiles {
    [key: string]: IFile;
  }

  type IEditor = Parameters<EditorProps["onMount"]>[0];
  type IMonaco = Parameters<EditorProps["onMount"]>[1];
}
