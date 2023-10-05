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
        <View style={styles.container} onLayout={onLayoutRootView}>
          <CText
            style={{ color: "red", fontSize: 25 }}
            preset="headingLarge"
            presetFont="bold"
          >
            AQUIIII
          </CText>
          <CButton title="Entrar" />
          <CButton preset="outline" title="outline" />
          <CButton disabled loading preset="primary" title="loading" />
          <CButton disabled loading preset="outline" title="loading" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: 24,
    backgroundColor: "#fff",
  },
});
