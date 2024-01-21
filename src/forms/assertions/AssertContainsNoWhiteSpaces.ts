import EnumValidationStatus from "../enums/EnumValidationStatus";
import IFormField from "../interfaces/form/IFormField";
import IFormInstance from "../interfaces/form/IFormInstance";
import IFormSchema from "../interfaces/form/IFormSchema";
import IRule from "../interfaces/rules/IRule";
import IRuleResponse from "../interfaces/rules/IRuleResponse";
import RuleBase from "./base/RuleBase";

export default class AssertContainsNoWhiteSpaces extends RuleBase implements IRule {
  private message: string;

  constructor(customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    super(customMessage, defaultValidationStatus);

    this.message = this.customMessage ?? "cannot contain spaces";
  }

  isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IRuleResponse {
    if (this.isValueEmpty(value)) {
      return this.fail(this.message);
    }

    const cleanedValue = value!.replace(/\s+/g, "");

    if (cleanedValue !== value) {
      return this.fail(this.message);
    }

    return this.pass();
  }
}
