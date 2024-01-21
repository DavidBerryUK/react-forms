import EnumValidationStatus from "../enums/EnumValidationStatus";
import IFormField from "../interfaces/form/IFormField";
import IFormInstance from "../interfaces/form/IFormInstance";
import IFormSchema from "../interfaces/form/IFormSchema";
import IRule from "../interfaces/rules/IRule";
import IRuleResponse from "../interfaces/rules/IRuleResponse";
import RuleBase from "./base/RuleBase";

export default class AssertIsEqualTo extends RuleBase implements IRule {
  private readonly constant: string;
  private readonly caseInsensitive: boolean;

  constructor(constant: string, caseInsensitive: boolean, customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    super(customMessage, defaultValidationStatus);
    this.constant = constant;
    this.caseInsensitive = caseInsensitive;

    if (caseInsensitive) {
      this.constant = this.constant.toLocaleLowerCase();
    }
  }

  isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IRuleResponse {
    if (this.isValueEmpty(value)) {
      return this.default();
    }

    if (this.caseInsensitive === true) {
      if (value.toLocaleLowerCase() === this.constant) {
        return this.pass();
      }
    }

    if (this.caseInsensitive === false) {
      if (value === this.constant) {
        return this.pass();
      }
    }

    return this.fail(`must be equal to '${this.constant}'`);
  }
}
