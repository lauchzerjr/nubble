import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { CScreen } from "../../../components/CScreen/CScreen";
import { CIcon } from "../../../components/CIcon/CIcon";
import { CText } from "../../../components/CText/CText";
import { CButton } from "../../../components/CButton/CButton";
import { RootStackParamList } from "../../../routes/Routes";

type ScreenProps = NativeStackScreenProps<RootStackParamList, "SuccessScreen">;

export function SuccessScreen({ route, navigation }: ScreenProps) {
  function goBackToBegin() {
    navigation.goBack()
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
