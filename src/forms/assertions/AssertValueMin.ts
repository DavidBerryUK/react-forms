import IFormField from "../interfaces/form/IFormField";
import IFormInstance from "../interfaces/form/IFormInstance";
import IFormSchema from "../interfaces/form/IFormSchema";
import IRule from "../interfaces/rules/IRule";
import IRuleResponse from "../interfaces/rules/IRuleResponse";
import RuleBase from "../models/RuleBase";

export default class AssertValueMin extends RuleBase implements IRule {
  private readonly minValue: number;

  constructor(minValue: number, customMessage?: string) {
    super(customMessage);
    this.minValue = minValue;
  }

  isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IRuleResponse {
    if (this.isValueEmpty(value)) {
      return this.pass();
    }

    var number = Number(value);

    if (isNaN(number)) {
      return this.fail("must be a valid number");
    }

    if (number < this.minValue) {
      return this.fail(`must be equal or greater than ${this.minValue}`);
    }

    return this.pass();
  }
}
