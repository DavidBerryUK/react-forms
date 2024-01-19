import { useRef, useState } from "react";
import RuleBuilder from "../../forms/syntaxSugar/RuleBuilder";

const useViewController = () => {
  const [forename, setForename] = useState("");
  const forenameRules = useRef(RuleBuilder.string().mandatory().shouldHaveLengthBetween(8, 20).toRules());
  const [forenameValidationMessage, setForenameValidationMessage] = useState("");

  const [surname, setSurname] = useState("");
  const surnameRules = useRef(RuleBuilder.string().mandatory().shouldHaveLengthBetween(8, 20).toRules());
  const [surnameValidationMessage, setSurnameValidationMessage] = useState("");

  const handleForenameChanged = (value: string, isValid: boolean, validationMessage: Array<string>) => {
    setForename(value);
    setForenameValidationMessage(validationMessage.join(","));
  };

  const handleSurnameChanged = (value: string, isValid: boolean, validationMessage: Array<string>) => {
    setSurname(value);
    setSurnameValidationMessage(validationMessage.join(","));
  };

  return {
    forename,
    surname,
    forenameRules,
    surnameRules,
    forenameValidationMessage,
    surnameValidationMessage,
    handleForenameChanged,
    handleSurnameChanged,
  };
};

export default useViewController;
