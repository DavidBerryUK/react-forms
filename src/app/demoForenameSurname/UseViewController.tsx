import { useRef, useState } from "react";
import AssertIsMandatory from "../../forms/assertions/AssertIsMandatory";
import AssertLengthMin from "../../forms/assertions/AssertLengthMin";
import AssertLengthMax from "../../forms/assertions/AssertLengthMax";

const useViewController = () => {
  const [forename, setForename] = useState("");
  const forenameRules = useRef([new AssertIsMandatory(), new AssertLengthMin(8), new AssertLengthMax(20)]);
  const [forenameValidationMessage, setForenameValidationMessage] = useState("");

  const [surname, setSurname] = useState("");
  const surnameRules = useRef([new AssertIsMandatory(), new AssertLengthMin(8), new AssertLengthMax(20)]);
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
