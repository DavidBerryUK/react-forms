import ISchemaFieldsCollection from "./ISchemaFieldCollection";

export default interface IFormSchema {
  fieldCollection: ISchemaFieldsCollection;
  parseFields(fields: any): void;
}
