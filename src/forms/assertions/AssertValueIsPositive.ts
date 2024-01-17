import IFormField from "../interfaces/IFormField";
import IFormInstance from "../interfaces/IFormInstance";
import IFormSchema from "../interfaces/IFormSchema";
import IRule from "../interfaces/IRule";
import IRuleResponse from "../interfaces/IRuleResponse";
import RuleBase from "../models/RuleBase";

export default class AssertValueIsPositive extends RuleBase implements IRule {
  private readonly allowZero: boolean;

  constructor(allowZero: boolean, customMessage?: string) {
    super(customMessage);
    this.allowZero = allowZero;
  }

  isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IRuleResponse {
    if (this.isValueEmpty(value)) {
      return this.pass();
    }

    const number = Number(value);

    if (!isNaN(number)) {
      if (this.allowZero) {
        if (number >= 0) {
          return this.pass();
        }
      } else {
        if (number > 0) {
          return this.pass();
        }
      }
    }

    if (this.allowZero) {
      return this.fail(`must be positive or zero`);
    }
    return this.fail(`must be positive`);
  }
}
