import ISchemaFieldsCollection from "./ISchemaFieldCollection";

export default interface IFormSchema {
	fieldCollection: ISchemaFieldsCollection;
	parse(fields: any): void;
}
