import ICondition from "./ICondition";
import IFormInstance from "../form/IFormInstance";
import IFormSchema from "../form/IFormSchema";

//
// class provides option of making assertion evaluation for a field
//  dependent upon specific conditions being met.
//
export default interface IConditions {
  items: Array<ICondition>;
  clone(): IConditions;
  count(): number;
  addCondition(condition: ICondition): void;
  doConditionsPass(form: IFormInstance<IFormSchema>, rowId: string | number | null | undefined, transactionId: string): boolean;
}
