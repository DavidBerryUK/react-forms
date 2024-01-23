import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";
import FormInstance from "../../models/FormInstance";
import FormSchemaBase from "../../models/FormSchemaBase";
import IFormSchema from "../../interfaces/form/IFormSchema";

class TestSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    sampleValue: FieldBuilder.number().between(100, 200).build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}

describe("Schema number (Between)", () => {
  test("Assertion=Between, with values null - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { sampleValue } = form.fieldSchema.fields;
    form.setValue(sampleValue, null);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=Between, with values undefined - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { sampleValue } = form.fieldSchema.fields;
    form.setValue(sampleValue, undefined);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=Between, with values empty string - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { sampleValue } = form.fieldSchema.fields;
    form.setValue(sampleValue, "");

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=Between, with values spaces - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { sampleValue } = form.fieldSchema.fields;
    form.setValue(sampleValue, "     ");

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=Between, with values empty non number - expect to fail validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { sampleValue } = form.fieldSchema.fields;
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

  test("Assertion=Between(100,200), with values 100 - expect to pass validation", () => {
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

  test("Assertion=Between(100,200), with values 200 - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { sampleValue } = form.fieldSchema.fields;
    form.setValue(sampleValue, 200);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=Between(100,200), with values 99 - expect fail validation", () => {
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
    expect(form.getField(sampleValue)?.validation.validationMessage).toBe("must be between 100 and 200");
  });

  test("Assertion=Between(100,200), with values 201 - expect fail validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { sampleValue } = form.fieldSchema.fields;
    form.setValue(sampleValue, 201);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeFalsy();
    expect(form.getField(sampleValue)?.validation.isValid).toBeFalsy();
    expect(form.getField(sampleValue)?.validation.validationMessage).toBe("must be between 100 and 200");
  });
});
