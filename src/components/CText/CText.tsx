import React from "react";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";

interface CTextProps extends TextProps {
  preset?: TextVariants;
  presetFont?: VariantsFontFamily;
}

export function CText({
  children,
  preset = "paragraphMedium",
  presetFont = "regular",
  style,
  ...rest
}: CTextProps) {
  return (
    <Text
      style={[$fontSizes[preset], $fontFamily[presetFont], style]}
      {...rest}
    >
      {children}
    </Text>
  );
}

type TextVariants =
  | "headingLarge"
  | "headingMedium"
  | "headingSmall"
  | "paragraphLarge"
  | "paragraphMedium"
  | "paragraphSmall"
  | "paragraphCaption"
  | "paragraphCaptionSmall";

const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: { fontSize: 32, lineHeight: 38.4 },
  headingMedium: { fontSize: 22, lineHeight: 26.4 },
  headingSmall: { fontSize: 18, lineHeight: 23.4 },

  paragraphLarge: { fontSize: 18, lineHeight: 25.2 },
  paragraphMedium: { fontSize: 16, lineHeight: 22.4 },
  paragraphSmall: { fontSize: 14, lineHeight: 19.6 },

  paragraphCaption: { fontSize: 12, lineHeight: 16.8 },
  paragraphCaptionSmall: { fontSize: 10, lineHeight: 14 },
};

type VariantsFontFamily =
  | "extraLight"
  | "extraLightItalic"
  | "regular"
  | "regularItalic"
  | "medium"
  | "mediumItalic"
  | "bold"
  | "boldItalic"
  | "black"
  | "blackItalic";

const $fontFamily: Record<VariantsFontFamily, TextStyle> = {
  extraLight: { fontFamily: "Raleway_200ExtraLight" },
  extraLightItalic: { fontFamily: "Raleway_200ExtraLight_Italic" },
  regular: { fontFamily: "Raleway_400Regular" },
  regularItalic: { fontFamily: "Raleway_400Regular_Italic" },
  medium: { fontFamily: "Raleway_500Medium" },
  mediumItalic: { fontFamily: "Raleway_500Medium_Italic" },
  bold: { fontFamily: "Raleway_700Bold" },
  boldItalic: { fontFamily: "Raleway_700Bold_Italic" },
  black: { fontFamily: "Raleway_900Black" },
  blackItalic: { fontFamily: "Raleway_900Black_Italic" },
};
