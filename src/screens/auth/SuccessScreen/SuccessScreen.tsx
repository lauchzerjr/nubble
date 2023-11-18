import React from 'react';

import { CScreen, CIcon, CText, CButton } from '@components';
import { AuthScreenProps } from '@routes';

export function SuccessScreen({
  route,
  navigation,
}: AuthScreenProps<'SuccessScreen'>) {
  function goBackToBegin() {
    navigation.goBack();
  }
  return (
    <CScreen>
      <CIcon {...route.params.icon} />
      <CText preset="headingLarge" presetFont="bold" mt="s24">
        {route.params.title}
      </CText>
      <CText preset="paragraphLarge" presetFont="bold" mt="s16">
        {route.params.description}
      </CText>
      <CButton onPress={goBackToBegin} title="Voltar ao início" mt="s40" />
    </CScreen>
  );
}
