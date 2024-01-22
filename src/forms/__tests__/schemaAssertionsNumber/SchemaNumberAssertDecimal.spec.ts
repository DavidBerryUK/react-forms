import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";
import FormInstance from "../../models/FormInstance";
import FormSchemaBase from "../../models/FormSchemaBase";
import IFormSchema from "../../interfaces/form/IFormSchema";

class TestSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    decimalValue: FieldBuilder.number().decimal().build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}

describe("Schema number (Decimal)", () => {
  test("Assertion=Integer, with value 10 expect pass", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { decimalValue: sampleValue } = form.fieldSchema.fields;
    form.setValue(sampleValue, 10);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=Integer, with value -10.25 expect pass", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { decimalValue: sampleValue } = form.fieldSchema.fields;
    form.setValue(sampleValue, -10);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=Integer, with value ABC expect fail", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { decimalValue: sampleValue } = form.fieldSchema.fields;
    form.setValue(sampleValue, "ABC");

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeFalsy();
    expect(form.getField(sampleValue)?.validation.isValid).toBeFalsy();
    expect(form.getField(sampleValue)?.validation.validationMessage).toBe("must be a valid number");
  });
});
