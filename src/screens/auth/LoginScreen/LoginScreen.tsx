import React from 'react';
import { Alert } from 'react-native';

import { zodResolver } from '@hookform/resolvers/zod';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm } from 'react-hook-form';

import {
  CText,
  CButton,
  CScreen,
  CFormTextInput,
  CFormPasswordInput,
} from '@components';
import { RootStackParamList } from '@routes';

import { LoginSchema, loginSchema } from './loginSchema';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({ navigation }: ScreenProps) {
  const { control, formState, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({ email, password }: LoginSchema) {
    Alert.alert(`Email: ${email} ${`\n`} Senha: ${password}`);
  }

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <CScreen isScroll>
      <CText mb="s8" preset="headingLarge" presetFont="bold">
        Olá
      </CText>
      <CText mb="s40" preset="paragraphLarge" presetFont="medium">
        Digite seu e-mail e sena para entrar
      </CText>

      <CFormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's20' }}
      />

      <CFormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: 's20' }}
      />

      <CText
        onPress={navigateToForgotPasswordScreen}
        color="primary"
        preset="paragraphSmall"
        presetFont="bold">
        Esqueci minha senha
      </CText>

      <CButton
        disabled={!formState.isValid}
        mt="s48"
        title="Entrar"
        onPress={handleSubmit(submitForm)}
      />
      <CButton
        mt="s12"
        preset="outline"
        title="Criar uma conta"
        onPress={navigateToSignUpScreen}
      />
    </CScreen>
  );
}
