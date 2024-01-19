//
// class provides option of making rule evaluation for a field
//  dependent upon specific conditions being met.

import IFormInstance from "./IFormInstance";
import IFormSchema from "./IFormSchema";
import IRule from "./IRule";
import IRuleGroup from "./IRuleGroup";
import ISchemaField from "./ISchemaField";

//
export default interface ICondition {
  readonly schemaField: ISchemaField;
  readonly ruleGroup: IRuleGroup;
  addRule(rule: IRule): void;
  doesConditionPass(form: IFormInstance<IFormSchema>, rowId: string | number | null | undefined, transactionId: string): boolean;
}
