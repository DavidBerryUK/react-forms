import { enumFieldType } from "../../enums/EnumFieldType";
import Condition from "../../models/Condition";
import RuleDecimal from "../../validationRules/simple/RuleDecimal";
import RuleEquals from "../../validationRules/simple/RuleEquals";
import RuleGroup from "../../models/RuleGroup";
import RuleInteger from "../../validationRules/simple/RuleInteger";
import RuleMandatory from "../../validationRules/simple/RuleMandatory";
import RuleMaxLength from "../../validationRules/simple/RuleMaxLength";
import RuleMinLength from "../../validationRules/simple/RuleMinLength";
import SchemaField from "../../models/SchemaField";

describe('Add Condition to Rule', () => {
	test('Basic Constructor', () => {
		// these are tested elsewhere
		var fieldDataType = SchemaField.create('dataType', 'Data Type', enumFieldType.string);

		// Create conditions for validation
		//
		const conditionIsString = Condition.create(fieldDataType, new RuleEquals('string', true));
		const conditionIsInteger = Condition.create(fieldDataType, new RuleEquals('integer', true));
		const conditionIsDecimal = Condition.create(fieldDataType, new RuleEquals('decimal', true));

		//
		// Create validation rules, with dependance on conditions
		//
		var stringValidationRules = RuleGroup.createRulesAndCondition([new RuleMandatory(), new RuleMinLength(20), new RuleMaxLength(100)], conditionIsString);
		var integerValidationRules = RuleGroup.createRulesAndCondition([new RuleMandatory(), new RuleInteger()], conditionIsInteger);
		var decimalValidationRules = RuleGroup.createRulesAndCondition([new RuleMandatory(), new RuleDecimal()], conditionIsDecimal);

		//
		// assign all the validation and rules to the schema field
		//
		var fieldValue = SchemaField.createWithRuleGroups('value', 'Data Value', enumFieldType.string, [stringValidationRules, integerValidationRules, decimalValidationRules]);

		//
		// Assert all is setup as expected
		//
		expect(fieldValue.ruleGroups.groups.length).toBe(3);

		// asset string validation rule
		expect(fieldValue.ruleGroups.groups[0].conditions.items.length).toBe(1);
		expect(fieldValue.ruleGroups.groups[0].items.length).toBe(3);
		expect(fieldValue.ruleGroups.groups[0].conditions.items[0]).toBe(conditionIsString);

		// assert integer validation rule
		expect(fieldValue.ruleGroups.groups[1].conditions.items.length).toBe(1);
		expect(fieldValue.ruleGroups.groups[1].items.length).toBe(2);
		expect(fieldValue.ruleGroups.groups[1].conditions.items[0]).toBe(conditionIsInteger);

		// assert decimal validation rule
		expect(fieldValue.ruleGroups.groups[2].conditions.items.length).toBe(1);
		expect(fieldValue.ruleGroups.groups[2].items.length).toBe(2);
		expect(fieldValue.ruleGroups.groups[2].conditions.items[0]).toBe(conditionIsDecimal);
	});
});
