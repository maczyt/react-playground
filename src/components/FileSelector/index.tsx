import { Box } from "@mui/system";
import { useSnapshot } from "valtio";
import { store } from "../../store";
import FileItem from "./FileItem";
import { PlusOutlined } from "@ant-design/icons";
import { addFile } from "../../store/actions";

const FileSelect = () => {
  const state = useSnapshot(store);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        height: "38px",
        borderBottom: (theme) => `1px solid ${theme.palette.repl.border}`,
      }}
    >
      <Box>
        {state.files
          .filter((file) => file.fixed !== "right")
          .filter((file) => !file.hidden)
          .map((file) => {
            return (
              <FileItem
                file={file}
                key={file.id}
                onClick={() => {
                  store.activeId = file.id;
                }}
                onDoubleClick={() => {
                  store.editId = file.id;
                }}
              />
            );
          })}
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
            ml: "6px",
            cursor: "pointer",
            color: "#999",
            ":hover": {
              color: (theme) => theme.palette.repl.colorBranding,
            },
          }}
          onClick={() => {
            addFile();
          }}
        >
          <PlusOutlined />
        </Box>
      </Box>
      <Box
        sx={{
          marginLeft: "auto",
        }}
      >
        {state.files
          .filter((file) => file.fixed === "right")
          .filter((file) => !file.hidden)
          .map((file) => {
            return (
              <FileItem
                file={file}
                key={file.id}
                onClick={() => {
                  store.activeId = file.id;
                }}
                onDoubleClick={() => {
                  store.editId = file.id;
                }}
              />
            );
          })}
      </Box>
    </Box>
  );
};

export default FileSelect;
