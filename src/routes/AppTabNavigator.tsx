import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {
  FavoriteScreen,
  HomeScreen,
  MyProfileScreen,
  NewPostScreen,
} from '@screens';

import { AppTabBar } from './AppTabBar';

export type AppTabNavigatorParamList = {
  HomeScreen: undefined;
  NewPostScreen: undefined;
  FavoriteScreen: undefined;
  MyProfileScreen: undefined;
};

const { Navigator, Screen } =
  createBottomTabNavigator<AppTabNavigatorParamList>();

export function AppTabNavigator() {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }
  return (
    <Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="NewPostScreen" component={NewPostScreen} />
      <Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Screen name="MyProfileScreen" component={MyProfileScreen} />
    </Navigator>
  );
}
