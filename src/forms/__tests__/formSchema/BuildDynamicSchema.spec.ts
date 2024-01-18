import FieldBuilder from "../../syntaxSugar/FieldBuilder";
import FormSchemaBase from "../../models/FormSchemaBase";

describe("Dynamic Built Schema", () => {
  test("fields are added to the schema", () => {
    //
    // ACT
    //
    const dietryRequirementsFlag = FieldBuilder.id("dietryRequirementsFlag").boolean("Any special dietary requirements?").build();
    const dietryRequirementsNotes = FieldBuilder.id("dietryRequirementsNotes").string("Dietry Notes").build();

    var schema = new FormSchemaBase();
    schema.addField(dietryRequirementsFlag);
    schema.addField(dietryRequirementsNotes);

    //
    // ASSERT
    //
    expect(schema.fieldCollection.fields.length).toBe(2);
    expect(schema.fieldCollection.doesExist(dietryRequirementsFlag)).toBeTruthy();
    expect(schema.fieldCollection.doesExist(dietryRequirementsNotes)).toBeTruthy();
  });

  test("fields must have an id", () => {
    //
    // Arrange
    //
    const forename = FieldBuilder.string().build();
    var schema = new FormSchemaBase();
    //
    // ACT & ASSERT
    //
    expect(() => {
      schema.addField(forename);
    }).toThrow("The field must have an id");

    expect(schema.fieldCollection.fields.length).toBe(0);
    expect(schema.fieldCollection.doesExist(forename)).toBeFalsy();
  });
});
