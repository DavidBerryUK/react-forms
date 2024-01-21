import EnumValidationStatus from "../enums/EnumValidationStatus";
import IFormField from "../interfaces/form/IFormField";
import IFormInstance from "../interfaces/form/IFormInstance";
import IFormSchema from "../interfaces/form/IFormSchema";
import IRule from "../interfaces/rules/IRule";
import IRuleResponse from "../interfaces/rules/IRuleResponse";
import RuleBase from "./base/RuleBase";

export default class AssertLengthIsBetween extends RuleBase implements IRule {
  private readonly minLength: number;
  private readonly maxLength: number;

  constructor(minLength: number, maxLength: number, customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    super(customMessage, defaultValidationStatus);
    this.minLength = minLength;
    this.maxLength = maxLength;
  }

  isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IRuleResponse {
    if (this.isValueEmpty(value)) {
      return this.pass();
    }

    if (value.length >= this.minLength && value.length <= this.maxLength) {
      return this.pass();
    }

    return this.fail(`must be between ${this.minLength} and ${this.maxLength} characters`);
  }
}
