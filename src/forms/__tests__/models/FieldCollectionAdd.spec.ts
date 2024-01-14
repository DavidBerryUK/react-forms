import { enumFieldType } from "../../enums/EnumFieldType";
import FormFieldCollection from "../../models/FormFieldCollection";
import SchemaField from "../../models/SchemaField";

describe('Field Collection Add', () => {
	test('Add Single New Field', () => {
		// Assign
		//
		const collection = new FormFieldCollection();
		const fieldTitle1 = SchemaField.create('Name#1', 'Name One', enumFieldType.string);

		// Act
		//
		const model = collection.addOrUpdate(fieldTitle1, null);

		// Assert
		//
		expect(collection.fieldArray.length).toBe(1);
		expect(collection.fieldArray[0]).toBe(model);
		expect(collection.fieldByKeyDictionary['Name#1']).toBe(model);

		expect(model.name).toBe('Name#1');
		expect(model.schemaField.caption).toBe('Name One');
		expect(model.value).toBe('');
	});

	test('Add Multiple New Field', () => {
		// Assign
		//
		const collection = new FormFieldCollection();

		const fieldTitle1 = SchemaField.create('Name#1', 'Name One', enumFieldType.string);
		const fieldTitle2 = SchemaField.create('Name#2', 'Name Two', enumFieldType.string);
		const fieldTitle3 = SchemaField.create('Name#3', 'Name Three', enumFieldType.string);

		// Act
		//
		const model1 = collection.addOrUpdate(fieldTitle1, null);
		const model2 = collection.addOrUpdate(fieldTitle2, null);
		const model3 = collection.addOrUpdate(fieldTitle3, null);

		// Assert
		//
		expect(collection.fieldArray.length).toBe(3);
		expect(collection.fieldArray[0]).toBe(model1);
		expect(collection.fieldArray[1]).toBe(model2);
		expect(collection.fieldArray[2]).toBe(model3);

		expect(collection.fieldByKeyDictionary['Name#1']).toBe(model1);
		expect(collection.fieldByKeyDictionary['Name#2']).toBe(model2);
		expect(collection.fieldByKeyDictionary['Name#3']).toBe(model3);

		expect(model1.name).toBe('Name#1');
		expect(model1.schemaField.caption).toBe('Name One');
		expect(model1.value).toBe('');

		expect(model2.name).toBe('Name#2');
		expect(model2.schemaField.caption).toBe('Name Two');
		expect(model2.value).toBe('');

		expect(model3.name).toBe('Name#3');
		expect(model3.schemaField.caption).toBe('Name Three');
		expect(model3.value).toBe('');
	});
});
