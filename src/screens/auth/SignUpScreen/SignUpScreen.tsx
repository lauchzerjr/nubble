import {
  CButton,
  CFormPasswordInput,
  CFormTextInput,
  CScreen,
  CText,
} from "@components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useResetNavigationSuccess } from "@hooks";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@routes";
import React from "react";
import { useForm } from "react-hook-form";

import { signUpSchema, SignUpSchema } from "./signUpSchema";

type ScreenProps = NativeStackScreenProps<RootStackParamList, "SignUpScreen">;

export function SignUpScreen({ navigation }: ScreenProps) {
  const { reset } = useResetNavigationSuccess();
  const { control, formState, handleSubmit } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      fullName: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  function submitForm(formValues: SignUpSchema) {
    console.log(formValues);
    reset({
      title: "Sua conta foi criada com sucesso!",
      description: "Agora é só fazer login na nossa plataforma",
      icon: {
        name: "checkRound",
        color: "success",
      },
    });
  }
  return (
    <CScreen canGoBack isScroll>
      <CText preset="headingLarge" mb="s32">
        Criar uma conta
      </CText>

      <CFormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        boxProps={{ mb: "s20" }}
      />

      <CFormTextInput
        control={control}
        name="fullName"
        autoCapitalize="words"
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        boxProps={{ mb: "s20" }}
      />
      <CFormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: "s20" }}
      />

      <CFormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: "s48" }}
      />

      <CButton
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Criar uma conta"
      />
    </CScreen>
  );
}
