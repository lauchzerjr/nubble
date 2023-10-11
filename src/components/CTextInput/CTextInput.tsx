import { Pressable, TextInput, TextInputProps, TextStyle } from "react-native";
import { Box, BoxProps } from "../CBox/CBox";
import { $fontFamily, $fontSizes, CText } from "../CText/CText";
import { useApptheme } from "../../hooks/useAppTheme";
import React from "react";

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
  const { colors } = useApptheme();
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
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <CText preset="paragraphMedium" mb="s4">
          {label}
        </CText>
        <Box {...$textInputContainer}>
          <TextInput
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={$textInputStyle}
            {...textInputProps}
          />
          {iconRight && (
            <Box justifyContent="center" ml="s16">
              {iconRight}
            </Box>
          )}
        </Box>
        {errorMessage && (
          <CText preset="paragraphSmall" presetFont="bold" color="error">
            {errorMessage}
          </CText>
        )}
      </Pressable>
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  flexGrow: 1,
  flexShrink: 1,
  fontFamily: $fontFamily.regular.fontFamily,
  ...$fontSizes.paragraphMedium,
};
