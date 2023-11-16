import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CIconProps } from "@components";

import { ForgotPasswordScreen } from "../screens/auth/ForgotPasswordScreen/ForgotPasswordScreen";
import { LoginScreen } from "../screens/auth/LoginScreen/LoginScreen";
import { SignUpScreen } from "../screens/auth/SignUpScreen/SignUpScreen";
import { SuccessScreen } from "../screens/auth/SuccessScreen/SuccessScreen";

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<CIconProps, "name" | "color">;
  };
  ForgotPasswordScreen: undefined;

  // TODO: Success Screen: icon, title, description
};

const { Screen, Navigator } = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          fullScreenGestureEnabled: true,
        }}
      >
        <Screen name="LoginScreen" component={LoginScreen} />
        <Screen name="SignUpScreen" component={SignUpScreen} />
        <Screen name="SuccessScreen" component={SuccessScreen} />
        <Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
