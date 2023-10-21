import React from "react";
import { CBox } from "../CBox/CBox";
import { CIcon } from "../CIcon/CIcon";
import { CText } from "../CText/CText";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import {
  ScrollViewContainer,
  ViewContainer,
} from "./components/ScreenContainer";
import { useAppTheme } from "../../hooks/useAppTheme";
import { useAppSafeArea } from "../../hooks/useAppSafeArea";

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
            <CBox mb="s24" flexDirection="row" alignItems="center">
              <CIcon name="arrowLeft" color="primary" />

              <CText preset="paragraphMedium" presetFont="medium" ml="s8">
                Voltar
              </CText>
            </CBox>
          )}
          {children}
        </CBox>
      </Container>
    </KeyboardAvoidingView>
  );
}
