import { useRef, useState } from "react";
import FieldBuilder from "../../forms/syntaxSugar/FieldBuilder";

const useViewController = () => {
  //
  // User Name
  //
  const [username, setUserName] = useState("");
  const usernameRules = useRef(FieldBuilder.string().mandatory().shouldHaveLengthBetween(8, 20).toRules());
  const [usernameValidationMessage, setUserNameValidationMessage] = useState("");

  //
  // Password
  //
  const [password, setPassword] = useState("");
  const passwordRules = useRef(
    FieldBuilder.string()
      .mandatory()
      .shouldHaveLengthBetween(8, 20)
      .shouldContainSymbols(1, 99)
      .shouldContainDigits(1, 2)
      .shouldContainLowerCase(1, 99)
      .shouldContainUpperCase(1, 99)
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
