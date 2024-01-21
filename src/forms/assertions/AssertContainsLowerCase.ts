import EnumValidationStatus from "../enums/EnumValidationStatus";
import IRule from "../interfaces/rules/IRule";
import RuleBaseContain from "./base/RuleBaseContain";

export default class AssertContainsLowerCase extends RuleBaseContain implements IRule {
  static readonly validChars = "abcdefghijklmnopqrstuvwxyx";
  static readonly plural = "lowercase characters";
  static readonly singular = "lowercase character";

  constructor(minCount: number, maxCount: number, customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    super(
      minCount,
      maxCount,
      AssertContainsLowerCase.singular,
      AssertContainsLowerCase.plural,
      AssertContainsLowerCase.validChars,
      customMessage,
      defaultValidationStatus
    );
  }
}
