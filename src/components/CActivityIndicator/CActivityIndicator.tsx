import { useTheme } from "@shopify/restyle";
import React from "react";
import { ActivityIndicator, ActivityIndicatorProps } from "react-native";
import { ThemeProps, ThemeColorsProps } from "../../theme/theme";

interface CActivityIndicatorProps
  extends Omit<ActivityIndicatorProps, "color"> {
  color: ThemeColorsProps;
}
export function CActivityIndicator({ color }: CActivityIndicatorProps) {
  const { colors } = useTheme<ThemeProps>();

  return <ActivityIndicator color={colors[color]} />;
}
