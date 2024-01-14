import FormInstance from '../../models/FormInstance';
import ConditionalFormSchema from "../testSupport/ConditionalFormSchema";

describe('Multi Row form with conditions', () => {
    test('basic setup, all valid', () => {

        const schema = new ConditionalFormSchema();
        var form = new FormInstance(schema);

        //
        // set data type to string
        //
        form.setValue(schema.fields.dataType, "r1", "string");
        form.setValue(schema.fields.value, "r1", "123456789012345678901234567890");

        form.setValue(schema.fields.dataType, "r2", "string");
        form.setValue(schema.fields.value, "r2", "123456789012345678901234567890");

        form.setValue(schema.fields.dataType, "r3", "string");
        form.setValue(schema.fields.value, "r3", "123456789012345678901234567890");

        form.setValue(schema.fields.dataType, "r4", "string");
        form.setValue(schema.fields.value, "r4", "123456789012345678901234567890");

        form.setValue(schema.fields.dataType, "r5", "string");
        form.setValue(schema.fields.value, "r5", "123456789012345678901234567890");

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
    })

    test('single row invalid', () => {

        const schema = new ConditionalFormSchema();
        var form = new FormInstance(schema);

        //
        // set data type to string
        //
        form.setValue(schema.fields.dataType, "r1", "string");
        form.setValue(schema.fields.value, "r1", "123456789012345678901234567890");

        form.setValue(schema.fields.dataType, "r2", "string");
        form.setValue(schema.fields.value, "r2", "123456789012345678901234567890");

        form.setValue(schema.fields.dataType, "r3", "string");
        form.setValue(schema.fields.value, "r3", "");

        form.setValue(schema.fields.dataType, "r4", "string");
        form.setValue(schema.fields.value, "r4", "123456789012345678901234567890");

        form.setValue(schema.fields.dataType, "r5", "string");
        form.setValue(schema.fields.value, "r5", "123456789012345678901234567890");

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
    })

    test('multiple string rows with different error messages', () => {

        const schema = new ConditionalFormSchema();
        var form = new FormInstance(schema);

        //
        // set data type to string
        //
        form.setValue(schema.fields.dataType, "r1", "string");
        form.setValue(schema.fields.value, "r1", "12345");

        form.setValue(schema.fields.dataType, "r2", "string");
        form.setValue(schema.fields.value, "r2", "123456789012345678901234567890");

        form.setValue(schema.fields.dataType, "r3", "string");
        form.setValue(schema.fields.value, "r3", "");

        form.setValue(schema.fields.dataType, "r4", "string");
        form.setValue(schema.fields.value, "r4", "123456789012345678901234567890");

        form.setValue(schema.fields.dataType, "r5", "string");
        form.setValue(schema.fields.value, "r5", "123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890");

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
    })

})