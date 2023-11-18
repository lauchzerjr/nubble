import React from 'react';

import { AppScreenProps } from 'src/routes/navigationType';

import { CScreen, CText } from '@components';

export function SettingsScreen(props: AppScreenProps<'SettingsScreen'>) {
  return (
    <CScreen>
      <CText preset="headingLarge">Settings Screen</CText>
    </CScreen>
  );
}
