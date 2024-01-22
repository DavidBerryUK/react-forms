import IAssert from "../../../forms/interfaces/assertions/IAssert";
import React from "react";
import useInputBaseController from "../../hooks/UseInputBaseController";

interface IProperties {
  value: string;
  onChange?: (value: string, isValid: boolean, validationMessages: Array<string>) => void;
  assertions: Array<IAssert>;
}

const UIInputText: React.FC<IProperties> = (props) => {
  const { handleOnChangeEvent } = useInputBaseController(props.assertions, props.onChange);

  return <input type="text" value={props.value} onChange={handleOnChangeEvent} />;
};

export default UIInputText;
