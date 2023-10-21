import React from "react";
import { ActivityIndicator, ActivityIndicatorProps } from "react-native";
import { ThemeColorsProps } from "../../theme/theme";
import { useAppTheme } from "../../hooks/useAppTheme";

interface CActivityIndicatorProps
  extends Omit<ActivityIndicatorProps, "color"> {
  color: ThemeColorsProps;
}
export function CActivityIndicator({ color }: CActivityIndicatorProps) {
  const { colors } = useAppTheme();

  return <ActivityIndicator color={colors[color]} />;
}
