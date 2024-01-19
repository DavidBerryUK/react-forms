import { IInputProperties } from "./interfaces/IInputProperties";
import React, { useEffect } from "react";
import TextNumberFormatter from "../utility/TextNumberFormatter";
import UIShowIfFalse from "../UIShowIfFalse";
import UIShowIfTrue from "../UIShowIfTrue";
import useFieldController from "./hooks/useFieldController";

const UIInputMoney: React.FC<IInputProperties> = (props) => {
  const { field, handleTextChange, updateField } = useFieldController(props);
  const showTitle = props.hideTitle !== true;
  const showValidationMessage = field.validation.validationMessage.length > 0;

  // first load
  useEffect(() => {
    ensureCorrectFormat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <span className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          £
        </span>
        <UIShowIfTrue value={props.disabled}>
          <input
            id={field.key}
            type="number"
            disabled
            name={field.key}
            aria-label={props.field.caption}
            value={TextNumberFormatter.formatter2dp(field.valueAsString, props.allowBlankNumbers)}
          />
        </UIShowIfTrue>
        <UIShowIfFalse value={props.disabled}>
          <input
            id={field.key}
            type="number"
            name={field.key}
            aria-label={props.field.caption}
            value={field.valueAsString}
            onChange={handleTextChange}
            onBlur={handleLostFocusEvent}
          />
        </UIShowIfFalse>
      </span>
      <UIShowIfTrue value={showValidationMessage}>
        <div className="form-validation-message">{field.validation.validationMessage}</div>
      </UIShowIfTrue>
    </div>
  );
};

export default UIInputMoney;
