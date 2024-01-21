import IFormField from "../interfaces/form/IFormField";
import IFormInstance from "../interfaces/form/IFormInstance";
import IFormSchema from "../interfaces/form/IFormSchema";
import IRule from "../interfaces/rules/IRule";
import IRuleResponse from "../interfaces/rules/IRuleResponse";
import RuleBase from "./base/RuleBase";

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
