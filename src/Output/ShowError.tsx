import { useSnapshot } from "valtio";
import { errorStore } from "../store";
import { Box } from "@mui/system";
import { Alert, Tag } from "antd";

const ShowError = () => {
  const snap = useSnapshot(errorStore);

  const filename = snap.filename
    ? snap.filenameMap.get(snap.filename) ?? snap.filename
    : "";
  return snap.message && filename ? (
    <Box
      sx={{
        position: "absolute",
        bottom: "16px",
        left: "16px",
        right: "16px",
      }}
    >
      <Alert
        message={
          <Box>
            {snap.message} in <Tag>{filename}</Tag>
          </Box>
        }
        type="error"
        closable
        onClose={() => {
          errorStore.message = "";
        }}
      />
    </Box>
  ) : null;
};
export default ShowError;
