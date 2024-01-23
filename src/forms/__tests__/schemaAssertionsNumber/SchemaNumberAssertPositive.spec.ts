import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";
import FormInstance from "../../models/FormInstance";
import FormSchemaBase from "../../models/FormSchemaBase";
import IFormSchema from "../../interfaces/form/IFormSchema";

class TestSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    allowZeroValue: FieldBuilder.number().positive(true).build(),
    excludeZeroValue: FieldBuilder.number().positive(false).build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}

describe("Schema number (Positive)", () => {
  test("Assertion=Positive, with values null - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { excludeZeroValue } = form.fieldSchema.fields;
    form.setValue(excludeZeroValue, null);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=Positive, with values undefined - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { excludeZeroValue } = form.fieldSchema.fields;
    form.setValue(excludeZeroValue, undefined);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=Positive, with values empty string - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { excludeZeroValue } = form.fieldSchema.fields;
    form.setValue(excludeZeroValue, "");

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=Positive, with values spaces - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { excludeZeroValue } = form.fieldSchema.fields;
    form.setValue(excludeZeroValue, "     ");

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=Positive, with values empty non number - expect to fail validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { excludeZeroValue } = form.fieldSchema.fields;
    form.setValue(excludeZeroValue, "ABC");

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeFalsy();
    expect(form.getField(excludeZeroValue)?.validation.isValid).toBeFalsy();
    expect(form.getField(excludeZeroValue)?.validation.validationMessage).toBe("must be positive");
  });

  test("Assertion=Positive, with values 0 (allow zeros) - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { allowZeroValue } = form.fieldSchema.fields;
    form.setValue(allowZeroValue, 0);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=Positive, with values 0 (exclude zeros) - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { excludeZeroValue } = form.fieldSchema.fields;
    form.setValue(excludeZeroValue, 0);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeFalsy();
    expect(form.getField(excludeZeroValue)?.validation.isValid).toBeFalsy();
    expect(form.getField(excludeZeroValue)?.validation.validationMessage).toBe("must be positive");
  });

  test("Assertion=Positive, with values 50 (exclude zeros) - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { excludeZeroValue } = form.fieldSchema.fields;
    form.setValue(excludeZeroValue, 50);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=Positive, with values 50 (include zeros) - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { allowZeroValue } = form.fieldSchema.fields;
    form.setValue(allowZeroValue, 50);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=Positive, with values -1 (allow zeros) - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { allowZeroValue } = form.fieldSchema.fields;
    form.setValue(allowZeroValue, -1);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeFalsy();
    expect(form.getField(allowZeroValue)?.validation.isValid).toBeFalsy();
    expect(form.getField(allowZeroValue)?.validation.validationMessage).toBe("must be positive or zero");
  });

  test("Assertion=Positive, with values -1 (exclude zeros) - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { excludeZeroValue } = form.fieldSchema.fields;
    form.setValue(excludeZeroValue, -1);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeFalsy();
    expect(form.getField(excludeZeroValue)?.validation.isValid).toBeFalsy();
    expect(form.getField(excludeZeroValue)?.validation.validationMessage).toBe("must be positive");
  });
});
