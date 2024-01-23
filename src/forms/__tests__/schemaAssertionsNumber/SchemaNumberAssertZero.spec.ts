import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";
import FormInstance from "../../models/FormInstance";
import FormSchemaBase from "../../models/FormSchemaBase";
import IFormSchema from "../../interfaces/form/IFormSchema";

class TestSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    sampleValue: FieldBuilder.number().zero().build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}

describe("Schema number (Zero)", () => {
  test("Assertion=Zero, with values null - expect to pass validation", () => {
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

  test("Assertion=Zero, with values undefined - expect to pass validation", () => {
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

  test("Assertion=Zero, with values empty string - expect to pass validation", () => {
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

  test("Assertion=Zero, with values spaces - expect to pass validation", () => {
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

  test("Assertion=Zero, with values empty non number - expect to fail validation", () => {
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
    expect(form.getField(sampleValue)?.validation.validationMessage).toBe("must be zero");
  });

  test("Assertion=Zero, with values 0 - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { sampleValue } = form.fieldSchema.fields;
    form.setValue(sampleValue, 0);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=Zero, with values 50 - expect to fail validation", () => {
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
    expect(form.isValid).toBeFalsy();
    expect(form.getField(sampleValue)?.validation.isValid).toBeFalsy();
    expect(form.getField(sampleValue)?.validation.validationMessage).toBe("must be zero");
  });
});
