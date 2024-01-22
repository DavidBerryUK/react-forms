import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";
import FormInstance from "../../models/FormInstance";
import FormSchemaBase from "../../models/FormSchemaBase";
import IFormSchema from "../../interfaces/form/IFormSchema";

class TestSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    sampleValue: FieldBuilder.number().min(100).build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}

describe("Schema number (Equals)", () => {
  test("Assertion=Min of 100, with values 110 expect pass", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { sampleValue } = form.fieldSchema.fields;
    form.setValue(sampleValue, 110);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=Min of 100, with values 250 expect pass", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { sampleValue } = form.fieldSchema.fields;
    form.setValue(sampleValue, 250);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=Min of 100, with values 100 expect pass", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { sampleValue } = form.fieldSchema.fields;
    form.setValue(sampleValue, 100);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=Min of 100, with values 99 expect fail", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { sampleValue } = form.fieldSchema.fields;
    form.setValue(sampleValue, 99);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeFalsy();
    expect(form.getField(sampleValue)?.validation.isValid).toBeFalsy();
    expect(form.getField(sampleValue)?.validation.validationMessage).toBe("must be equal or greater than 100");
  });
});
