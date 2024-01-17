import IFormField from "../interfaces/IFormField";
import IFormInstance from "../interfaces/IFormInstance";
import IFormSchema from "../interfaces/IFormSchema";
import IRule from "../interfaces/IRule";
import IRuleResponse from "../interfaces/IRuleResponse";
import RuleBase from "../models/RuleBase";

export default class AssertValueIsZero extends RuleBase implements IRule {
  isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IRuleResponse {
    if (this.isValueEmpty(value)) {
      return this.pass();
    }

    const number = Number(value);

    if (!isNaN(number)) {
      if (number === 0) {
        return this.pass();
      }
    }

    return this.fail(`must be zero`);
  }
}
