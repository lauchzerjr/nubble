import React from 'react';
import { Dimensions, Image } from 'react-native';

import { Post } from '@domain';

type CPostImageProps = Pick<Post, 'imageURL'>;

export function CPostImage({ imageURL }: CPostImageProps) {
  return (
    <Image
      resizeMode="cover"
      source={{ uri: imageURL }}
      style={{ width: Dimensions.get('screen').width, height: 400 }}
    />
  );
}
