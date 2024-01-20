import { FieldType } from "../types/FormTypes";
import FormFieldValidationState from "./FormFieldValidationState";
import FormUtility from "../../formUI/utility/FormUtility";
import IFormField from "../interfaces/form/IFormField";
import IFormFieldValidationState from "../interfaces/form/IFormFieldValidationState";
import ISchemaField from "../interfaces/schema/ISchemaField";

// name     - name of the field
// rowId    - optional, if the form has repeating rows then this will identify the field on the row
//
export default class FormField implements IFormField {
  // unique id for the field
  key: string;
  id: string;
  //- optional, if the form has repeating rows then this will identify the field on the row when generating the field key
  rowId: string | number | undefined | null;
  value: FieldType;
  schemaField: ISchemaField;
  validation: IFormFieldValidationState;
  serverValidationMessage: string | undefined;

  get valueAsString(): string {
    return this.value as string;
  }
  get valueAsDate(): Date | undefined {
    return this.value as Date;
  }
  get valueAsNumber(): Number | undefined {
    return this.value as number;
  }
  get valueAsBoolean(): Boolean | undefined {
    return Boolean(this.value);
  }

  constructor(id: string, rowId: string | number | null | undefined, schemaField: ISchemaField) {
    this.id = id;
    this.rowId = rowId;
    this.schemaField = schemaField;
    this.value = "";
    this.validation = FormFieldValidationState.default;
    this.key = FormUtility.createKey(this.id, this.rowId);
    this.serverValidationMessage = undefined;
  }
}
