import ICondition from "./ICondition";
import IConditions from "./IConditions";
import IFormField from "./IFormField";
import IFormInstance from "./IFormInstance";
import IFormSchema from "./IFormSchema";
import IRule from "./IRule";
import ISchemaField from "./ISchemaField";

export default interface IRuleGroup {
  schemaField: ISchemaField | undefined;
  items: Array<IRule>;
  conditions: IConditions;
  clone(deep?: boolean): IRuleGroup;
  addRule(rule: IRule): void;
  evaluate(form: IFormInstance<IFormSchema>, field: IFormField, transactionId: string, updateValidationState?: boolean): boolean;
  addCondition(condition: ICondition): void;
}
