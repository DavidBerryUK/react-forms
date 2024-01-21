import IFormField from "../interfaces/form/IFormField";
import IFormInstance from "../interfaces/form/IFormInstance";
import IFormSchema from "../interfaces/form/IFormSchema";
import IRule from "../interfaces/rules/IRule";
import IRuleResponse from "../interfaces/rules/IRuleResponse";
import RuleBase from "./base/RuleBase";
import StringUtility from "../../formUI/utility/StringUtility";

export default class AssertValueIsTrue extends RuleBase implements IRule {
  isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IRuleResponse {
    if (this.isValueEmpty(value)) {
      return this.pass();
    }

    if (StringUtility.stringToIsTrue(value)) {
      return this.pass();
    }

    return this.fail(`must be true`);
  }
}
