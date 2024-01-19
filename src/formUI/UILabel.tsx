import React, { ReactNode } from "react";

interface ILabelProperties {
  caption: string;
  children?: ReactNode;
}

const UILabel: React.FC<ILabelProperties> = (props) => {
  const className = "";

  return (
    <label className={className}>
      {props.caption}
      {props.children}
    </label>
  );
};

export default UILabel;
