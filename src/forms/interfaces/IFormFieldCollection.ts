import { FieldType } from "../types/FormTypes";
import IFormField from "./IFormField";
import IFormInstance from "./IFormInstance";
import IFormSchema from "./IFormSchema";
import IRowValuesModel from "./IRowValuesModel";
import ISchemaField from "./ISchemaField";

export default interface IFormFieldCollection {
  fieldArray: Array<IFormField>;
  fieldByKeyDictionary: { [key: string]: IFormField };

  get isValid(): boolean;
  get isRealtimeValid(): boolean;
  get validationCountTotal(): number;
  get validationCountRealtime(): number;
  get validationCountServerSide(): number;

  addOrUpdate(schemaField: ISchemaField, rowId: string | number | Date | null | undefined): IFormField;
  getAllValues(): {};
  getAllValuesByRow(): Array<IRowValuesModel>;
  getByKey(name: string, rowId: string | number | undefined | null): IFormField | undefined;
  getValue(schemaField: ISchemaField, rowId: string | number | undefined | null): FieldType;

  getValueAsBoolean(schemaField: ISchemaField, rowId: string | number | undefined | null): boolean | undefined;
  getValueAsDate(schemaField: ISchemaField, rowId: string | number | undefined | null): Date | undefined;
  getValueAsNumber(schemaField: ISchemaField, rowId: string | number | undefined | null): number | undefined;
  getValueAsString(schemaField: ISchemaField, rowId: string | number | undefined | null): string;

  remove(field: IFormField): void;
  setValue(schemaField: ISchemaField, rowId: string | number | undefined | null, value: string | number | boolean | undefined | Date | null): void;
  validateAll(form: IFormInstance<IFormSchema>): void;
  setUserValidationMessage(schemaField: ISchemaField, rowId: string | number | undefined | null, validationMessage: string | undefined | null): void;
}
