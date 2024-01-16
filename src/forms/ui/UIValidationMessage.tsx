import React from "react";
import UIShowIfTrue from "./UIShowIfTrue";

interface IProperties {
  name: string;
  message: string;
}

const UIValidationMessage: React.FC<IProperties> = (props) => {
  const show = props.message.length > 0;

  return (
    <UIShowIfTrue value={show}>
      <div>
        {props.name} {props.message}
      </div>
    </UIShowIfTrue>
  );
};

export default UIValidationMessage;
