import { useContext } from "react";
import { ThemeContext } from ".";

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);
  return {
    theme,
  } as const;
};
