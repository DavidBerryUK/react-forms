import ISchemaFieldsCollection from "../schema/ISchemaFieldCollection";

export default interface IFormSchema {
  fieldCollection: ISchemaFieldsCollection;
  parseFields(fields: any): void;
}
