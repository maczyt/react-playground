import {
  DownloadOutlined,
  MoonOutlined,
  ReloadOutlined,
  ShareAltOutlined,
  SunOutlined,
} from "@ant-design/icons";
import { Box, useTheme } from "@mui/system";
import { Button, message, Tooltip } from "antd";
import { useContext } from "react";
import copy from "copy-text-to-clipboard";
import { ThemeContext } from "../../theme";
import { download } from "../../lib/download";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const isLight = theme === "light";
  const _theme = useTheme();
  return (
    <Box
      component={"nav"}
      sx={{
        background: (theme) => theme.palette.nav.bg,
        boxShadow: (theme) => theme.palette.nav.boxShadow,
        color: (theme) => theme.palette.base,
        borderBottom: (theme) => theme.palette.nav.borderBottom,
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        padding: "0 1em",
        position: "relative",
        zIndex: 10,
      }}
    >
      <Box
        component={"h1"}
        sx={{
          display: "inline-flex",
          placeItems: "center",
          gap: "10px",
        }}
      >
        <img
          src={
            process.env.NODE_ENV === "development"
              ? "/react.svg"
              : "/react-playground/react.svg"
          }
        />
        <span>React SFC Playground</span>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Tooltip
          title={isLight ? "Switch to dark theme" : "Switch to light theme"}
        >
          <Button
            color="default"
            variant="link"
            type="link"
            icon={isLight ? <SunOutlined /> : <MoonOutlined />}
            onClick={() => {
              setTheme(isLight ? "dark" : "light");
            }}
            style={{
              color: _theme.palette.nav.btn,
            }}
          />
        </Tooltip>
        <Tooltip title={"Copy sharable URL"}>
          <Button
            color="default"
            variant="link"
            type="link"
            icon={<ShareAltOutlined />}
            onClick={() => {
              if (copy(location.href)) {
                message.success("Copied");
              }
            }}
            style={{
              color: _theme.palette.nav.btn,
            }}
          />
        </Tooltip>
        <Tooltip title={"Reload page"}>
          <Button
            color="default"
            variant="link"
            type="link"
            icon={<ReloadOutlined />}
            onClick={() => {
              location.reload();
            }}
            style={{
              color: _theme.palette.nav.btn,
            }}
          />
        </Tooltip>
        <Tooltip title={"Download project files"}>
          <Button
            color="default"
            variant="link"
            type="link"
            icon={<DownloadOutlined />}
            onClick={() => {
              if (window.confirm("Download project files?")) {
                download();
              }
            }}
            style={{
              color: _theme.palette.nav.btn,
            }}
          />
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Header;
