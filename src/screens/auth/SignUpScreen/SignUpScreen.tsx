import React from "react";
import { CText } from "../../../components/CText/CText";
import { CScreen } from "../../../components/CScreen/CScreen";
import { CTextInput } from "../../../components/CTextInput/CTextInput";
import { CButton } from "../../../components/CButton/CButton";
import { CPasswordInput } from "../../../components/CPasswordInput/CPasswordInput";

export function SignUpScreen() {
  const submitForm = () => {};

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

      <CButton title="Criar uma conta" onPress={submitForm} />
    </CScreen>
  );
}
