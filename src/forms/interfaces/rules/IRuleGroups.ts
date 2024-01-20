import IFormField from "../form/IFormField";
import IFormInstance from "../form/IFormInstance";
import IFormSchema from "../form/IFormSchema";
import IRuleGroup from "./IRuleGroup";
import ISchemaField from "../schemaField/ISchemaField";

export default interface IRuleGroups {
  items: Array<IRuleGroup>;
  count(): number;
  add(rules: IRuleGroup): void;
  clone(deep?: boolean): IRuleGroups;
  evaluateRules(form: IFormInstance<IFormSchema>, field: IFormField, transactionId?: string): void;
  setSchemaField(schemaField: ISchemaField): void;
}
