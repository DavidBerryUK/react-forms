import AssertGroup from "../../assert/AssertGroup";
import AssertIsEqualTo from "../../assertions/AssertIsEqualTo";
import AssertIsMandatory from "../../assertions/AssertIsMandatory";
import Condition from "../../models/Condition";
import SchemaFieldString from "../../schemaField/SchemaFieldString";

describe("Test conditions automatically adds relationships", () => {
  test("Basic Constructor", () => {
    //
    // Setup simple cross validation.
    //  - if data type is string, then value field is mandatory
    //
    var fieldDataType = SchemaFieldString.create("dataType", "Data Type");
    var fieldValue = SchemaFieldString.create("value", "Data Value");
    const conditionIsDataTypeString = Condition.create(fieldDataType, new AssertIsEqualTo("string", true));
    fieldValue.appendAssertionGroup(AssertGroup.createAssertionAndCondition(new AssertIsMandatory(), conditionIsDataTypeString));

    //
    // Assert all is setup as expected
    //
    expect(fieldValue.relatedFields.count).toBe(1);
    expect(fieldDataType.relatedFields.count).toBe(1);

    expect(fieldValue.relatedFields.isJoinedTo(fieldDataType)).toBeTruthy();
    expect(fieldDataType.relatedFields.isJoinedTo(fieldValue)).toBeTruthy();
  });
});
