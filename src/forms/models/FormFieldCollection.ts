import { FieldType } from "../types/FormTypes";
import { nanoid } from "nanoid";
import EnumMessageType from "../enums/EnumMessageType";
import FormField from "./FormField";
import FormUtility from "../../formUI/utility/FormUtility";
import IFormField from "../interfaces/form/IFormField";
import IFormFieldCollection from "../interfaces/form/IFormFieldCollection";
import IFormInstance from "../interfaces/form/IFormInstance";
import IFormSchema from "../interfaces/form/IFormSchema";
import IRowValuesModel from "../interfaces/form/IRowValuesModel";
import ISchemaField from "../interfaces/schemaField/ISchemaField";
import RowValuesModel from "./RowValuesModel";

// Maintain a collection of fields, as well as provide
// performant methods to access the data
//
export default class FormFieldCollection implements IFormFieldCollection {
  fieldArray: Array<IFormField>;
  fieldByKeyDictionary: { [key: string]: IFormField };

  get isValid(): boolean {
    return this.validationCountTotal === 0;
  }

  get isRealtimeValid(): boolean {
    return this.validationCountRealtime === 0;
  }

  // get errorCountTotal(): number {
  //   return this.fieldArray.filter((field) => field.validation.isValid === false).length;
  // }

  get validationCountTotal(): number {
    return this.fieldArray.reduce<number>((accumulator, field) => {
      return accumulator + field.validation.validationMessages.countAll;
    }, 0);
  }

  get validationCountRealtime(): number {
    return this.fieldArray.reduce<number>((accumulator, field) => {
      return accumulator + field.validation.validationMessages.countOfRealtime;
    }, 0);
  }

  get validationCountServerSide(): number {
    return this.fieldArray.reduce<number>((accumulator, field) => {
      return accumulator + field.validation.validationMessages.countOfServerSide;
    }, 0);
  }

  constructor() {
    this.fieldArray = new Array<IFormField>();
    this.fieldByKeyDictionary = {};
  }

  addOrUpdate(schemaField: ISchemaField, rowId: string | number | null | undefined): IFormField {
    var field = this.getByKey(schemaField.id, rowId);
    if (field === undefined) {
      field = new FormField(schemaField.id, rowId, schemaField);
      this.fieldArray.push(field);
      this.fieldByKeyDictionary[field.key] = field;
    }
    return field;
  }

  setValue(schemaField: ISchemaField, rowId: string | number | undefined | null, value: string | number | boolean | Date | undefined | null) {
    var field = this.getByKey(schemaField.id, rowId);
    if (field === undefined) {
      field = this.addOrUpdate(schemaField, rowId);
    }
    if (value === undefined || value === null) {
      field.value = "";
      return;
    }
    if (typeof value === "number") {
      field.value = `${value}`;
      return;
    }
    if (typeof value === "boolean") {
      field.value = `${value}`;
      return;
    }
    if (value instanceof Date) {
      field.value = value;
      return;
    }
    field.value = value;
  }

  getValue(schemaField: ISchemaField, rowId: string | number | undefined | null): FieldType {
    var field = this.getByKey(schemaField.id, rowId);
    if (field === undefined) {
      return "";
    }
    return field.value;
  }

  getValueAsDate(schemaField: ISchemaField, rowId: string | number | undefined | null): Date | undefined {
    var field = this.getByKey(schemaField.id, rowId);
    if (field === undefined) {
      return undefined;
    }
    return field.value as Date;
  }

  getValueAsNumber(schemaField: ISchemaField, rowId: string | number | undefined | null): number | undefined {
    var field = this.getByKey(schemaField.id, rowId);
    if (field === undefined) {
      return undefined;
    }
    var number = Number(field.value);
    if (isNaN(number)) {
      return undefined;
    }
    return number;
  }

  getValueAsString(schemaField: ISchemaField, rowId: string | number | undefined | null): string {
    var field = this.getByKey(schemaField.id, rowId);
    if (field === undefined) {
      return "";
    }
    return field.value as string;
  }

  getValueAsBoolean(schemaField: ISchemaField, rowId: string | number | undefined | null): boolean | undefined {
    var field = this.getByKey(schemaField.id, rowId);
    if (field === undefined) {
      return undefined;
    }
    return (field.value as string).toLowerCase() === "true";
  }

  remove(field: IFormField): void {
    if (this.getByKey(field.id, field.rowId) === undefined) {
      return;
    }
    this.fieldArray = this.fieldArray.filter((item) => item.key !== field.key);
    delete this.fieldByKeyDictionary[field.key];
  }

  getByKey(name: string, rowId: string | number | undefined | null): IFormField | undefined {
    const key = FormUtility.createKey(name, rowId);
    return this.fieldByKeyDictionary[key];
  }

  validateAll(form: IFormInstance<IFormSchema>) {
    const transactionId = nanoid();
    this.fieldArray.forEach((field) => {
      field.schemaField.assertGroups.evaluateAssertions(form, field, transactionId);
      if (field.serverValidationMessage) {
        field.validation.addMessage(EnumMessageType.serverSide, field.serverValidationMessage);
      }
    });
  }

  //
  // get a simple data object of all values contained in the form
  //
  getAllValues(): {} {
    var data: any = {};

    this.fieldArray.forEach((field) => {
      data[field.key] = field.value;
    });

    return data;
  }

  //
  //
  //
  getAllValuesByRow(): Array<IRowValuesModel> {
    var rows = new Array<IRowValuesModel>();
    var uniqueRowIdList = this.getUniqueRowIds();

    //
    // loop though each row, collate
    // fields and values
    uniqueRowIdList.forEach((rowId) => {
      var row = new RowValuesModel(rowId);
      var fieldsForRow = this.fieldArray.filter((item) => item.rowId === rowId);
      fieldsForRow.forEach((field) => {
        row.data[field.id] = field.value;
      });
      rows.push(row);
    });

    return rows;
  }

  //
  // Get a unique list of all the row id's in the current form
  //
  private getUniqueRowIds(): Array<any> {
    var rowIdList: Array<any> = this.fieldArray.map((item) => item.rowId).sort();
    var uniqueList = Array.from(new Set(rowIdList));
    return uniqueList;
  }

  setUserValidationMessage(schemaField: ISchemaField, rowId: string | number | undefined | null, validationMessage: string | undefined | null) {
    if (validationMessage === null) {
      validationMessage = undefined;
    }

    var field = this.getByKey(schemaField.id, rowId);
    if (field === undefined) {
      field = this.addOrUpdate(schemaField, rowId);
    }

    field.serverValidationMessage = validationMessage;
  }
}
