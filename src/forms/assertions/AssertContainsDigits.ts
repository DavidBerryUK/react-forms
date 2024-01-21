import EnumValidationStatus from "../enums/EnumValidationStatus";
import IRule from "../interfaces/rules/IRule";
import RuleBaseContain from "./base/RuleBaseContain";

export default class AssertContainsDigits extends RuleBaseContain implements IRule {
  static readonly validChars = "0123456789";
  static readonly plural = "digits";
  static readonly singular = "digit";

  constructor(minCount: number, maxCount: number, customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    super(
      minCount,
      maxCount,
      AssertContainsDigits.singular,
      AssertContainsDigits.plural,
      AssertContainsDigits.validChars,
      customMessage,
      defaultValidationStatus
    );
  }
}
