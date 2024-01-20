//
// class provides option of making rule evaluation for a field
//  dependent upon specific conditions being met.

import IFormInstance from "../form/IFormInstance";
import IFormSchema from "../form/IFormSchema";
import IRule from "../rules/IRule";
import IRuleGroup from "../rules/IRuleGroup";
import ISchemaField from "../schema/ISchemaField";

//
export default interface ICondition {
  readonly schemaField: ISchemaField;
  readonly ruleGroup: IRuleGroup;
  addRule(rule: IRule): void;
  doesConditionPass(form: IFormInstance<IFormSchema>, rowId: string | number | null | undefined, transactionId: string): boolean;
}
