import ICondition from "./ICondition";
import IFormInstance from "./IFormInstance";
import IFormSchema from "./IFormSchema";

//
// class provides option of making rule evaluation for a field
//  dependent upon specific conditions being met.
//
export default interface IConditions {
  items: Array<ICondition>;
  clone(): IConditions;
  count(): number;
  addCondition(condition: ICondition): void;
  doConditionsPass(form: IFormInstance<IFormSchema>, rowId: string | number | null | undefined, transactionId: string): boolean;
}
