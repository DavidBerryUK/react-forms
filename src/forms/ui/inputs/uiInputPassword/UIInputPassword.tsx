import React from "react";
import IRule from "../../../interfaces/IRule";
import useInputBaseController from "../hooks/UseInputBaseController";

interface IProperties {
  value: string;
  onChange?: (
    value: string,
    isValid: boolean,
    validationMessages: Array<string>
  ) => void;
  rules: Array<IRule>;
}

const UIInputPassword: React.FC<IProperties> = (props) => {
  const { handleOnChangeEvent } = useInputBaseController(
    props.rules,
    props.onChange
  );

  return (
    <input type="password" value={props.value} onChange={handleOnChangeEvent} />
  );
};

export default UIInputPassword;
