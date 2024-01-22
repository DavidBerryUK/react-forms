import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";
import FormInstance from "../../models/FormInstance";
import FormSchemaBase from "../../models/FormSchemaBase";
import IFormSchema from "../../interfaces/form/IFormSchema";

class TestSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    SampleFlagTrue: FieldBuilder.boolean().equals(true).build(),
    SampleFlagFalse: FieldBuilder.boolean().equals(false).build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}

describe("Schema boolean Schema Assertions (Equals)", () => {
  test("Assertion=Equals, with true with true, expect pass", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { SampleFlagTrue } = form.fieldSchema.fields;
    form.setValue(SampleFlagTrue, true);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=Equals, with true with false, expect fail", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { SampleFlagTrue } = form.fieldSchema.fields;
    form.setValue(SampleFlagTrue, false);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeFalsy();
    expect(form.getField(SampleFlagTrue)?.validation.isValid).toBeFalsy();
    expect(form.getField(SampleFlagTrue)?.validation.validationMessage).toBe("must be equal to true");
  });

  test("Assertion=Equals, with false with false, expect pass", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { SampleFlagFalse } = form.fieldSchema.fields;
    form.setValue(SampleFlagFalse, false);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeTruthy();
  });

  test("Assertion=Equals, with false with true, expect fail", () => {
    // Assign
    //
    let form = new FormInstance(new TestSchema());
    const { SampleFlagFalse } = form.fieldSchema.fields;
    form.setValue(SampleFlagFalse, true);

    // Act
    //
    form = form.validateAll();

    // Assert
    //
    expect(form.isValid).toBeFalsy();
    expect(form.getField(SampleFlagFalse)?.validation.isValid).toBeFalsy();
    expect(form.getField(SampleFlagFalse)?.validation.validationMessage).toBe("must be equal to false");
  });
});
