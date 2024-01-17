import AssertIsEqualTo from "../../rules/AssertIsEqualTo";
import AssertIsMandatory from "../../rules/AssertIsMandatory";
import Condition from "../../models/Condition";
import enumFieldType from "../../enums/EnumFieldType";
import RuleGroup from "../../models/RuleGroup";
import SchemaField from "../../models/SchemaField";

describe("Test conditions automatically adds relationships", () => {
  test("Basic Constructor", () => {
    //
    // Setup simple cross validation.
    //  - if data type is string, then value field is mandatory
    //
    var fieldDataType = SchemaField.create("dataType", "Data Type", enumFieldType.string);
    var fieldValue = SchemaField.create("value", "Data Value", enumFieldType.string);
    const conditionIsDataTypeString = Condition.create(fieldDataType, new AssertIsEqualTo("string", true));
    fieldValue.appendRules(RuleGroup.createRuleAndCondition(new AssertIsMandatory(), conditionIsDataTypeString));

    //
    // Assert all is setup as expected
    //
    expect(fieldValue.relatedFields.count).toBe(1);
    expect(fieldDataType.relatedFields.count).toBe(1);

    expect(fieldValue.relatedFields.isJoinedTo(fieldDataType)).toBeTruthy();
    expect(fieldDataType.relatedFields.isJoinedTo(fieldValue)).toBeTruthy();
  });
});
