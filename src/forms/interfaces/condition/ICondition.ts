//
// class provides option of making assertion evaluation for a field
//  dependent upon specific conditions being met.

import IFormInstance from "../form/IFormInstance";
import IFormSchema from "../form/IFormSchema";
import IAssert from "../assertions/IAssert";
import IAssertGroup from "../assertions/IAssertGroup";
import ISchemaField from "../schemaField/ISchemaField";

//
export default interface ICondition {
  readonly schemaField: ISchemaField;
  readonly assertionGroup: IAssertGroup;
  addAssert(assert: IAssert): void;
  doesConditionPass(form: IFormInstance<IFormSchema>, rowId: string | number | null | undefined, transactionId: string): boolean;
}
