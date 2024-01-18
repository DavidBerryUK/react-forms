import IFormFieldValidationState from "./IFormFieldValidationState";
import ISchemaField from "./ISchemaField";
import { FieldType } from "../types/FormTypes";

export default interface FormField {
  // unique id for the field
  key: string;
  id: string;
  //- optional, if the form has repeating rows then this will identify the field on the row when generating the field key
  rowId: string | number | undefined | null;
  value: FieldType;
  valueAsString: string;
  valueAsDate: Date | undefined;
  valueAsNumber: Number | undefined;
  valueAsBoolean: Boolean | undefined;
  validation: IFormFieldValidationState;
  schemaField: ISchemaField;
  serverValidationMessage: string | undefined;
}
