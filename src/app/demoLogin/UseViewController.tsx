import { useRef, useState } from "react";
import Builder from "../../forms/models/Builder";

const useViewController = () => {
  //
  // User Name
  //
  const [username, setUserName] = useState("");
  const usernameRules = useRef(Builder.string().mandatory().lengthBetween(8, 20).toRules());
  const [usernameValidationMessage, setUserNameValidationMessage] = useState("");

  //
  // Password
  //
  const [password, setPassword] = useState("");
  const passwordRules = useRef(
    Builder.string()
      .mandatory()
      .lengthBetween(8, 20)
      .containSymbols(1, 99)
      .containDigits(1, 2)
      .containLowerCase(1, 99)
      .containUpperCase(1, 99)
      .toRules()
  );
  const [passwordValidationMessage, setPasswordValidationMessage] = useState("");

  const handleUsernameChanged = (value: string, isValid: boolean, validationMessage: Array<string>) => {
    setUserName(value);
    setUserNameValidationMessage(validationMessage.join(","));
  };

  const handlePasswordChanged = (value: string, isValid: boolean, validationMessage: Array<string>) => {
    setPassword(value);
    setPasswordValidationMessage(validationMessage.join(","));
  };

  return {
    username,
    password,
    usernameRules,
    passwordRules,
    usernameValidationMessage,
    passwordValidationMessage,
    handleUsernameChanged,
    handlePasswordChanged,
  };
};

export default useViewController;
