import { enumFieldType } from "../../enums/EnumFieldType";
import Condition from "../../models/Condition";
import RuleEquals from "../../validationRules/simple/RuleEquals";
import SchemaField from "../../models/SchemaField";
import Conditions from "../../models/Conditions";

describe('Create Basic Condition Collection', () => {
	test('Basic Constructor', () => {
		// these are tested elsewhere
		var fieldDataType = SchemaField.create('dataType', 'Data Type', enumFieldType.string);

		const conditionIsString = Condition.create(fieldDataType, new RuleEquals('string', true));
		const conditionIsInteger = Condition.create(fieldDataType, new RuleEquals('integer', true));
		const conditionIsDecimal = Condition.create(fieldDataType, new RuleEquals('decimal', true));
		// act

		const collection = new Conditions([conditionIsString, conditionIsInteger, conditionIsDecimal]);
		// assert

		expect(collection.items.length).toEqual(3);
		expect(collection.items[0]).toEqual(conditionIsString);
		expect(collection.items[1]).toEqual(conditionIsInteger);
		expect(collection.items[2]).toEqual(conditionIsDecimal);
	});
});
