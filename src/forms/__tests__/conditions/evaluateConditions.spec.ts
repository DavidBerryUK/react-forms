import FormInstance from "../../models/FormInstance";
import ConditionalFormSchema from "../testSupport/ConditionalFormSchema";

describe("Add Condition to Rule", () => {
  test("data type=string test:expect error message that value is mandatory", () => {
    const schema = new ConditionalFormSchema();
    var form = new FormInstance(schema);

    //
    // set data type to string
    //
    form.setValue(schema.fields.dataType, null, "string");
    form.setValue(schema.fields.value, null, "");
    form = form.validateAll();

    // Assert

    // form validation
    expect(form.isValid).toBeFalsy();

    // field validation for Data Type
    var fieldDataType = form.getField(schema.fields.dataType, null);
    expect(fieldDataType?.id).toEqual("dataType");
    expect(fieldDataType?.schemaField.caption).toEqual("Data Type");
    expect(fieldDataType?.validation.isValid).toBeTruthy();
    expect(fieldDataType?.validation.validationMessage).toBe("");

    // field validation for Data Value
    var fieldValue = form.getField(schema.fields.value, null);
    expect(fieldValue?.id).toEqual("value");
    expect(fieldValue?.schemaField.caption).toEqual("Data Value");
    expect(fieldValue?.validation.isValid).toBeFalsy();
    expect(fieldValue?.validation.validationMessage).toBe("Data Value is mandatory");
  });

  test("data type=string test:expect error message string value is too sort (must be at least 20 chars)", () => {
    const schema = new ConditionalFormSchema();
    var form = new FormInstance(schema);

    //
    // set data type to string
    //
    form.setValue(schema.fields.dataType, null, "string");
    form.setValue(schema.fields.value, null, "1234567890");
    form = form.validateAll();

    // Assert

    // form validation
    expect(form.isValid).toBeFalsy();

    // field validation for Data Type
    var fieldDataType = form.getField(schema.fields.dataType, null);
    expect(fieldDataType?.validation.isValid).toBeTruthy();
    expect(fieldDataType?.validation.validationMessage).toBe("");

    // field validation for Data Value
    var fieldValue = form.getField(schema.fields.value, null);
    expect(fieldValue?.validation.isValid).toBeFalsy();
    expect(fieldValue?.validation.validationMessage).toBe("Data Value must be greater or equal to 20 characters");
  });

  test("data type=string test:expect error message string value is too long (max length is 50 chars)", () => {
    const schema = new ConditionalFormSchema();
    var form = new FormInstance(schema);

    //
    // set data type to string
    //
    form.setValue(schema.fields.dataType, null, "string");
    form.setValue(schema.fields.value, null, "12345678901234567890123456789012345678901234567890123456789012345678901234567890");
    form = form.validateAll();

    // Assert

    // form validation
    expect(form.isValid).toBeFalsy();

    // field validation for Data Type
    var fieldDataType = form.getField(schema.fields.dataType, null);
    expect(fieldDataType?.validation.isValid).toBeTruthy();
    expect(fieldDataType?.validation.validationMessage).toBe("");

    // field validation for Data Value
    var fieldValue = form.getField(schema.fields.value, null);
    expect(fieldValue?.validation.isValid).toBeFalsy();
    expect(fieldValue?.validation.validationMessage).toBe("Data Value must be less or equal to 50 characters");
  });

  test("data type=integer test:expect error message that value is mandatory", () => {
    const schema = new ConditionalFormSchema();
    var form = new FormInstance(schema);

    //
    // set data type to string
    //
    form.setValue(schema.fields.dataType, null, "integer");
    form.setValue(schema.fields.value, null, "");
    form = form.validateAll();

    // Assert

    // form validation
    expect(form.isValid).toBeFalsy();

    // field validation for Data Type
    var fieldDataType = form.getField(schema.fields.dataType, null);
    expect(fieldDataType?.validation.isValid).toBeTruthy();
    expect(fieldDataType?.validation.validationMessage).toBe("");

    // field validation for Data Value
    var fieldValue = form.getField(schema.fields.value, null);
    expect(fieldValue?.validation.isValid).toBeFalsy();
    expect(fieldValue?.validation.validationMessage).toBe("Data Value is mandatory");
  });

  test("data type=integer test:expect error message that value must be a valid integer when text entered", () => {
    const schema = new ConditionalFormSchema();
    var form = new FormInstance(schema);

    //
    // set data type to string
    //
    form.setValue(schema.fields.dataType, null, "integer");
    form.setValue(schema.fields.value, null, "one");
    form = form.validateAll();

    // Assert

    // form validation
    expect(form.isValid).toBeFalsy();

    // field validation for Data Type
    var fieldDataType = form.getField(schema.fields.dataType, null);
    expect(fieldDataType?.validation.isValid).toBeTruthy();
    expect(fieldDataType?.validation.validationMessage).toBe("");

    // field validation for Data Value
    var fieldValue = form.getField(schema.fields.value, null);
    expect(fieldValue?.validation.isValid).toBeFalsy();
    expect(fieldValue?.validation.validationMessage).toBe("Data Value must be a whole number");
  });

  test("data type=integer test:expect error message that value must be a valid decimal when text entered", () => {
    const schema = new ConditionalFormSchema();
    var form = new FormInstance(schema);

    //
    // set data type to string
    //
    form.setValue(schema.fields.dataType, null, "integer");
    form.setValue(schema.fields.value, null, "100.5");
    form = form.validateAll();

    // Assert

    // form validation
    expect(form.isValid).toBeFalsy();

    // field validation for Data Type
    var fieldDataType = form.getField(schema.fields.dataType, null);
    expect(fieldDataType?.validation.isValid).toBeTruthy();
    expect(fieldDataType?.validation.validationMessage).toBe("");

    // field validation for Data Value
    var fieldValue = form.getField(schema.fields.value, null);
    expect(fieldValue?.validation.isValid).toBeFalsy();
    expect(fieldValue?.validation.validationMessage).toBe("Data Value must be a whole number");
  });

  test("data type=integer test:expect no error when integer entered", () => {
    const schema = new ConditionalFormSchema();
    var form = new FormInstance(schema);

    //
    // set data type to string
    //
    form.setValue(schema.fields.dataType, null, "integer");
    form.setValue(schema.fields.value, null, "100");
    form = form.validateAll();

    // Assert

    // form validation
    expect(form.isValid).toBeTruthy();

    // field validation for Data Type
    var fieldDataType = form.getField(schema.fields.dataType, null);
    expect(fieldDataType?.validation.isValid).toBeTruthy();
    expect(fieldDataType?.validation.validationMessage).toBe("");

    // field validation for Data Value
    var fieldValue = form.getField(schema.fields.value, null);
    expect(fieldValue?.validation.isValid).toBeTruthy();
    expect(fieldValue?.validation.validationMessage).toBe("");
  });

  test("data type=decimal test:expect error message that value is mandatory", () => {
    const schema = new ConditionalFormSchema();
    var form = new FormInstance(schema);

    //
    // set data type to string
    //
    form.setValue(schema.fields.dataType, null, "decimal");
    form.setValue(schema.fields.value, null, "");
    form = form.validateAll();

    // Assert

    // form validation
    expect(form.isValid).toBeFalsy();

    // field validation for Data Type
    var fieldDataType = form.getField(schema.fields.dataType, null);
    expect(fieldDataType?.validation.isValid).toBeTruthy();
    expect(fieldDataType?.validation.validationMessage).toBe("");

    // field validation for Data Value
    var fieldValue = form.getField(schema.fields.value, null);
    expect(fieldValue?.validation.isValid).toBeFalsy();
    expect(fieldValue?.validation.validationMessage).toBe("Data Value is mandatory");
  });

  test("data type=decimal test:expect error message that value must be a valid integer when text entered", () => {
    const schema = new ConditionalFormSchema();
    var form = new FormInstance(schema);

    //
    // set data type to string
    //
    form.setValue(schema.fields.dataType, null, "decimal");
    form.setValue(schema.fields.value, null, "one");
    form = form.validateAll();

    // Assert

    // form validation
    expect(form.isValid).toBeFalsy();

    // field validation for Data Type
    var fieldDataType = form.getField(schema.fields.dataType, null);
    expect(fieldDataType?.validation.isValid).toBeTruthy();
    expect(fieldDataType?.validation.validationMessage).toBe("");

    // field validation for Data Value
    var fieldValue = form.getField(schema.fields.value, null);
    expect(fieldValue?.validation.isValid).toBeFalsy();
    expect(fieldValue?.validation.validationMessage).toBe("Data Value must be a decimal");
  });

  test("data type=decimal test:expect no error when decimal entered", () => {
    const schema = new ConditionalFormSchema();
    var form = new FormInstance(schema);

    //
    // set data type to string
    //
    form.setValue(schema.fields.dataType, null, "decimal");
    form.setValue(schema.fields.value, null, "100.55");
    form = form.validateAll();

    // Assert

    // form validation
    expect(form.isValid).toBeTruthy();

    // field validation for Data Type
    var fieldDataType = form.getField(schema.fields.dataType, null);
    expect(fieldDataType?.validation.isValid).toBeTruthy();
    expect(fieldDataType?.validation.validationMessage).toBe("");

    // field validation for Data Value
    var fieldValue = form.getField(schema.fields.value, null);
    expect(fieldValue?.validation.isValid).toBeTruthy();
    expect(fieldValue?.validation.validationMessage).toBe("");
  });
});
