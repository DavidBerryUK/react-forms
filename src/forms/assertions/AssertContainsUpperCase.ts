import IRule from "../interfaces/rules/IRule";
import RuleBaseContain from "../models/RuleBaseContain";

export default class AssertContainsUpperCase extends RuleBaseContain implements IRule {
  static readonly validChars = "ABCDEFGHIJKLMNOPQRSTUVWXYX";
  static readonly plural = "uppercase characters";
  static readonly singular = "uppercase character";

  constructor(minCount: number, maxCount: number, customMessage?: string) {
    super(minCount, maxCount, AssertContainsUpperCase.singular, AssertContainsUpperCase.plural, AssertContainsUpperCase.validChars, customMessage);
  }
}
