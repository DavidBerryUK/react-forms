import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";
import FormInstance from "../../models/FormInstance";
import FormSchemaBase from "../../models/FormSchemaBase";
import IFormSchema from "../../interfaces/form/IFormSchema";

class TestSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    sampleValue: FieldBuilder.number().notEqual(10).build(),
    sampleValueTolerance: FieldBuilder.number().notEqual(10, 0.25).build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}

describe("Schema number (Not Equals)", () => {
  test("Assertion=NotEquals 10 === 20, - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { sampleValue } = form.fieldSchema.fields;
    form.setValue(sampleValue, 20);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=NotEquals 10 === 10, - expect to fail validation", () => {
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
    expect(form.isValid).toBeFalsy();
    expect(form.getField(sampleValue)?.validation.isValid).toBeFalsy();
    expect(form.getField(sampleValue)?.validation.validationMessage).toBe("must not be equal to 10");
  });

  test("Assertion=NotEquals 10 === 10.3 with tolerance of (0.25), - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { sampleValueTolerance } = form.fieldSchema.fields;
    form.setValue(sampleValueTolerance, 10.5);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=NotEquals 10 === 10.2 with tolerance of (0.25), - expect to fail validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { sampleValueTolerance } = form.fieldSchema.fields;
    form.setValue(sampleValueTolerance, 10.2);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeFalsy();
    expect(form.getField(sampleValueTolerance)?.validation.isValid).toBeFalsy();
    expect(form.getField(sampleValueTolerance)?.validation.validationMessage).toBe("must not be equal to 10");
  });
});
