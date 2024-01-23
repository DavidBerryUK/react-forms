import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";
import FormInstance from "../../models/FormInstance";
import FormSchemaBase from "../../models/FormSchemaBase";
import IFormSchema from "../../interfaces/form/IFormSchema";

class TestSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    emptyValue: FieldBuilder.string().empty().build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}

describe("Schema string (Empty)", () => {
  test("Assertion - populated - expect to fail validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { emptyValue } = form.fieldSchema.fields;
    form.setValue(emptyValue, 10);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeFalsy();
    expect(form.getField(emptyValue)?.validation.isValid).toBeFalsy();
    expect(form.getField(emptyValue)?.validation.validationMessage).toBe("must be empty");
  });

  test("Assertion - default - pass - not that fields exist until they as set with some value, even if it is null / undefiend", () => {
    //
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { emptyValue } = form.fieldSchema.fields;

    //
    // Act
    //
    form = form.validateAll();

    //
    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion - null - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { emptyValue } = form.fieldSchema.fields;
    form.setValue(emptyValue, null);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion - undefined - expect to pass validation", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { emptyValue } = form.fieldSchema.fields;
    form.setValue(emptyValue, undefined);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });
});
