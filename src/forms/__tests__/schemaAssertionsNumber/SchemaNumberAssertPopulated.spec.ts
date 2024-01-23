import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";
import FormInstance from "../../models/FormInstance";
import FormSchemaBase from "../../models/FormSchemaBase";
import IFormSchema from "../../interfaces/form/IFormSchema";

class TestSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    populatedValue: FieldBuilder.number().populated().build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}

describe("Schema number (Populated)", () => {
  test("Assertion - populated - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { populatedValue } = form.fieldSchema.fields;
    form.setValue(populatedValue, 10);

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
    const { populatedValue } = form.fieldSchema.fields;

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
    const { populatedValue } = form.fieldSchema.fields;
    form.setValue(populatedValue, null);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeFalsy();
    expect(form.getField(populatedValue)?.validation.isValid).toBeFalsy();
    expect(form.getField(populatedValue)?.validation.validationMessage).toBe("must be populated");
  });

  test("Assertion - null - undefined - expect to fail validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { populatedValue } = form.fieldSchema.fields;
    form.setValue(populatedValue, undefined);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeFalsy();
    expect(form.getField(populatedValue)?.validation.isValid).toBeFalsy();
    expect(form.getField(populatedValue)?.validation.validationMessage).toBe("must be populated");
  });
});
