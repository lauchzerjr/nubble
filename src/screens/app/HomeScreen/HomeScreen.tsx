import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { Post, usePostList } from '@domain';
import { AppTabScreenProps } from 'src/routes/navigationType';

import { CScreen, CPostItem } from '@components';

import { HomeEmpty } from './components/HomeEmpty';
import { HomeHeader } from './components/HomeHeader';

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  const { error, loading, postList, refetch, fetchNextPage } = usePostList();

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <CPostItem post={item} />;
  }

  return (
    <CScreen style={$screen}>
      <FlatList
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: postList.length === 0 ? 1 : undefined }}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={
          <HomeEmpty refetch={refetch} error={error} loading={loading} />
        }
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
      />
    </CScreen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  flex: 1,
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
};
