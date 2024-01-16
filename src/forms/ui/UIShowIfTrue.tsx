import { ReactNode } from "react";
//
// helper component to show child functions if a condition is met
//
interface IProperties {
  value?: boolean | undefined | null;
  children?: ReactNode;
}

const UIShowIfTrue: React.FC<IProperties> = (props) => {
  //
  // if the isTrue property is provided, then evaluate if
  //
  if (
    props.value === undefined ||
    props.value === null ||
    props.value === false
  ) {
    return <></>;
  }

  return <>{props.children}</>;
};

export default UIShowIfTrue;
