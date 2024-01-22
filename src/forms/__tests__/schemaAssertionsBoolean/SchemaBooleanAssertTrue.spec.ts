import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";
import FormInstance from "../../models/FormInstance";
import FormSchemaBase from "../../models/FormSchemaBase";
import IFormSchema from "../../interfaces/form/IFormSchema";

class TestSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    flagMustBeTrue: FieldBuilder.boolean().true().build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}

describe("Schema boolean Schema Assertions (True)", () => {
  test("Assertion=True, with true, expect pass", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { flagMustBeTrue } = form.fieldSchema.fields;
    form.setValue(flagMustBeTrue, true);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=True, with false, expect fail", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { flagMustBeTrue } = form.fieldSchema.fields;
    form.setValue(flagMustBeTrue, false);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeFalsy();
    expect(form.getField(flagMustBeTrue)?.validation.isValid).toBeFalsy();
    expect(form.getField(flagMustBeTrue)?.validation.validationMessage).toBe("must be true");
  });
});
