import ISchemaField from './ISchemaField';

export default interface ISchemaFieldsCollection {
	fields: Array<ISchemaField>;
	fieldByNameDictionary: { [key: string]: ISchemaField };

	get count(): number;
	clone(deep?: boolean): ISchemaFieldsCollection;
	addOrUpdateRange(fields: Array<ISchemaField>): void;
	addOrUpdate(field: ISchemaField): void;
	get(field: ISchemaField): ISchemaField;
	remove(field: ISchemaField): void;
	doesExist(field: ISchemaField): boolean;
}
