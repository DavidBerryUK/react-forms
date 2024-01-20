import IFormField from "../interfaces/form/IFormField";
import IFormInstance from "../interfaces/form/IFormInstance";
import IFormSchema from "../interfaces/form/IFormSchema";
import IRule from "../interfaces/rules/IRule";
import IRuleResponse from "../interfaces/rules/IRuleResponse";
import RuleBase from "../models/RuleBase";

//
// will validate either integers or decimal, if you require
// further checks on types, then include RuleDecimal or RuleInteger
// in the rules collection
//
export default class AssertValueIsBetween extends RuleBase implements IRule {
  private readonly minValue: number;
  private readonly maxValue: number;

  constructor(minValue: number, maxValue: number, customMessage?: string) {
    super(customMessage);
    this.minValue = minValue;
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

    if (number < this.minValue || number > this.maxValue) {
      return this.fail(`must be between ${this.minValue} and ${this.maxValue}`);
    }

    return this.pass();
  }
}
