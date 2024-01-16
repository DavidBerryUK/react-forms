import { useEffect, useState } from "react";
import IRule from "../../../interfaces/IRule";

const useInputBaseController = (
  rules: Array<IRule>,
  onChange?: (
    value: string,
    isValid: boolean,
    validationMessages: Array<string>
  ) => void
) => {
  const [validationRules, setValidationRules] = useState<Array<IRule>>(
    new Array<IRule>()
  );

  useEffect(() => {
    setValidationRules(rules);
  }, [rules]);

  const handleOnChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      const value = event.target.value;

      //
      // evaluate rules
      //
      var validationMessages = new Array<string>();
      var validationValue = value.trim();
      var isValid = true;
      validationRules.forEach((rule) => {
        var result = rule.isValid(null, null, validationValue);
        if (result.pass === false) {
          isValid = false;
          validationMessages.push(result.message);
        }
      });

      //
      // return change with indication if the field is valid
      //
      onChange(value, isValid, validationMessages);
    }
  };

  return {
    handleOnChangeEvent,
  };
};

export default useInputBaseController;
