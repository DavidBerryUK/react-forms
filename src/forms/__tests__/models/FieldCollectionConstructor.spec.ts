import FormFieldCollection from "../../models/FormFieldCollection";

describe('Field Collection Constructor', () => {
	test('constructor', () => {
		// Assign / Act
		//
		const collection = new FormFieldCollection();

		// Assert
		//

		expect(collection.fieldArray).not.toBeNull();
		expect(collection.fieldArray.length).toBe(0);
		expect(collection.fieldByKeyDictionary).not.toBeNull();
	});
});
