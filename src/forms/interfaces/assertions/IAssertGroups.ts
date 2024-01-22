import IAssertGroup from "./IAssertGroup";
import IFormField from "../form/IFormField";
import IFormInstance from "../form/IFormInstance";
import IFormSchema from "../form/IFormSchema";
import ISchemaField from "../schemaField/ISchemaField";

export default interface IAssertGroups {
  items: Array<IAssertGroup>;
  count(): number;
  add(assertions: IAssertGroup): void;
  clone(deep?: boolean): IAssertGroups;
  evaluateAssertions(form: IFormInstance<IFormSchema>, field: IFormField, transactionId?: string): void;
  setSchemaField(schemaField: ISchemaField): void;
}
