import EnumFieldType from "../../enums/EnumFieldType";
import FormField from "../../models/FormField";
import SchemaFieldString from "../../schemaField/SchemaFieldString";

describe("Field Model Constructor", () => {
  test("constructor - empty rule collection", () => {
    // Assign / Act
    //
    const model = new FormField("Name-Text", null, SchemaFieldString.create("Test-Field", "Test-Text", EnumFieldType.string));

    // Assert
    //

    expect(model.id).toBe("Name-Text");
    expect(model.schemaField.caption).toBe("Test-Text");
    expect(model.value).toBe("");
    expect(model.schemaField.ruleGroups).not.toBeNull();
  });
});
