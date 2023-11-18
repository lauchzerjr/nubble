import { ViewStyle } from 'react-native';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { CBox, CIcon, CText, CTouchableOpacityBox } from '@components';
import { useAppSafeArea } from '@hooks';
import { $shadowProps } from '@theme';

import { AppTabNavigatorParamList } from './AppTabNavigator';
import { mapTabScreenToProps } from './mapTabScreenToProps';

export function AppTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const { bottom } = useAppSafeArea();
  return (
    <CBox
      pt="s12"
      flexDirection="row"
      bg="background"
      style={[{ paddingBottom: bottom }, $shadowProps]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const tabItem =
          mapTabScreenToProps[route.name as keyof AppTabNavigatorParamList];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <CTouchableOpacityBox
            key={route.key}
            activeOpacity={1}
            alignItems="center"
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}>
            <CIcon
              color={isFocused ? 'primary' : 'backgroundContrast'}
              name={isFocused ? tabItem.icon.focused : tabItem.icon.unfocused}
            />
            <CText
              mt="s4"
              presetFont="medium"
              preset="paragraphCaption"
              color={isFocused ? 'primary' : 'backgroundContrast'}>
              {tabItem.label}
            </CText>
          </CTouchableOpacityBox>
        );
      })}
    </CBox>
  );
}
