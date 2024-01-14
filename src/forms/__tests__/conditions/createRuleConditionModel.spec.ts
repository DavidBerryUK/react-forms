import { enumFieldType } from "../../enums/EnumFieldType";
import Condition from "../../models/Condition";
import RuleEquals from "../../validationRules/simple/RuleEquals";
import RuleGroup from "../../models/RuleGroup";
import SchemaField from "../../models/SchemaField";

describe('Create Basic Condition Model', () => {
	test('Basic Constructor', () => {
		// these are tested elsewhere
		var fieldDataType = SchemaField.create('dataType', 'Data Type', enumFieldType.string);
		var ruleIsString = RuleGroup.create(new RuleEquals('string', true));

		// act
		var condition = Condition.createWithRuleGroup(fieldDataType, ruleIsString);

		// assert
		expect(condition.schemaField).toEqual(fieldDataType);
		expect(condition.rules).toEqual(ruleIsString);
	});
});
