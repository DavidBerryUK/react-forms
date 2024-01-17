import IFormField from "../interfaces/IFormField";
import IFormInstance from "../interfaces/IFormInstance";
import IFormSchema from "../interfaces/IFormSchema";
import IRule from "../interfaces/IRule";
import IRuleResponse from "../interfaces/IRuleResponse";
import RuleBase from "../models/RuleBase";

export default class AssertValueMax extends RuleBase implements IRule {
  private maxValue: number;

  constructor(maxValue: number, customMessage?: string) {
    super(customMessage);
    this.maxValue = maxValue;
  }

  isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IRuleResponse {
    if (this.isValueEmpty(value)) {
      return this.pass();
    }

    const number = Number(value);

    if (isNaN(number)) {
      return this.fail("must be a valid number");
    }

    if (number > this.maxValue) {
      return this.fail(`must be equal or less than ${this.maxValue}`);
    }

    return this.pass();
  }
}