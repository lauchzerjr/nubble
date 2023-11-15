import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { CScreen, CIcon, CText, CButton } from "@components";
import { RootStackParamList } from "@routes";

type ScreenProps = NativeStackScreenProps<RootStackParamList, "SuccessScreen">;

export function SuccessScreen({ route, navigation }: ScreenProps) {
  function goBackToBegin() {
    navigation.goBack();
  }
  return (
    <CScreen>
      <CIcon {...route.params.icon} />
      <CText preset="headingLarge" presetFont="bold" mt="s24">
        {route.params.title}
      </CText>
      <CText preset="paragraphLarge" presetFont="bold" mt="s16">
        {route.params.description}
      </CText>
      <CButton onPress={goBackToBegin} title="Voltar ao início" mt="s40" />
    </CScreen>
  );
}
