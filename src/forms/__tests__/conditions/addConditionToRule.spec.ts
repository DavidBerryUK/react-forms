import AssertIsEqualTo from "../../assertions/AssertIsEqualTo";
import AssertIsMandatory from "../../assertions/AssertIsMandatory";
import AssertLengthMax from "../../assertions/AssertLengthMax";
import AssertLengthMin from "../../assertions/AssertLengthMin";
import AssertValueIsDecimal from "../../assertions/AssertValueIsDecimal";
import AssertValueIsInteger from "../../assertions/AssertValueIsInteger";
import Condition from "../../models/Condition";
import EnumFieldType from "../../enums/EnumFieldType";
import RuleGroup from "../../models/RuleGroup";
import SchemaFieldString from "../../schemaField/SchemaFieldString";

describe("Add Condition to Rule", () => {
  test("Basic Constructor", () => {
    // these are tested elsewhere
    var fieldDataType = SchemaFieldString.create("dataType", "Data Type");

    // Create conditions for validation
    //
    const conditionIsString = Condition.create(fieldDataType, new AssertIsEqualTo("string", true));
    const conditionIsInteger = Condition.create(fieldDataType, new AssertIsEqualTo("integer", true));
    const conditionIsDecimal = Condition.create(fieldDataType, new AssertIsEqualTo("decimal", true));

    //
    // Create validation rules, with dependance on conditions
    //
    var stringValidationRules = RuleGroup.createRulesAndCondition(
      [new AssertIsMandatory(), new AssertLengthMin(20), new AssertLengthMax(100)],
      conditionIsString
    );
    var integerValidationRules = RuleGroup.createRulesAndCondition([new AssertIsMandatory(), new AssertValueIsInteger()], conditionIsInteger);
    var decimalValidationRules = RuleGroup.createRulesAndCondition([new AssertIsMandatory(), new AssertValueIsDecimal()], conditionIsDecimal);

    //
    // assign all the validation and rules to the schema field
    //
    var fieldValue = SchemaFieldString.createWithRuleGroups("value", "Data Value", [
      stringValidationRules,
      integerValidationRules,
      decimalValidationRules,
    ]);

    //
    // Assert all is setup as expected
    //
    expect(fieldValue.ruleGroups.items.length).toBe(3);

    // asset string validation rule
    expect(fieldValue.ruleGroups.items[0].conditions.items.length).toBe(1);
    expect(fieldValue.ruleGroups.items[0].items.length).toBe(3);
    expect(fieldValue.ruleGroups.items[0].conditions.items[0]).toBe(conditionIsString);

    // assert integer validation rule
    expect(fieldValue.ruleGroups.items[1].conditions.items.length).toBe(1);
    expect(fieldValue.ruleGroups.items[1].items.length).toBe(2);
    expect(fieldValue.ruleGroups.items[1].conditions.items[0]).toBe(conditionIsInteger);

    // assert decimal validation rule
    expect(fieldValue.ruleGroups.items[2].conditions.items.length).toBe(1);
    expect(fieldValue.ruleGroups.items[2].items.length).toBe(2);
    expect(fieldValue.ruleGroups.items[2].conditions.items[0]).toBe(conditionIsDecimal);
  });
});
