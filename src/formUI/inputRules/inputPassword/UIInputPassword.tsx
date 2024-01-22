import React from "react";
import IAssert from "../../../forms/interfaces/assertions/IAssert";
import useInputBaseController from "../../hooks/UseInputBaseController";

interface IProperties {
  value: string;
  onChange?: (value: string, isValid: boolean, validationMessages: Array<string>) => void;
  assertions: Array<IAssert>;
}

const UIInputPassword: React.FC<IProperties> = (props) => {
  const { handleOnChangeEvent } = useInputBaseController(props.assertions, props.onChange);

  return <input type="password" value={props.value} onChange={handleOnChangeEvent} />;
};

export default UIInputPassword;
