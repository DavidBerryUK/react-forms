import FieldBuilder from "../../syntaxSugar/FieldBuilder";
import FormInstance from "../../models/FormInstance";
import FormSchemaBase from "../../models/FormSchemaBase";
import IFormSchema from "../../interfaces/IFormSchema";

describe("Form Instances - validate", () => {
  test("Mandatory - populate fields - expect to pass", () => {
    //
    // arrange
    //
    var person = new FormInstance(new PersonSchema());
    const { forename, surname } = person.fieldSchema.fields;

    //
    // ACT
    //
    person.setValue(forename, "Derrick");
    person.setValue(surname, "Keen");
    person = person.validateAll();

    //
    // ASSERT
    //
    expect(person.isValid).toBeTruthy();
    expect(person.getField(forename)?.validation.isValid).toBeTruthy();
    expect(person.getField(surname)?.validation.isValid).toBeTruthy();
  });

  test("Mandatory - populate only some fields - expect to fail", () => {
    //
    // arrange
    //
    var person = new FormInstance(new PersonSchema());
    const { forename, surname } = person.fieldSchema.fields;

    //
    // ACT
    //
    person.setValue(forename, "Derrick");
    person.setValue(surname, "");
    person = person.validateAll();

    //
    // ASSERT
    //
    expect(person.isValid).toBeFalsy();

    expect(person.getField(forename)?.validation.isValid).toBeTruthy();
    expect(person.getField(surname)?.validation.isValid).toBeFalsy();
    expect(person.getField(surname)?.validation.validationMessages.countAll).toBe(1);
    expect(person.getField(surname)?.validation.validationMessages.asSummary).toBe("is mandatory");
  });

  test("Mandatory - populate no fields - expect to fail", () => {
    //
    // arrange
    //
    var person = new FormInstance(new PersonSchema());
    const { forename, surname } = person.fieldSchema.fields;

    //
    // ACT
    //
    person.setValue(forename, "");
    person.setValue(surname, "");
    person = person.validateAll();

    //
    // ASSERT
    //
    expect(person.isValid).toBeFalsy();
    expect(person.getField(forename)?.validation.isValid).toBeFalsy();
    expect(person.getField(surname)?.validation.isValid).toBeFalsy();

    expect(person.getField(forename)?.validation.validationMessages.asSummary).toBe("is mandatory");
    expect(person.getField(surname)?.validation.validationMessages.asSummary).toBe("is mandatory");
  });
});

export default class PersonSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    forename: FieldBuilder.caption("Forename").string().mandatory().build(),
    surname: FieldBuilder.caption("Surname").string().mandatory().build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}
