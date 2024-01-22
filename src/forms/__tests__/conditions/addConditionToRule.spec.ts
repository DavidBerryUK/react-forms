import AssertGroup from "../../assert/AssertGroup";
import AssertIsEqualTo from "../../assertions/AssertIsEqualTo";
import AssertIsMandatory from "../../assertions/AssertIsMandatory";
import AssertLengthMax from "../../assertions/AssertLengthMax";
import AssertLengthMin from "../../assertions/AssertLengthMin";
import AssertValueIsDecimal from "../../assertions/AssertValueIsDecimal";
import AssertValueIsInteger from "../../assertions/AssertValueIsInteger";
import Condition from "../../models/Condition";
import SchemaFieldString from "../../schemaField/SchemaFieldString";

describe("Add Condition to Assertion", () => {
  test("Basic Constructor", () => {
    // these are tested elsewhere
    var fieldDataType = SchemaFieldString.create("dataType", "Data Type");

    // Create conditions for validation
    //
    const conditionIsString = Condition.create(fieldDataType, new AssertIsEqualTo("string", true));
    const conditionIsInteger = Condition.create(fieldDataType, new AssertIsEqualTo("integer", true));
    const conditionIsDecimal = Condition.create(fieldDataType, new AssertIsEqualTo("decimal", true));

    //
    // Create validation assertions, with dependance on conditions
    //
    var stringValidationAssertions = AssertGroup.createAssertionsAndCondition(
      [new AssertIsMandatory(), new AssertLengthMin(20), new AssertLengthMax(100)],
      conditionIsString
    );
    var integerValidationAssertions = AssertGroup.createAssertionsAndCondition(
      [new AssertIsMandatory(), new AssertValueIsInteger()],
      conditionIsInteger
    );
    var decimalValidationAssertions = AssertGroup.createAssertionsAndCondition(
      [new AssertIsMandatory(), new AssertValueIsDecimal()],
      conditionIsDecimal
    );

    //
    // assign all the validation and assertions to the schema field
    //
    var fieldValue = SchemaFieldString.createWithAssertionGroups("value", "Data Value", [
      stringValidationAssertions,
      integerValidationAssertions,
      decimalValidationAssertions,
    ]);

    //
    // Assert all is setup as expected
    //
    expect(fieldValue.assertGroups.items.length).toBe(3);

    // asset string validation assertion
    expect(fieldValue.assertGroups.items[0].conditions.items.length).toBe(1);
    expect(fieldValue.assertGroups.items[0].items.length).toBe(3);
    expect(fieldValue.assertGroups.items[0].conditions.items[0]).toBe(conditionIsString);

    // assert integer validation assertion
    expect(fieldValue.assertGroups.items[1].conditions.items.length).toBe(1);
    expect(fieldValue.assertGroups.items[1].items.length).toBe(2);
    expect(fieldValue.assertGroups.items[1].conditions.items[0]).toBe(conditionIsInteger);

    // assert decimal validation assertion
    expect(fieldValue.assertGroups.items[2].conditions.items.length).toBe(1);
    expect(fieldValue.assertGroups.items[2].items.length).toBe(2);
    expect(fieldValue.assertGroups.items[2].conditions.items[0]).toBe(conditionIsDecimal);
  });
});
