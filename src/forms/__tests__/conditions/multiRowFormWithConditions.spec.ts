import ConditionalFormSchema from "../testSupport/ConditionalFormSchema";
import FormInstance from "../../models/FormInstance";

describe("Multi Row form with conditions", () => {
  test("basic setup, all valid", () => {
    const schema = new ConditionalFormSchema();
    var form = new FormInstance(schema);

    //
    // set data type to string
    //
    form.setValue(schema.fields.dataType, "string", "r1");
    form.setValue(schema.fields.value, "123456789012345678901234567890", "r1");

    form.setValue(schema.fields.dataType, "string", "r2");
    form.setValue(schema.fields.value, "123456789012345678901234567890", "r2");

    form.setValue(schema.fields.dataType, "string", "r3");
    form.setValue(schema.fields.value, "123456789012345678901234567890", "r3");

    form.setValue(schema.fields.dataType, "string", "r4");
    form.setValue(schema.fields.value, "123456789012345678901234567890", "r4");

    form.setValue(schema.fields.dataType, "string", "r5");
    form.setValue(schema.fields.value, "123456789012345678901234567890", "r5");

    form = form.validateAll();

    // Assert

    // form validation
    expect(form.isValid).toBeTruthy();

    // row validation

    const row1 = form.getField(schema.fields.value, "r1");
    const row2 = form.getField(schema.fields.value, "r2");
    const row3 = form.getField(schema.fields.value, "r3");
    const row4 = form.getField(schema.fields.value, "r4");
    const row5 = form.getField(schema.fields.value, "r5");

    expect(row1?.validation.isValid).toBeTruthy();
    expect(row2?.validation.isValid).toBeTruthy();
    expect(row3?.validation.isValid).toBeTruthy();
    expect(row4?.validation.isValid).toBeTruthy();
    expect(row5?.validation.isValid).toBeTruthy();
  });

  test("single row invalid", () => {
    const schema = new ConditionalFormSchema();
    var form = new FormInstance(schema);

    //
    // set data type to string
    //
    form.setValue(schema.fields.dataType, "string", "r1");
    form.setValue(schema.fields.value, "123456789012345678901234567890", "r1");

    form.setValue(schema.fields.dataType, "string", "r2");
    form.setValue(schema.fields.value, "123456789012345678901234567890", "r2");

    form.setValue(schema.fields.dataType, "string", "r3");
    form.setValue(schema.fields.value, "", "r3");

    form.setValue(schema.fields.dataType, "string", "r4");
    form.setValue(schema.fields.value, "123456789012345678901234567890", "r4");

    form.setValue(schema.fields.dataType, "string", "r5");
    form.setValue(schema.fields.value, "123456789012345678901234567890", "r5");

    form = form.validateAll();

    // Assert

    // form validation
    expect(form.isValid).toBeFalsy();

    // row validation

    const row1 = form.getField(schema.fields.value, "r1");
    const row2 = form.getField(schema.fields.value, "r2");
    const row3 = form.getField(schema.fields.value, "r3");
    const row4 = form.getField(schema.fields.value, "r4");
    const row5 = form.getField(schema.fields.value, "r5");

    expect(row1?.validation.isValid).toBeTruthy();
    expect(row2?.validation.isValid).toBeTruthy();
    expect(row3?.validation.isValid).toBeFalsy();
    expect(row3?.validation.validationMessage).toEqual("Data Value is mandatory");
    expect(row4?.validation.isValid).toBeTruthy();
    expect(row5?.validation.isValid).toBeTruthy();
  });

  test("multiple string rows with different error messages", () => {
    const schema = new ConditionalFormSchema();
    var form = new FormInstance(schema);

    //
    // set data type to string
    //
    form.setValue(schema.fields.dataType, "string", "r1");
    form.setValue(schema.fields.value, "12345", "r1");

    form.setValue(schema.fields.dataType, "string", "r2");
    form.setValue(schema.fields.value, "123456789012345678901234567890", "r2");

    form.setValue(schema.fields.dataType, "string", "r3");
    form.setValue(schema.fields.value, "", "r3");

    form.setValue(schema.fields.dataType, "string", "r4");
    form.setValue(schema.fields.value, "123456789012345678901234567890", "r4");

    form.setValue(schema.fields.dataType, "string", "r5");
    form.setValue(
      schema.fields.value,
      "123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890",
      "r5"
    );

    form = form.validateAll();

    // Assert

    // form validation
    expect(form.isValid).toBeFalsy();

    // row validation

    const row1 = form.getField(schema.fields.value, "r1");
    const row2 = form.getField(schema.fields.value, "r2");
    const row3 = form.getField(schema.fields.value, "r3");
    const row4 = form.getField(schema.fields.value, "r4");
    const row5 = form.getField(schema.fields.value, "r5");

    expect(row1?.validation.isValid).toBeFalsy();
    expect(row1?.validation.validationMessage).toEqual("Data Value must be greater or equal to 20 characters");

    expect(row2?.validation.isValid).toBeTruthy();
    expect(row3?.validation.isValid).toBeFalsy();
    expect(row3?.validation.validationMessage).toEqual("Data Value is mandatory");
    expect(row4?.validation.isValid).toBeTruthy();

    expect(row5?.validation.isValid).toBeFalsy();
    expect(row5?.validation.validationMessage).toEqual("Data Value must be less or equal to 50 characters");
  });
});
