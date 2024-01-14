//
// form model used to track content changes.
//
// if does not update the values in a separate form model, but
// form values can be quickly extracted

import { FieldType } from "../types/FormTypes";
import FormFieldCollection from "./FormFieldCollection";
import IFormFieldCollection from "../interfaces/IFormFieldCollection";
import IFormInstance from "../interfaces/IFormInstance";
import IFormSchema from "../interfaces/IFormSchema";
import ISchemaField from "../interfaces/ISchemaField";
import IFormField from "../interfaces/IFormField";

//
export default class FormInstance<T extends IFormSchema> implements IFormInstance<T> {
  fieldCollection: IFormFieldCollection;
  fieldSchema: T;

  constructor(fieldSchema: T) {
    this.fieldCollection = new FormFieldCollection();
    this.fieldSchema = fieldSchema;
  }

  // after anything on the model is updated, the whole object
  // model is cloned before being returned back to the
  // hosting application.
  //
  // This means totals etc can be placed inside
  // the clone event and they will always be updated with
  // the correct values
  clone(): FormInstance<T> {
    const model = new FormInstance(this.fieldSchema);
    model.fieldCollection = this.fieldCollection;
    model.fieldSchema = this.fieldSchema;
    return model;
  }

  validateAll(): FormInstance<T> {
    this.fieldCollection.validateAll(this);
    return this.clone();
  }

  get isValid(): boolean {
    return this.fieldCollection.isValid;
  }

  get isRealtimeValid(): boolean {
    return this.fieldCollection.isRealtimeValid;
  }

  get validationCountTotal(): number {
    return this.fieldCollection.validationCountTotal;
  }

  get validationCountRealtime(): number {
    return this.fieldCollection.validationCountRealtime;
  }

  get validationCountServerSide(): number {
    return this.fieldCollection.validationCountTotal;
  }

  setValue(schemaField: ISchemaField, rowId: string | number | null | undefined, value: string | number | boolean | undefined | Date | null) {
    this.fieldCollection.setValue(schemaField, rowId, value);
  }

  getValue(schemaField: ISchemaField, rowId: string | number | null | undefined): FieldType {
    return this.fieldCollection.getValue(schemaField, rowId);
  }

  getValueAsString(schemaField: ISchemaField, rowId: string | number | null | undefined): string | undefined {
    return this.fieldCollection.getValueAsString(schemaField, rowId);
  }

  getValueAsBoolean(schemaField: ISchemaField, rowId: string | number | null | undefined): boolean | undefined {
    return this.fieldCollection.getValueAsBoolean(schemaField, rowId);
  }

  getValueAsNumber(schemaField: ISchemaField, rowId: string | number | null | undefined): number | undefined {
    return this.fieldCollection.getValueAsNumber(schemaField, rowId);
  }

  getAllValues(): any {
    return this.fieldCollection.getAllValues();
  }

  getAllValuesByRow(): Array<any> {
    return this.fieldCollection.getAllValuesByRow();
  }

  getField(schemaField: ISchemaField, rowId: string | number | null | undefined): IFormField | undefined {
    return this.fieldCollection.getByKey(schemaField.name, rowId);
  }

  getFieldByName(fieldName: string, rowId: string | number | null | undefined): IFormField | undefined {
    return this.fieldCollection.getByKey(fieldName, rowId);
  }

  // set validations from custom validation (should really create a validator ), or from api responses
  setUserValidationMessage(schemaField: ISchemaField, rowId: string | number | null | undefined, validationMessage: string | undefined | null): void {
    this.fieldCollection.setUserValidationMessage(schemaField, rowId, validationMessage);
  }
}
