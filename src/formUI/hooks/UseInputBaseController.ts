import { useEffect, useState } from "react";
import IAssert from "../../forms/interfaces/assertions/IAssert";

const useInputBaseController = (
  assertions: Array<IAssert>,
  onChange?: (value: string, isValid: boolean, validationMessages: Array<string>) => void
) => {
  const [validationAssertions, setValidationAssertions] = useState<Array<IAssert>>(new Array<IAssert>());

  useEffect(() => {
    setValidationAssertions(assertions);
  }, [assertions]);

  const handleOnChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      const value = event.target.value;

      //
      // evaluate assertions
      //
      var validationMessages = new Array<string>();
      var validationValue = value.trim();
      var isValid = true;
      validationAssertions.forEach((assertion) => {
        var result = assertion.isValid(null, null, validationValue);
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
