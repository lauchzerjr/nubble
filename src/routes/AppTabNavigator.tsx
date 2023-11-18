import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  FavoriteScreen,
  HomeScreen,
  MyProfileScreen,
  NewPostScreen,
} from '@screens';

export type AppTabNavigatorParamList = {
  HomeScreen: undefined;
  NewPostScreen: undefined;
  FavoriteScreen: undefined;
  MyProfileScreen: undefined;
};

const { Navigator, Screen } =
  createBottomTabNavigator<AppTabNavigatorParamList>();

export function AppTabNavigator() {
  return (
    <Navigator
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
