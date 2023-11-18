import React from 'react';

import { SimpleLogo } from '@brand';

import { BoxProps, CBox, CIcon } from '@components';
import { useAppSafeArea } from '@hooks';

export function HomeHeader() {
  const { top } = useAppSafeArea();
  return (
    <CBox {...$wrapper} style={{ paddingTop: top }}>
      <SimpleLogo width={70} />
      <CBox flexDirection="row">
        <CBox mr="s24">
          <CIcon name="search" />
        </CBox>
        <CBox mr="s24">
          <CIcon name="bell" />
        </CBox>
        <CIcon name="comment" />
      </CBox>
    </CBox>
  );
}

const $wrapper: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingBottom: 's24',
  paddingHorizontal: 's24',
};
