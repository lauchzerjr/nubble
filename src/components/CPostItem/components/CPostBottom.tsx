import React from 'react';

import { Post } from '@domain';

import { CBox, CTouchableOpacityBox } from '../../CBox/CBox';
import { CText } from '../../CText/CText';

type CPostBottomProps = Pick<Post, 'text' | 'commentCount' | 'author'>;

export function CPostBottom({ text, commentCount, author }: CPostBottomProps) {
  function openComments() {}

  const commentText = getCommentText(commentCount);
  return (
    <CBox mt="s16">
      <CText preset="paragraphMedium" presetFont="bold">
        {author.userName}
      </CText>
      <CText preset="paragraphMedium" color="gray1">
        {text}
      </CText>
      <CTouchableOpacityBox onPress={openComments}>
        {commentText && (
          <CText
            mt="s8"
            preset="paragraphSmall"
            presetFont="bold"
            color="primary">
            {commentText}
          </CText>
        )}
      </CTouchableOpacityBox>
    </CBox>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return null;
  } else if (commentCount === 1) {
    return 'ver comentário';
  } else {
    return `ver ${commentCount} comentários`;
  }
}
