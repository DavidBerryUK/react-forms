import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";
import FormInstance from "../../models/FormInstance";
import FormSchemaBase from "../../models/FormSchemaBase";
import IFormSchema from "../../interfaces/form/IFormSchema";

class TestSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    sampleValue: FieldBuilder.number().max(100).build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}

describe("Schema number (Equals)", () => {
  test("Assertion=Max of 100, with values 10 - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { sampleValue } = form.fieldSchema.fields;
    form.setValue(sampleValue, 10);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=Max of 100, with values 50 - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { sampleValue } = form.fieldSchema.fields;
    form.setValue(sampleValue, 50);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=Max of 100, with values 100 - expect to pass validation", () => {
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

  test("Assertion=Max of 100, with values 101 - expect fail validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { sampleValue } = form.fieldSchema.fields;
    form.setValue(sampleValue, 101);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeFalsy();
    expect(form.getField(sampleValue)?.validation.isValid).toBeFalsy();
    expect(form.getField(sampleValue)?.validation.validationMessage).toBe("must be equal or less than 100");
  });
});
