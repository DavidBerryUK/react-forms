import { enumFieldType } from "../../enums/EnumFieldType";
import Condition from "../../models/Condition";
import RuleEquals from "../../validationRules/simple/RuleEquals";
import RuleGroup from "../../models/RuleGroup";
import RuleMandatory from "../../validationRules/simple/RuleMandatory";
import SchemaField from "../../models/SchemaField";

describe('Test conditions automatically adds relationships', () => {
	test('Basic Constructor', () => {
		//
		// Setup simple cross validation.
		//  - if data type is string, then value field is mandatory
		//
		var fieldDataType = SchemaField.create('dataType', 'Data Type', enumFieldType.string);
		var fieldValue = SchemaField.create('value', 'Data Value', enumFieldType.string);
		const conditionIsDataTypeString = Condition.create(fieldDataType, new RuleEquals('string', true));
		fieldValue.appendRules(RuleGroup.createRuleAndCondition(new RuleMandatory(), conditionIsDataTypeString));

		//
		// Assert all is setup as expected
		//
		expect(fieldValue.relatedFields.count).toBe(1);
		expect(fieldDataType.relatedFields.count).toBe(1);

		expect(fieldValue.relatedFields.isJoinedTo(fieldDataType)).toBeTruthy();
		expect(fieldDataType.relatedFields.isJoinedTo(fieldValue)).toBeTruthy();
	});
});
