import { IInputProperties } from "./interfaces/IInputProperties";
import React from "react";
import useFieldController from "./hooks/useFieldController";

const UIInputPassword: React.FC<IInputProperties> = (props) => {
  const { field, handleTextChange: handleChange } = useFieldController(props);
  return (
    <input
      type="password"
      className="form-control me-2"
      name={field.id}
      aria-label={props.field.caption}
      value={field.valueAsString}
      onChange={handleChange}
    />
  );
};

export default UIInputPassword;
