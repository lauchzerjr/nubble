import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Raleway_200ExtraLight,
  Raleway_200ExtraLight_Italic,
  Raleway_400Regular,
  Raleway_400Regular_Italic,
  Raleway_500Medium,
  Raleway_500Medium_Italic,
  Raleway_700Bold,
  Raleway_700Bold_Italic,
  Raleway_900Black,
  Raleway_900Black_Italic,
} from "@expo-google-fonts/raleway";
import * as SplashScreen from "expo-splash-screen";

import { CText } from "./src/components/CText/CText";
import { CButton } from "./src/components/CButton/CButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "@shopify/restyle";
import { theme } from "./src/theme/theme";
import { CIcon } from "./src/components/CIcon/CIcon";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Raleway_200ExtraLight,
    Raleway_200ExtraLight_Italic,
    Raleway_400Regular,
    Raleway_400Regular_Italic,
    Raleway_500Medium,
    Raleway_500Medium_Italic,
    Raleway_700Bold,
    Raleway_700Bold_Italic,
    Raleway_900Black,
    Raleway_900Black_Italic,
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}} onLayout={onLayoutRootView}>
          <CText mb="s8" preset="headingLarge" presetFont="bold">Olá</CText>
          <CText mb="s40" preset="paragraphLarge" presetFont="medium">Digite seu e-mail e sena para entrar</CText>
          
          
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}
