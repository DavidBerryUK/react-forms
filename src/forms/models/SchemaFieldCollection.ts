import ISchemaField from "../interfaces/ISchemaField";
import ISchemaFieldsCollection from "../interfaces/ISchemaFieldCollection";
//
// Defines the dataset, which is a collection of schema fields
//
export default class SchemaFieldsCollection implements ISchemaFieldsCollection {
	fields: Array<ISchemaField>;
	fieldByNameDictionary: { [key: string]: ISchemaField };

	constructor() {
		this.fields = new Array<ISchemaField>();
		this.fieldByNameDictionary = {};
	}

	get count(): number {
		return this.fields.length;
	}

	addOrUpdateRange(fields: Array<ISchemaField>) {
		fields.forEach((item) => {
			this.addOrUpdate(item);
		});
	}

	addOrUpdate(field: ISchemaField) {
		if (this.doesExist(field)) {
			this.remove(field);
		}
		this.fields.push(field);
		this.fieldByNameDictionary[field.name] = field;
	}

	get(field: ISchemaField): ISchemaField {
		return this.fieldByNameDictionary[field.name];
	}

	remove(field: ISchemaField) {
		if (this.doesExist(field)) {
			this.fields = this.fields.filter((item) => item.name !== field.name);
			delete this.fieldByNameDictionary[field.name];
		}
	}

	doesExist(field: ISchemaField): boolean {
		return this.fieldByNameDictionary[field.name] !== undefined;
	}

	clone(deep?: boolean): ISchemaFieldsCollection {
		throw new Error('Method not implemented.');
	}
}
