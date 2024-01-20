import AssertIsEqualTo from "../../assertions/AssertIsEqualTo";
import Condition from "../../models/Condition";
import Conditions from "../../models/Conditions";
import enumFieldType from "../../enums/EnumFieldType";
import SchemaFieldString from "../../schemaField/SchemaFieldString";

describe("Create Basic Condition Collection", () => {
  test("Basic Constructor", () => {
    // these are tested elsewhere
    var fieldDataType = SchemaFieldString.create("dataType", "Data Type", enumFieldType.string);

    const conditionIsString = Condition.create(fieldDataType, new AssertIsEqualTo("string", true));
    const conditionIsInteger = Condition.create(fieldDataType, new AssertIsEqualTo("integer", true));
    const conditionIsDecimal = Condition.create(fieldDataType, new AssertIsEqualTo("decimal", true));
    // act

    const collection = new Conditions([conditionIsString, conditionIsInteger, conditionIsDecimal]);
    // assert

    expect(collection.items.length).toEqual(3);
    expect(collection.items[0]).toEqual(conditionIsString);
    expect(collection.items[1]).toEqual(conditionIsInteger);
    expect(collection.items[2]).toEqual(conditionIsDecimal);
  });
});
