import IFormField from "../interfaces/form/IFormField";
import IFormInstance from "../interfaces/form/IFormInstance";
import IFormSchema from "../interfaces/form/IFormSchema";
import IRule from "../interfaces/rules/IRule";
import IRuleResponse from "../interfaces/rules/IRuleResponse";
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
