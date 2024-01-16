import { useRef, useState } from "react";
import RuleMandatory from "../../forms/validationRules/simple/RuleMandatory";
import RuleMinLength from "../../forms/validationRules/simple/RuleMinLength";
import RuleMaxLength from "../../forms/validationRules/simple/RuleMaxLength";

const useViewController = () => {
  const [username, setUserName] = useState("");
  const usernameRules = useRef([
    new RuleMandatory(),
    new RuleMinLength(8),
    new RuleMaxLength(20),
  ]);
  const [usernameValidationMessage, setUserNameValidationMessage] =
    useState("");

  const [password, setPassword] = useState("");
  const passwordRules = useRef([
    new RuleMandatory(),
    new RuleMinLength(8),
    new RuleMaxLength(20),
  ]);
  const [passwordValidationMessage, setPasswordValidationMessage] =
    useState("");

  const handleUsernameChanged = (
    value: string,
    isValid: boolean,
    validationMessage: Array<string>
  ) => {
    setUserName(value);
    setUserNameValidationMessage(validationMessage.join(","));
  };

  const handlePasswordChanged = (
    value: string,
    isValid: boolean,
    validationMessage: Array<string>
  ) => {
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
