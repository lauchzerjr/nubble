import React from 'react';
import { View } from 'react-native';

import { Post } from '@domain';

import { CBox, CTouchableOpacityBox } from '../../CBox/CBox';
import { CIcon, CIconProps } from '../../CIcon/CIcon';
import { CText } from '../../CText/CText';

type CPostActionsProps = Pick<
  Post,
  'reactionCount' | 'commentCount' | 'favoriteCount'
>;

export function CPostActions({
  reactionCount,
  commentCount,
  favoriteCount,
}: CPostActionsProps) {
  function likePost() {}
  function navigateToComments() {}
  function FavoritePost() {}
  return (
    <CBox flexDirection="row" mt="s16">
      <Item
        marked
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
        onPress={likePost}
        text={reactionCount}
      />
      <Item
        marked={false}
        icon={{
          default: 'comment',
          marked: 'comment',
        }}
        onPress={navigateToComments}
        text={commentCount}
      />
      <Item
        marked
        icon={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
        onPress={FavoritePost}
        text={favoriteCount}
      />
    </CBox>
  );
}

interface ItemProps {
  marked: boolean;
  onPress: () => void;
  icon: {
    default: CIconProps['name'];
    marked: CIconProps['name'];
  };
  text: number;
}

function Item({ icon, onPress, text, marked }: ItemProps) {
  return (
    <CTouchableOpacityBox
      mr="s24"
      onPress={onPress}
      flexDirection="row"
      alignItems="center"
      justifyContent="center">
      <CIcon
        name={marked ? icon.marked : icon.default}
        color={marked ? 'marked' : undefined}
      />
      {text > 0 && (
        <CText
          presetFont="bold"
          preset="paragraphLarge"
          ml="s4"
          textAlign="center">
          {text}
        </CText>
      )}
    </CTouchableOpacityBox>
  );
}
