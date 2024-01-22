import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";
import FormInstance from "../../models/FormInstance";
import FormSchemaBase from "../../models/FormSchemaBase";
import IFormSchema from "../../interfaces/form/IFormSchema";

describe("Form Instances - conditional validate", () => {
  test("Mandatory - conditional 'nameRequired=false' and no name provied - expect pass", () => {
    //
    // arrange
    //
    var person = new FormInstance(new PersonSchema());
    const { nameRequiredFlag, name } = person.fieldSchema.fields;

    //
    // ACT
    //
    person.setValue(nameRequiredFlag, false);
    person.setValue(name, "");
    person = person.validateAll();

    //
    // ASSERT
    //
    expect(person.isValid).toBeTruthy();
    expect(person.getField(nameRequiredFlag)?.validation.isValid).toBeTruthy();
    expect(person.getField(name)?.validation.isValid).toBeTruthy();
  });

  test("Mandatory - conditional 'nameRequired=true' and no name provied - expect fail", () => {
    //
    // arrange
    //
    var person = new FormInstance(new PersonSchema());
    const { nameRequiredFlag, name } = person.fieldSchema.fields;

    //
    // ACT
    //
    person.setValue(nameRequiredFlag, true);
    person.setValue(name, "");
    person = person.validateAll();

    //
    // ASSERT
    //
    expect(person.isValid).toBeFalsy();
    expect(person.getField(nameRequiredFlag)?.validation.isValid).toBeTruthy();
    expect(person.getField(name)?.validation.isValid).toBeFalsy();
    expect(person.getField(name)?.validation.validationMessages.asSummary).toBe("is mandatory");
  });

  test("Mandatory - conditional 'nameRequired=true' and name is provied - expect pass", () => {
    //
    // arrange
    //
    var person = new FormInstance(new PersonSchema());
    const { nameRequiredFlag, name } = person.fieldSchema.fields;

    //
    // ACT
    //
    person.setValue(nameRequiredFlag, true);
    person.setValue(name, "Darren");
    person = person.validateAll();

    //
    // ASSERT
    //
    expect(person.isValid).toBeTruthy();
    expect(person.getField(nameRequiredFlag)?.validation.isValid).toBeTruthy();
    expect(person.getField(name)?.validation.isValid).toBeTruthy();
  });
});

export default class PersonSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    nameRequiredFlag: FieldBuilder.boolean().build(),
    name: FieldBuilder.string().build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);

    const { nameRequiredFlag, name } = this.fields;
    name.when(nameRequiredFlag.state().true()).mandatory();
  }
}
