import { Post } from '@domain';

import { CBox } from '../CBox/CBox';

import { CPostActions } from './components/CPostActions';
import { CPostHeader } from './components/CPostHeader';
import { CPostImage } from './components/CPostImage';

interface PostItemProps {
  post: Post;
}

export function CPostItem({ post }: PostItemProps) {
  return (
    <CBox paddingHorizontal="s24" mb="s24">
      <CPostHeader author={post.author} />
      <CPostImage imageURL={post.imageURL} />
      <CPostActions
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
        reactionCount={post.reactionCount}
      />
    </CBox>
  );
}
