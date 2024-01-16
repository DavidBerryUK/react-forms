import IRule from "../../interfaces/IRule";
import RuleBase from "../../models/RuleBase";
import IFormField from "../../interfaces/IFormField";
import IFormInstance from "../../interfaces/IFormInstance";
import IFormSchema from "../../interfaces/IFormSchema";
import IRuleResponse from "../../interfaces/IRuleResponse";

export default class RuleLengthBetween extends RuleBase implements IRule {
  private readonly minLength: number;
  private readonly maxLength: number;

  constructor(minLength: number, maxLength: number, customMessage?: string) {
    super(customMessage);
    this.minLength = minLength;
    this.maxLength = maxLength;
  }

  isValid(
    form: IFormInstance<IFormSchema>,
    field: IFormField,
    value: string
  ): IRuleResponse {
    if (this.isValueEmpty(value)) {
      return this.pass();
    }

    if (value.length >= this.minLength && value.length <= this.maxLength) {
      return this.pass();
    }

    return this.fail(
      `must be between ${this.minLength} and ${this.maxLength} characters`
    );
  }
}
