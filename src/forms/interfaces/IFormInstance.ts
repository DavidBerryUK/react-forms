import { FieldType } from "../types/FormTypes";
import IFormField from "./IFormField";
import IFormFieldCollection from "./IFormFieldCollection";
import IFormSchema from "./IFormSchema";
import ISchemaField from "./ISchemaField";
//
// form model used to track content changes.
//
// if does not update the values in a separate form model, but
// form values can be quickly extracted

//
export default interface IFormInstance<T extends IFormSchema> {
  fieldCollection: IFormFieldCollection;
  fieldSchema: T;

  get isValid(): boolean;
  get isRealtimeValid(): boolean;
  get validationCountTotal(): number;
  get validationCountRealtime(): number;
  get validationCountServerSide(): number;

  clone(): IFormInstance<T>;
  getAllValues(): any;
  getAllValuesByRow(): Array<any>;
  getField(schemaField: ISchemaField, rowId: string | number | null | undefined): IFormField | undefined;
  getFieldByName(fieldName: string, rowId: string | number | null | undefined): IFormField | undefined;
  getValue(schemaField: ISchemaField, rowId: string | number | null | undefined): FieldType;
  getValueAsBoolean(schemaField: ISchemaField, rowId: string | number | null | undefined): boolean | undefined;
  getValueAsNumber(schemaField: ISchemaField, rowId: string | number | null | undefined): number | undefined;
  getValueAsString(schemaField: ISchemaField, rowId: string | number | null | undefined): string | undefined;

  setValue(schemaField: ISchemaField, rowId: string | number | null | undefined, value: string | number | boolean | undefined | null): void;
  validateAll(): IFormInstance<T>;

  // set validations from custom validation (should really create a validator ), or from api responses
  setUserValidationMessage(schemaField: ISchemaField, rowId: string | number | null | undefined, validationMessage: string | undefined | null): void;
}
