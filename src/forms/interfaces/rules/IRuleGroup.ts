import ICondition from "../condition/ICondition";
import IConditions from "../condition/IConditions";
import IFormField from "../form/IFormField";
import IFormInstance from "../form/IFormInstance";
import IFormSchema from "../form/IFormSchema";
import IRule from "./IRule";
import ISchemaField from "../schemaField/ISchemaField";

export default interface IRuleGroup {
  schemaField: ISchemaField | undefined;
  items: Array<IRule>;
  conditions: IConditions;
  clone(deep?: boolean): IRuleGroup;
  addRule(rule: IRule): void;
  evaluate(form: IFormInstance<IFormSchema>, field: IFormField, transactionId: string, updateValidationState?: boolean): boolean;
  addCondition(condition: ICondition): void;
}
