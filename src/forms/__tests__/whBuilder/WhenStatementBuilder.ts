import IFormSchema from "../../interfaces/IFormSchema";
import FormSchemaBase from "../../models/FormSchemaBase";
import FieldBuilder from "../../syntaxSugar/FieldBuilder";

describe("Schema Builder - test conditional builder", () => {
  test("fields are added to the schema", () => {
    //
    // ACT
    //
    var personSchema = new PersonSchema();

    //
    // ASSERT
    //
    expect(personSchema.fields.supplyNameFlag.relatedFields.count).toBe(1);
    expect(personSchema.fields.fullName.relatedFields.count).toBe(1);
  });
});

//
// Test schema
//
class PersonSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    supplyNameFlag: FieldBuilder.boolean().build(),
    fullName: FieldBuilder.string().build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);

    // when supply name flag is on, the the full name is mandatory
    this.fields.fullName.when(this.fields.supplyNameFlag.state().ifIsTrue()).mandatory();
  }
}
