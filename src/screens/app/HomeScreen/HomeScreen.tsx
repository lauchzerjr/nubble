import React from 'react';

import { AppScreenProps } from 'src/routes/navigationType';

import { CButton, CScreen, CText } from '@components';

export function HomeScreen({ navigation }: AppScreenProps<'HomeScreen'>) {
  return (
    <CScreen>
      <CText preset="headingLarge">Home Screen</CText>
      <CButton
        title="Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </CScreen>
  );
}
