import React from 'react';

import { CActivityIndicator, CBox, CButton, CText } from '@components';

interface Props {
  loading: boolean;
  error: unknown;
  refetch: () => void;
}
export function HomeEmpty({ loading, error, refetch }: Props) {
  let component = (
    <CText presetFont="bold" preset="paragraphMedium">
      Não há publicações no seu feed
    </CText>
  );

  if (loading) {
    component = <CActivityIndicator color="primary" />;
  }

  if (error) {
    component = (
      <>
        <CText presetFont="bold" preset="paragraphMedium" mb="s16">
          Não foi possível carregar o feed 😢
        </CText>
        <CButton title="recarregar" preset="outline" onPress={refetch} />
      </>
    );
  }

  return (
    <CBox flex={1} justifyContent="center" alignItems="center">
      {component}
    </CBox>
  );
}
