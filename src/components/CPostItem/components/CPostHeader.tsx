import { Image } from 'react-native';

import { Post } from '@domain';

import { CBox } from '../../CBox/CBox';
import { CText } from '../../CText/CText';

type CPostHeaderProps = Pick<Post, 'author'>;

export function CPostHeader({ author }: CPostHeaderProps) {
  return (
    <CBox flexDirection="row" alignItems="center" mb="s16">
      <Image
        source={{ uri: author.profileURL }}
        style={{ width: 32, height: 32, borderRadius: 14 }}
      />
      <CText preset="paragraphMedium" presetFont="medium" ml="s12">
        {author.name}
      </CText>
    </CBox>
  );
}
