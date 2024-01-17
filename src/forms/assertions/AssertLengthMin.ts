import IFormField from "../interfaces/IFormField";
import IFormInstance from "../interfaces/IFormInstance";
import IFormSchema from "../interfaces/IFormSchema";
import IRule from "../interfaces/IRule";
import IRuleResponse from "../interfaces/IRuleResponse";
import RuleBase from "../models/RuleBase";

export default class AssertLengthMin extends RuleBase implements IRule {
  private readonly minLength: number;

  constructor(minLength: number, customMessage?: string) {
    super(customMessage);
    this.minLength = minLength;
  }

  isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IRuleResponse {
    if (this.isValueEmpty(value)) {
      return this.pass();
    }

    if (value.length >= this.minLength) {
      return this.pass();
    }

    return this.fail(`must be greater or equal to ${this.minLength} characters`);
  }
}