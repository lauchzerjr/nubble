import React from "react";
import { Pressable, TextInput, TextInputProps, TextStyle } from "react-native";

import { CBox, BoxProps, $fontFamily, $fontSizes, CText } from "@components";
import { useAppTheme } from "@hooks";

export interface CTextInputProps extends TextInputProps {
  label: string;
  errorMessage?: string;
  iconRight?: React.ReactElement;
  boxProps?: BoxProps;
}
export function CTextInput({
  label,
  errorMessage,
  iconRight,
  boxProps,
  ...textInputProps
}: CTextInputProps) {
  const { colors } = useAppTheme();
  const inputRef = React.useRef<TextInput>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const $textInputContainer: BoxProps = {
    flexDirection: "row",
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? "error" : "gray4",
    p: "s16",
    borderRadius: "s12",
  };

  return (
    <CBox {...boxProps}>
      <Pressable onPress={focusInput}>
        <CText preset="paragraphMedium" presetFont="medium" mb="s4">
          {label}
        </CText>
        <CBox {...$textInputContainer}>
          <TextInput
            autoCapitalize="none"
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={$textInputStyle}
            {...textInputProps}
          />
          {iconRight && (
            <CBox justifyContent="center" ml="s16">
              {iconRight}
            </CBox>
          )}
        </CBox>
        {errorMessage && (
          <CText preset="paragraphSmall" presetFont="bold" color="error">
            {errorMessage}
          </CText>
        )}
      </Pressable>
    </CBox>
  );
}

const $textInputStyle: TextStyle = {
  flexGrow: 1,
  flexShrink: 1,
  fontFamily: $fontFamily.regular.fontFamily,
  ...$fontSizes.paragraphMedium,
};
