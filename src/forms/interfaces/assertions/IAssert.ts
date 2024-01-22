import { FieldType } from "../../types/FormTypes";
import IFormInstance from "../form/IFormInstance";
import IFormSchema from "../form/IFormSchema";
import IFormField from "../form/IFormField";
import IAssertResponse from "./IAssertResponse";

// Define properties and methods for a validation assertion.
// Any other values required to evaluate the assertion must be passed as part of the constructor,
// This allows the assertionss to be defined in-line in the UI-Render template

export default interface IAssert {
  // Method that runs the assert, where value is the text value being evaluated
  //
  //
  // form 	- instance of the form
  // field 	- field being validated from the form
  // value	- value from the field, trimmed
  isValid(form: IFormInstance<IFormSchema> | null, field: IFormField | null, value: FieldType): IAssertResponse;
}
