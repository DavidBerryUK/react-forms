import { FieldType } from "../types/FormTypes";
import IFormInstance from "./IFormInstance";
import IFormSchema from "./IFormSchema";
import IFormField from "./IFormField"
import IRuleResponse from "./IRuleResponse";

// Define properties and methods for a validation rule.
// Any other values required to evaluate the rule must be passed as part of the constructor,
// This allows the rules to be defined in-line in the UI-Render template

export default interface IRule {
	// Method that runs the rule, where value is the text value being evaluated
	//
	//
	// form 	- instance of the form
	// field 	- field being validated from the form
	// value	- value from the field, trimmed
	isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: FieldType): IRuleResponse;
}
