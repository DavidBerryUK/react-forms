import { IInputProperties } from "./interfaces/IInputProperties";
import DateTimeUtility from "../utility/DateTimeUtility";
import React from "react";
import UIShowIfTrue from "../UIShowIfTrue";
import useFieldController from "./hooks/useFieldController";

const UIInputDate: React.FC<IInputProperties> = (props) => {
  const { field, handleTextChange } = useFieldController(props);
  const showTitle = props.hideTitle !== true;

  //
  // Present date to edit to the user
  //
  const formattedAsDate = DateTimeUtility.dateForInputBox(field.valueAsDate);
  const showValidationMessage = field.validation.validationMessage.length > 0;

  return (
    <div>
      <UIShowIfTrue value={showTitle}>
        <label htmlFor={field.id} className="form-label text-muted mb-0">
          {field.schemaField.caption}
        </label>
      </UIShowIfTrue>
      <input
        id={field.key}
        disabled={props.disabled}
        type="date"
        name={field.id}
        aria-label={props.field.caption}
        value={formattedAsDate}
        onChange={handleTextChange}
      />
      <UIShowIfTrue value={showValidationMessage}>
        <div className="form-validation-message">{field.validation.validationMessage}</div>
      </UIShowIfTrue>
    </div>
  );
};

export default UIInputDate;
