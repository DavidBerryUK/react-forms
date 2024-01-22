import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";
import FormSchemaBase from "../../models/FormSchemaBase";
import IFormSchema from "../../interfaces/form/IFormSchema";

describe("Built Schema - test that field id names are auto created by the schema processing", () => {
  test("fields are added to the schema", () => {
    //
    // ACT
    //
    var personSchema = new PersonSchema();

    //
    // ASSERT
    //
    expect(personSchema.fieldCollection.fields.length).toBe(2);

    // test fields have the correct auto extracted name
    expect(personSchema.fieldCollection.fields[0].id).toBe("forename");
    expect(personSchema.fieldCollection.fields[1].id).toBe("surname");

    // test fields added to collection
    expect(personSchema.fieldCollection.doesExist(personSchema.fields.forename)).toBeTruthy();
    expect(personSchema.fieldCollection.doesExist(personSchema.fields.surname)).toBeTruthy();
  });
});

//
// Test schema
//
class PersonSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    forename: FieldBuilder.string("Forename").mandatory().maxLength(200).build(),
    surname: FieldBuilder.string("Surname").mandatory().maxLength(200).build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}
