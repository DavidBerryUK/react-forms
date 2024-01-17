import IFormField from "../interfaces/IFormField";
import IFormInstance from "../interfaces/IFormInstance";
import IFormSchema from "../interfaces/IFormSchema";
import IRule from "../interfaces/IRule";
import IRuleResponse from "../interfaces/IRuleResponse";
import RuleBase from "../models/RuleBase";
import StringUtility from "../utility/StringUtility";

export default class AssertValueIsFalse extends RuleBase implements IRule {
  isValid(form: IFormInstance<IFormSchema> | null, field: IFormField | null, value: string): IRuleResponse {
    if (this.isValueEmpty(value)) {
      return this.pass();
    }

    if (StringUtility.stringToIsFalse(value)) {
      return this.pass();
    }

    return this.fail(`must be false`);
  }
}
