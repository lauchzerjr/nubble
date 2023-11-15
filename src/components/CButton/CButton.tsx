import React from "react";
import { buttonPresets } from "./buttonPresets";
import {
  CActivityIndicator,
  CTouchableOpacityBox,
  CTouchableOpacityBoxProps,
  CText,
} from "@components";

export type ButtonPreset = "primary" | "outline";

interface CButtonProps extends CTouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export function CButton({
  title,
  loading,
  preset = "primary",
  disabled,
  ...cTouchableOpacityBoxProps
}: CButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? "disabled" : "default"];

  return (
    <CTouchableOpacityBox
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...cTouchableOpacityBoxProps}
    >
      {loading ? (
        <CActivityIndicator color={buttonPreset.content} />
      ) : (
        <CText
          preset="paragraphMedium"
          presetFont="bold"
          color={buttonPreset.content}
        >
          {title}
        </CText>
      )}
    </CTouchableOpacityBox>
  );
}
