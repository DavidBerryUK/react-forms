import React from "react";
import IRule from "../../../forms/interfaces/IRule";
import useInputBaseController from "../../hooks/UseInputBaseController";

interface IProperties {
  value: string;
  onChange?: (value: string, isValid: boolean, validationMessages: Array<string>) => void;
  rules: Array<IRule>;
}

const UIInputNumber: React.FC<IProperties> = (props) => {
  const { handleOnChangeEvent } = useInputBaseController(props.rules, props.onChange);

  return <input type="number" value={props.value} onChange={handleOnChangeEvent} />;
};

export default UIInputNumber;
