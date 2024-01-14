//
// class provides option of making rule evaluation for a field
//  dependent upon specific conditions being met.

import IFormInstance from "./IFormInstance";
import IFormSchema from "./IFormSchema";
import IRuleGroup from "./IRuleGroup";
import ISchemaField from "./ISchemaField";

//
export default interface ICondition {
	readonly schemaField: ISchemaField;
	readonly rules: IRuleGroup;
	doesConditionPass(form: IFormInstance<IFormSchema>, rowId: string | number | null | undefined, transactionId: string): boolean;
}
