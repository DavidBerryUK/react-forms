import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";
import FormInstance from "../../models/FormInstance";
import FormSchemaBase from "../../models/FormSchemaBase";
import IFormSchema from "../../interfaces/form/IFormSchema";

class TestSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    caseInsensitiveValue: FieldBuilder.string().notEqual("orange", true).build(),
    caseSensitiveValue: FieldBuilder.string().notEqual("orange").build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}

describe("Schema string (Equals)", () => {
  test("Assertion=equals, with values null - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { caseInsensitiveValue, caseSensitiveValue } = form.fieldSchema.fields;
    form.setValue(caseSensitiveValue, null);
    form.setValue(caseInsensitiveValue, null);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=equals, with values undefined - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { caseInsensitiveValue, caseSensitiveValue } = form.fieldSchema.fields;
    form.setValue(caseSensitiveValue, undefined);
    form.setValue(caseInsensitiveValue, undefined);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=equals, with values empty string - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { caseInsensitiveValue, caseSensitiveValue } = form.fieldSchema.fields;
    form.setValue(caseSensitiveValue, "");
    form.setValue(caseInsensitiveValue, "");

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=Equals orange === orange, - expect to pass fail", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { caseInsensitiveValue, caseSensitiveValue } = form.fieldSchema.fields;
    form.setValue(caseSensitiveValue, "orange");
    form.setValue(caseInsensitiveValue, "orange");

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeFalsy();
    expect(form.getField(caseSensitiveValue)?.validation.isValid).toBeFalsy();
    expect(form.getField(caseSensitiveValue)?.validation.validationMessage).toBe("must not be equal to 'orange'");

    expect(form.getField(caseInsensitiveValue)?.validation.isValid).toBeFalsy();
    expect(form.getField(caseInsensitiveValue)?.validation.validationMessage).toBe("must not be equal to 'orange'");
  });

  test("Assertion=Equals orange === ORANGE (case insensitive), - expect to fail validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { caseInsensitiveValue } = form.fieldSchema.fields;
    form.setValue(caseInsensitiveValue, "ORANGE");

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeFalsy();
    expect(form.getField(caseInsensitiveValue)?.validation.isValid).toBeFalsy();
    expect(form.getField(caseInsensitiveValue)?.validation.validationMessage).toBe("must not be equal to 'orange'");
  });

  test("Assertion=Equals orange === ORANGE (case sensitive), - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { caseSensitiveValue } = form.fieldSchema.fields;
    form.setValue(caseSensitiveValue, "ORANGE");

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
    expect(form.getField(caseSensitiveValue)?.validation.isValid).toBeTruthy();
  });

  test("Assertion=Equals orange === apple, - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { caseInsensitiveValue, caseSensitiveValue } = form.fieldSchema.fields;
    form.setValue(caseSensitiveValue, "apple");
    form.setValue(caseInsensitiveValue, "apple");

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
    expect(form.getField(caseInsensitiveValue)?.validation.isValid).toBeTruthy();
    expect(form.getField(caseSensitiveValue)?.validation.isValid).toBeTruthy();
  });
});
