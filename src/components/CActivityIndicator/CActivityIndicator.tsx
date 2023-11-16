import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';

import { useAppTheme } from '@hooks';
import { ThemeColorsProps } from '@theme';

interface CActivityIndicatorProps
  extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColorsProps;
}
export function CActivityIndicator({ color }: CActivityIndicatorProps) {
  const { colors } = useAppTheme();

  return <ActivityIndicator color={colors[color]} />;
}
