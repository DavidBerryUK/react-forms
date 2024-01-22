import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";
import FormInstance from "../../models/FormInstance";
import FormSchemaBase from "../../models/FormSchemaBase";
import IFormSchema from "../../interfaces/form/IFormSchema";

class TestSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    flagMustBeFalse: FieldBuilder.boolean().false().build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}

describe("Schema boolean Schema Assertions (False)", () => {
  test("Assertion=False, with false, expect pass", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { flagMustBeFalse } = form.fieldSchema.fields;
    form.setValue(flagMustBeFalse, false);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=False, with true, expect fail", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { flagMustBeFalse } = form.fieldSchema.fields;
    form.setValue(flagMustBeFalse, true);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeFalsy();
    expect(form.getField(flagMustBeFalse)?.validation.isValid).toBeFalsy();
    expect(form.getField(flagMustBeFalse)?.validation.validationMessage).toBe("must be false");
  });
});
