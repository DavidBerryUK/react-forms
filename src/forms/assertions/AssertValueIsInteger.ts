import IFormField from "../interfaces/IFormField";
import IFormInstance from "../interfaces/IFormInstance";
import IFormSchema from "../interfaces/IFormSchema";
import IRule from "../interfaces/IRule";
import IRuleResponse from "../interfaces/IRuleResponse";
import RuleBase from "../models/RuleBase";

export default class AssertValueIsInteger extends RuleBase implements IRule {
  isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IRuleResponse {
    if (this.isValueEmpty(value)) {
      return this.pass();
    }

    const number = Number(value);
    if (!value || value.trim().length === 0 || isNaN(number) || !Number.isInteger(number)) {
      return this.fail("must be a whole number");
    }

    return this.pass();
  }
}
