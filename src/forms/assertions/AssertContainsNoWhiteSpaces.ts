import IFormField from "../interfaces/IFormField";
import IFormInstance from "../interfaces/IFormInstance";
import IFormSchema from "../interfaces/IFormSchema";
import IRule from "../interfaces/IRule";
import IRuleResponse from "../interfaces/IRuleResponse";
import RuleBase from "../models/RuleBase";

export default class AssertContainsNoWhiteSpaces extends RuleBase implements IRule {
  private message: string;

  constructor(customMessage?: string) {
    super(customMessage);

    this.message = this.customMessage ?? "cannot contain spaces";
  }

  isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IRuleResponse {
    if (this.isValueEmpty(value)) {
      return this.fail(this.message);
    }

    const cleanedValue = value!.replace(/\s+/g, "");

    if (cleanedValue !== value) {
      return this.fail(this.message);
    }

    return this.pass();
  }
}
