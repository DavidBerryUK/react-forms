import IFormField from "../interfaces/form/IFormField";
import IFormInstance from "../interfaces/form/IFormInstance";
import IFormSchema from "../interfaces/form/IFormSchema";
import IRule from "../interfaces/rules/IRule";
import IRuleResponse from "../interfaces/rules/IRuleResponse";
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
