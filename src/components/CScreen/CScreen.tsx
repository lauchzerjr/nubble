import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { CIcon, CText, CBox, CTouchableOpacityBox } from "@components";
import {
  ScrollViewContainer,
  ViewContainer,
} from "./components/ScreenContainer";
import { useAppTheme, useAppSafeArea } from "@hooks";

interface CScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  isScroll?: boolean;
}

export function CScreen({
  children,
  canGoBack = false,
  isScroll = false,
}: CScreenProps) {
  const { bottom, top } = useAppSafeArea();
  const { colors } = useAppTheme();

  const navigation = useNavigation();

  const Container = isScroll ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Container backgroundColor={colors.background}>
        <CBox
          pb="s20"
          paddingHorizontal="s24"
          style={{ paddingTop: top, paddingBottom: bottom }}
        >
          {canGoBack && (
            <CTouchableOpacityBox
              onPress={navigation.goBack}
              mb="s24"
              flexDirection="row"
              alignItems="center"
            >
              <CIcon name="arrowLeft" color="primary" />

              <CText preset="paragraphMedium" presetFont="medium" ml="s8">
                Voltar
              </CText>
            </CTouchableOpacityBox>
          )}
          {children}
        </CBox>
      </Container>
    </KeyboardAvoidingView>
  );
}
