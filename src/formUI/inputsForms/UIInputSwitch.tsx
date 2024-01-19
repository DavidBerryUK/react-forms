import { IInputProperties } from "./interfaces/IInputProperties";
import React from "react";
import UIShowIfTrue from "../UIShowIfTrue";
import useFieldController from "./hooks/useFieldController";

const UIInputSwitch: React.FC<IInputProperties> = (props) => {
  const { field, handleSwitchChange } = useFieldController(props);
  const showTitle = props.hideTitle !== true;
  const showValidationMessage = field.validation.validationMessage.length > 0;

  return (
    <>
      <UIShowIfTrue value={showTitle}>
        <label htmlFor={field.id} className="form-label text-muted mb-0">
          {field.schemaField.caption}
        </label>
      </UIShowIfTrue>
      <div>{/* <UISwitch disabled={props.disabled} value={field.value === "true"} onChange={handleSwitchChange} /> */}</div>
      <UIShowIfTrue value={showValidationMessage}>
        <div className="form-validation-message">{field.validation.validationMessage}</div>
      </UIShowIfTrue>
    </>
  );
};

export default UIInputSwitch;
