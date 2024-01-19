import { IInputProperties } from "./interfaces/IInputProperties";
import React, { useEffect } from "react";
import TextNumberFormatter from "../utility/TextNumberFormatter";
import UIShowIfTrue from "../UIShowIfTrue";
import useFieldController from "./hooks/useFieldController";

const UIInputDecimal: React.FC<IInputProperties> = (props) => {
  const { field, handleTextChange, updateField } = useFieldController(props);
  const showTitle = props.hideTitle !== true;
  const showValidationMessage = field.validation.validationMessage.length > 0;

  // first load
  useEffect(() => {
    ensureCorrectFormat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field]);

  // loose focus
  const handleLostFocusEvent = () => {
    ensureCorrectFormat();
  };

  const ensureCorrectFormat = () => {
    const formattedValue = TextNumberFormatter.formatter2dp(field.valueAsString, props.allowBlankNumbers);
    if (field.value !== formattedValue) {
      field.value = formattedValue;
      updateField(field);
    }
  };

  return (
    <div>
      <UIShowIfTrue value={showTitle}>
        <label htmlFor={field.id} className="form-label text-muted mb-0">
          {field.schemaField.caption}
        </label>
      </UIShowIfTrue>
      <input
        id={field.key}
        type="number"
        disabled={props.disabled}
        name={field.key}
        aria-label={props.field.caption}
        value={field.valueAsString}
        onChange={handleTextChange}
        onBlur={handleLostFocusEvent}
      />
      <UIShowIfTrue value={showValidationMessage}>
        <div className="form-validation-message">{field.validation.validationMessage}</div>
      </UIShowIfTrue>
    </div>
  );
};

export default UIInputDecimal;
