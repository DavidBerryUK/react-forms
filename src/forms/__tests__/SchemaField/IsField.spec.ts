import EnumFieldType from "../../enums/EnumFieldType";
import SchemaFieldString from "../../schemaField/SchemaFieldString";

describe("IsSchemaField", () => {
  test("pass - valid field", () => {
    // ACT
    const field = SchemaFieldString.create("field", "Field", EnumFieldType.string);

    // ASSERT
    expect(SchemaFieldString.isSchemaField(field)).toBeTruthy();
  });

  test("fail - undefined", () => {
    // ASSERT
    expect(SchemaFieldString.isSchemaField(undefined)).toBeFalsy();
  });

  test("fail - null", () => {
    // ASSERT
    expect(SchemaFieldString.isSchemaField(null)).toBeFalsy();
  });

  test("fail - number", () => {
    // ASSERT
    expect(SchemaFieldString.isSchemaField(123)).toBeFalsy();
  });

  test("fail - string", () => {
    // ASSERT
    expect(SchemaFieldString.isSchemaField("hello")).toBeFalsy();
  });

  test("fail - simple object", () => {
    // Arrange

    var obj = {
      a: "10",
    };

    // ASSERT
    expect(SchemaFieldString.isSchemaField(obj)).toBeFalsy();
  });

  test("fail - object with similar structure", () => {
    // Arrange

    var obj = {
      name: "field",
      caption: "field",
    };

    // ASSERT
    expect(SchemaFieldString.isSchemaField(obj)).toBeFalsy();
  });
});
