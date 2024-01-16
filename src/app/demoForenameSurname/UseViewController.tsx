import { useRef, useState } from "react";
import RuleMandatory from "../../forms/validationRules/simple/RuleMandatory";
import RuleMinLength from "../../forms/validationRules/simple/RuleMinLength";
import RuleMaxLength from "../../forms/validationRules/simple/RuleMaxLength";

const useViewController = () => {
  const [forename, setForename] = useState("");
  const forenameRules = useRef([
    new RuleMandatory(),
    new RuleMinLength(8),
    new RuleMaxLength(20),
  ]);
  const [forenameValidationMessage, setForenameValidationMessage] =
    useState("");

  const [surname, setSurname] = useState("");
  const surnameRules = useRef([
    new RuleMandatory(),
    new RuleMinLength(8),
    new RuleMaxLength(20),
  ]);
  const [surnameValidationMessage, setSurnameValidationMessage] = useState("");

  const handleForenameChanged = (
    value: string,
    isValid: boolean,
    validationMessage: Array<string>
  ) => {
    setForename(value);
    setForenameValidationMessage(validationMessage.join(","));
  };

  const handleSurnameChanged = (
    value: string,
    isValid: boolean,
    validationMessage: Array<string>
  ) => {
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
