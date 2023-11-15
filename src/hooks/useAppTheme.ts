import { useTheme } from "@shopify/restyle";
import { ThemeProps } from "@theme";

export function useAppTheme() {
  return useTheme<ThemeProps>();
}
