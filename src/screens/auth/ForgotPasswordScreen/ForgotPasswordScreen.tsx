import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { CFormTextInput, CScreen, CText, CButton } from '@components';
import { useResetNavigationSuccess } from '@hooks';
import { AuthScreenProps } from '@routes';

import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './forgotPasswordSchema';

export function ForgotPasswordScreen({
  navigation,
}: AuthScreenProps<'ForgotPasswordScreen'>) {
  const { reset } = useResetNavigationSuccess();
  const { control, formState, handleSubmit } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  function submitForm(values: ForgotPasswordSchema) {
    console.log(values);
    reset({
      title: 'Enviamos as instruções para seu e-mail',
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
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

      <CFormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's48' }}
      />

      <CButton
        disabled={!formState.isValid}
        mt="s12"
        title="Recuperar senha"
        onPress={handleSubmit(submitForm)}
      />
    </CScreen>
  );
}
