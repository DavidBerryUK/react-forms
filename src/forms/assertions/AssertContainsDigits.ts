import IRule from "../interfaces/IRule";
import RuleBaseContain from "../models/RuleBaseContain";

export default class AssertContainsDigits extends RuleBaseContain implements IRule {
  static readonly validChars = "0123456789";
  static readonly plural = "digits";
  static readonly singular = "digit";

  constructor(minCount: number, maxCount: number, customMessage?: string) {
    super(minCount, maxCount, AssertContainsDigits.singular, AssertContainsDigits.plural, AssertContainsDigits.validChars, customMessage);
  }
}
