import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { CScreen } from "../../../components/CScreen/CScreen";
import { CText } from "../../../components/CText/CText";
import { CTextInput } from "../../../components/CTextInput/CTextInput";
import { CButton } from "../../../components/CButton/CButton";
import { RootStackParamList } from "../../../routes/Routes";
import { useResetNavigationSuccess } from "../../../hooks/useResetNavigationSuccess";

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "ForgotPasswordScreen"
>;

export function ForgotPasswordScreen({ navigation }: ScreenProps) {
  const { reset } = useResetNavigationSuccess();
  function submitForm() {
    reset({
      title: "Enviamos as instruções para seu e-mail",
      description:
        "Clique no link enviado no seu e-mail para recuperar sua senha",
      icon: {
        name: "messageRound",
        color: "primary",
      },
    });
  }
  return (
    <CScreen canGoBack>
      <CText preset="headingLarge" presetFont="bold" mb="s16">
        Esqueci minha senha
      </CText>
      <CText mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </CText>

      <CTextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: "s48" }}
      />

      <CButton mt="s12" title="Recuperar senha" onPress={submitForm} />
    </CScreen>
  );
}
