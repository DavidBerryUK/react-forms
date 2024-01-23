import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";
import FormInstance from "../../models/FormInstance";
import FormSchemaBase from "../../models/FormSchemaBase";
import IFormSchema from "../../interfaces/form/IFormSchema";

class TestSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    mandatoryValue: FieldBuilder.string().mandatory().build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}

describe("Schema string (Mandatory)", () => {
  test("Assertion - populated - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { mandatoryValue } = form.fieldSchema.fields;
    form.setValue(mandatoryValue, 10);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion - default - pass - not that fields exist until they as set with some value, even if it is null / undefiend", () => {
    //
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { mandatoryValue } = form.fieldSchema.fields;

    //
    // Act
    //
    form = form.validateAll();

    //
    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion - null - expect to fail validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { mandatoryValue } = form.fieldSchema.fields;
    form.setValue(mandatoryValue, null);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeFalsy();
    expect(form.getField(mandatoryValue)?.validation.isValid).toBeFalsy();
    expect(form.getField(mandatoryValue)?.validation.validationMessage).toBe("is mandatory");
  });

  test("Assertion - null - expect to fail validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { mandatoryValue } = form.fieldSchema.fields;
    form.setValue(mandatoryValue, undefined);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeFalsy();
    expect(form.getField(mandatoryValue)?.validation.isValid).toBeFalsy();
    expect(form.getField(mandatoryValue)?.validation.validationMessage).toBe("is mandatory");
  });
});
