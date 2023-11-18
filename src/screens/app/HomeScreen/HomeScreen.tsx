import React from 'react';

import { AppTabScreenProps } from 'src/routes/navigationType';

import { CButton, CScreen, CText } from '@components';

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
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
