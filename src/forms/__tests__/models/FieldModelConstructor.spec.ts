import EnumFieldType from "../../enums/EnumFieldType";
import FormField from "../../models/FormField";
import SchemaField from "../../models/SchemaField";

describe("Field Model Constructor", () => {
  test("constructor - empty rule collection", () => {
    // Assign / Act
    //
    const model = new FormField("Name-Text", null, SchemaField.create("Test-Field", "Test-Text", EnumFieldType.string));

    // Assert
    //

    expect(model.name).toBe("Name-Text");
    expect(model.schemaField.caption).toBe("Test-Text");
    expect(model.value).toBe("");
    expect(model.schemaField.ruleGroups).not.toBeNull();
  });
});
