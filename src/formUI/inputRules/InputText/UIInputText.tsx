import IRule from "../../../forms/interfaces/rules/IRule";
import React from "react";
import useInputBaseController from "../../hooks/UseInputBaseController";

interface IProperties {
  value: string;
  onChange?: (value: string, isValid: boolean, validationMessages: Array<string>) => void;
  rules: Array<IRule>;
}

const UIInputText: React.FC<IProperties> = (props) => {
  const { handleOnChangeEvent } = useInputBaseController(props.rules, props.onChange);

  return <input type="text" value={props.value} onChange={handleOnChangeEvent} />;
};

export default UIInputText;
