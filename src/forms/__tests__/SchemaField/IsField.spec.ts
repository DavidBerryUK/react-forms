import EnumFieldType from "../../enums/EnumFieldType";
import SchemaField from "../../models/SchemaField";

describe("IsSchemaField", () => {
  test("pass - valid field", () => {
    // ACT
    const field = SchemaField.create("field", "Field", EnumFieldType.string);

    // ASSERT
    expect(SchemaField.isSchemaField(field)).toBeTruthy();
  });

  test("fail - undefined", () => {
    // ASSERT
    expect(SchemaField.isSchemaField(undefined)).toBeFalsy();
  });

  test("fail - null", () => {
    // ASSERT
    expect(SchemaField.isSchemaField(null)).toBeFalsy();
  });

  test("fail - number", () => {
    // ASSERT
    expect(SchemaField.isSchemaField(123)).toBeFalsy();
  });

  test("fail - string", () => {
    // ASSERT
    expect(SchemaField.isSchemaField("hello")).toBeFalsy();
  });

  test("fail - simple object", () => {
    // Arrange

    var obj = {
      a: "10",
    };

    // ASSERT
    expect(SchemaField.isSchemaField(obj)).toBeFalsy();
  });

  test("fail - object with similar structure", () => {
    // Arrange

    var obj = {
      name: "field",
      caption: "field",
    };

    // ASSERT
    expect(SchemaField.isSchemaField(obj)).toBeFalsy();
  });
});
