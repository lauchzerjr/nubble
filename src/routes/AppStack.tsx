import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen, SettingsScreen } from '@screens';

export type AppStackParamList = {
  HomeScreen: undefined;
  SettingsScreen: undefined;
};

const { Screen, Navigator } = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="SettingsScreen" component={SettingsScreen} />
    </Navigator>
  );
}
