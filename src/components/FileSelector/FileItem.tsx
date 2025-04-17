import { CloseOutlined } from "@ant-design/icons";
import { Box, Theme } from "@mui/system";
import { Input } from "antd";
import { FC, useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import { store } from "../../store";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { editFile } from "../../store/actions";
const useStyles = makeStyles((theme: Theme) => {
  return {
    active: {
      color: `${theme.palette.repl.colorBranding} !important`,
      borderBottom: `3px solid ${theme.palette.repl.colorBranding}`,
    },
  };
});
const FileItem: FC<{
  file: IFile;
  onClick?: () => void;
  onDoubleClick?: () => void;
}> = ({ file, onClick, onDoubleClick }) => {
  const state = useSnapshot(store);
  const status = state.editId === file.id ? "input" : "label";
  const isActive = state.activeId === file.id;
  const classes = useStyles();
  const [value, setValue] = useState(file.name);

  useEffect(() => {
    setValue(file.name);
  }, [file.name]);
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        fontFamily: "var(--font-code)",
        color: (theme) => theme.palette.repl.textLight,
      }}
      className={clsx({
        [classes.active]: isActive,
      })}
      component={"div"}
      aria-disabled={file.readonly}
      onClick={() => {
        onClick?.();
      }}
      onDoubleClick={(ev) => {
        if (file.readonly) {
          ev.stopPropagation();
          ev.preventDefault();
          return;
        }
        onDoubleClick?.();
      }}
    >
      {status === "label" ? (
        <Box
          sx={{
            padding: "8px 10px 4px",
            height: "100%",
            display: "inline-flex",
            placeItems: "center",
          }}
        >
          {value}
        </Box>
      ) : (
        <Input
          autoFocus
          value={value}
          onChange={(ev) => {
            setValue(ev.target.value);
          }}
          variant="borderless"
          style={{
            width: "100px",
          }}
          onKeyUp={(ev) => {
            if (ev.key === "Enter") {
              store.activeId = file.id;
              store.editId = "";
              editFile(file.id, (file) => {
                file.name = value;
              });
            }
          }}
          onBlur={() => {
            store.activeId = file.id;
            store.editId = "";
            editFile(file.id, (file) => {
              file.name = value;
            });
          }}
        />
      )}
      {file.readonly ? null : (
        <Box
          component={"button"}
          sx={{
            border: "none",
            background: "none",
            fontSize: "10px",
            display: "inline-flex",
            height: "100%",
            placeItems: "center",
            padding: "8px 10px 6px 0",
            cursor: "pointer",
            color: (theme) => theme.palette.repl.textLight,
          }}
        >
          <CloseOutlined />
        </Box>
      )}
    </Box>
  );
};

export default FileItem;
