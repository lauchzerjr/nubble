import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { CText } from "../../../components/CText/CText";
import { CScreen } from "../../../components/CScreen/CScreen";
import { CTextInput } from "../../../components/CTextInput/CTextInput";
import { CButton } from "../../../components/CButton/CButton";
import { CPasswordInput } from "../../../components/CPasswordInput/CPasswordInput";

import { RootStackParamList } from "../../../routes/Routes";
import { useResetNavigationSuccess } from "../../../hooks/useResetNavigationSuccess";

type ScreenProps = NativeStackScreenProps<RootStackParamList, "SignUpScreen">;

export function SignUpScreen({ navigation }: ScreenProps) {
  const { reset } = useResetNavigationSuccess();

  const submitForm = () => {
    reset({
      title: "Sua conta foi criada com sucesso!",
      description: "Agora é só fazer login na nossa plataforma",
      icon: {
        name: "checkRound",
        color: "success",
      },
    });
  };

  return (
    <CScreen canGoBack isScroll>
      <CText preset="headingLarge" presetFont="bold" mb="s32">
        Criar uma conta
      </CText>

      <CTextInput
        label="Seu username"
        placeholder="@"
        boxProps={{ mb: "s20" }}
      />

      <CTextInput
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{ mb: "s20" }}
      />

      <CTextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: "s20" }}
      />

      <CPasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: "s40" }}
      />

      <CButton title="Criar minha conta" onPress={submitForm} />
    </CScreen>
  );
}
