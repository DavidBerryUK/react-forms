import AssertIsEqualTo from "../../rules/AssertIsEqualTo";
import Condition from "../../models/Condition";
import EnumFieldType from "../../enums/EnumFieldType";
import RuleGroup from "../../models/RuleGroup";
import SchemaField from "../../models/SchemaField";

describe("Create Basic Condition Model", () => {
  test("Basic Constructor", () => {
    // these are tested elsewhere
    var fieldDataType = SchemaField.create("dataType", "Data Type", EnumFieldType.string);
    var ruleIsString = RuleGroup.create(new AssertIsEqualTo("string", true));

    // act
    var condition = Condition.createWithRuleGroup(fieldDataType, ruleIsString);

    // assert
    expect(condition.schemaField).toEqual(fieldDataType);
    expect(condition.rules).toEqual(ruleIsString);
  });
});
