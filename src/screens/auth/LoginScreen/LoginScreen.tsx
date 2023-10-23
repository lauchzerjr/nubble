import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { CText } from "../../../components/CText/CText";
import { CTextInput } from "../../../components/CTextInput/CTextInput";
import { CIcon } from "../../../components/CIcon/CIcon";
import { CButton } from "../../../components/CButton/CButton";
import { CScreen } from "../../../components/CScreen/CScreen";
import { RootStackParamList } from "../../../routes/Routes";

type ScreenProps = NativeStackScreenProps<RootStackParamList, "LoginScreen">;
export function LoginScreen({ navigation }: ScreenProps) {
  function navigateToSignUpScreen() {
    navigation.navigate("SignUpScreen");
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate("ForgotPasswordScreen");
  }

  return (
    <CScreen>
      <CText mb="s8" preset="headingLarge" presetFont="bold">
        Olá
      </CText>
      <CText mb="s40" preset="paragraphLarge" presetFont="medium">
        Digite seu e-mail e sena para entrar
      </CText>

      <CTextInput
        errorMessage="mensagem de erro"
        boxProps={{ mb: "s20" }}
        label="E-mail"
        placeholder="Digite seu e-mail"
      />

      <CTextInput
        iconRight={<CIcon name="eyeOn" color="gray2" />}
        boxProps={{ mb: "s10" }}
        placeholder="Digite sua senha"
        label="Senha"
      />

      <CText
        onPress={navigateToForgotPasswordScreen}
        color="primary"
        preset="paragraphSmall"
        presetFont="bold"
      >
        Esqueci minha senha
      </CText>

      <CButton mt="s48" title="Entrar" />
      <CButton
        mt="s12"
        preset="outline"
        title="Criar uma conta"
        onPress={navigateToSignUpScreen}
      />
    </CScreen>
  );
}
