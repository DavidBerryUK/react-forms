import IFormSchema from '../interfaces/IFormSchema';
import SchemaField from './SchemaField';
import SchemaFieldCollection from './SchemaFieldCollection';

export default class FormSchemaBase implements IFormSchema {
	fieldCollection: SchemaFieldCollection;

	constructor() {
		this.fieldCollection = new SchemaFieldCollection();
	}

	parse(fields: any) {
		if (fields === undefined || fields === null || typeof fields !== 'object') {
			return;
		}

		const keys = Object.keys(fields);
		keys.forEach((key) => {
			const property = Reflect.get(fields, key);
			if (SchemaField.isSchemaField(property)) {
				this.fieldCollection.addOrUpdate(property);
			}
		});
	}
}
