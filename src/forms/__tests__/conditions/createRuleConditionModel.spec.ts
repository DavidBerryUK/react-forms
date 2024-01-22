import AssertGroup from "../../assert/AssertGroup";
import AssertIsEqualTo from "../../assertions/AssertIsEqualTo";
import Condition from "../../models/Condition";
import SchemaFieldString from "../../schemaField/SchemaFieldString";

describe("Create Basic Condition Model", () => {
  test("Basic Constructor", () => {
    // these are tested elsewhere
    var fieldDataType = SchemaFieldString.create("dataType", "Data Type");
    var assertionIsString = AssertGroup.create(new AssertIsEqualTo("string", true));

    // act
    var condition = Condition.createWithAssertionGroup(fieldDataType, assertionIsString);

    // assert
    expect(condition.schemaField).toEqual(fieldDataType);
    expect(condition.assertionGroup).toEqual(assertionIsString);
  });
});
