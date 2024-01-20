import IRuleResponse from "../interfaces/rules/IRuleResponse";
import RuleResponse from "./RuleResponse";

export default class RuleBase {
  readonly customMessage?: string;

  constructor(customMessage?: string) {
    this.customMessage = customMessage;
  }

  isValueEmpty(value: string | number | Date | undefined | null): boolean {
    if (value === undefined || value === null) {
      return true;
    }
    if (typeof value === "string" && value.trim().length === 0) {
      return true;
    }
    return false;
  }

  fail(message: string): IRuleResponse {
    return RuleResponse.fail(this.customMessage || message);
  }

  pass(): IRuleResponse {
    return RuleResponse.pass();
  }
}
