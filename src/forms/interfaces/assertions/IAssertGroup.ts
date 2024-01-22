import IAssert from "./IAssert";
import ICondition from "../condition/ICondition";
import IConditions from "../condition/IConditions";
import IFormField from "../form/IFormField";
import IFormInstance from "../form/IFormInstance";
import IFormSchema from "../form/IFormSchema";
import ISchemaField from "../schemaField/ISchemaField";

export default interface IAssertGroup {
  schemaField: ISchemaField | undefined;
  items: Array<IAssert>;
  conditions: IConditions;
  clone(deep?: boolean): IAssertGroup;
  addAssertion(assertion: IAssert): void;
  evaluate(form: IFormInstance<IFormSchema>, field: IFormField, transactionId: string, updateValidationState?: boolean): boolean;
  addCondition(condition: ICondition): void;
}
