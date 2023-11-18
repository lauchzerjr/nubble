import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SettingsScreen } from '@screens';

import { AppTabNavigator } from './AppTabNavigator';

export type AppStackParamList = {
  AppTabNavigator: undefined;
  SettingsScreen: undefined;
};

const { Screen, Navigator } = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="AppTabNavigator">
      <Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Screen name="SettingsScreen" component={SettingsScreen} />
    </Navigator>
  );
}
