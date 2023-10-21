import React from "react";

import { CTextInput, CTextInputProps } from "../CTextInput/CTextInput";
import { CIcon } from "../CIcon/CIcon";

type CPasswordInputProps = Omit<CTextInputProps, "iconRight">;

export function CPasswordInput(props: CPasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = React.useState(true);

  function toggleSecureTextEntry() {
    setIsSecureTextEntry((prev) => !prev);
  }

  return (
    <CTextInput
      secureTextEntry={isSecureTextEntry}
      {...props}
      iconRight={
        <CIcon
          color="gray2"
          name={isSecureTextEntry ? "eyeOn" : "eyeOff"}
          onPress={toggleSecureTextEntry}
        />
      }
    />
  );
}
