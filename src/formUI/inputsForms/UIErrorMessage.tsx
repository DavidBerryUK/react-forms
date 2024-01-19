import { IInputProperties } from "./interfaces/IInputProperties";
import React from "react";
import UIShowIfTrue from "../UIShowIfTrue";
import useFieldController from "./hooks/useFieldController";

const UIErrorMessage: React.FC<IInputProperties> = (props) => {
  const { field } = useFieldController(props);

  const showValidationMessage = field.validation.validationMessage.length > 0;

  return (
    <UIShowIfTrue value={showValidationMessage}>
      <div className="form-validation-message">{field.validation.validationMessage}</div>
    </UIShowIfTrue>
  );
};

export default UIErrorMessage;
