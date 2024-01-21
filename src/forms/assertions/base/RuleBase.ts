import EnumValidationStatus from "../../enums/EnumValidationStatus";
import IRuleResponse from "../../interfaces/rules/IRuleResponse";
import RuleResponse from "../../models/RuleResponse";

export default class RuleBase {
  public readonly customMessage?: string;
  private readonly defaultValidationStatus: EnumValidationStatus;

  constructor(customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    this.customMessage = customMessage;
    this.defaultValidationStatus = defaultValidationStatus || EnumValidationStatus.pass;
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

  default() {
    if (this.defaultValidationStatus === EnumValidationStatus.pass) {
      return this.pass();
    }
    return this.fail("No Value Provided");
  }

  fail(message: string): IRuleResponse {
    return RuleResponse.fail(this.customMessage || message);
  }

  pass(): IRuleResponse {
    return RuleResponse.pass();
  }
}
