import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { Post, usePostList } from '@domain';
import { AppTabScreenProps } from 'src/routes/navigationType';

import { CScreen, CPostItem } from '@components';

import { HomeEmpty } from './components/HomeEmpty';
import { HomeHeader } from './components/HomeHeader';

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  const { error, loading, postList, refresh, fetchNextPage } = usePostList();

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
          <HomeEmpty refetch={refresh} error={error} loading={loading} />
        }
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        refreshing={loading}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refresh} />
        }
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
