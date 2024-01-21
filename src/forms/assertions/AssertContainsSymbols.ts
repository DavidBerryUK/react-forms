import EnumValidationStatus from "../enums/EnumValidationStatus";
import IRule from "../interfaces/rules/IRule";
import RuleBaseContain from "./base/RuleBaseContain";

export default class AssertContainsSymbols extends RuleBaseContain implements IRule {
  static readonly validChars = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  static readonly plural = "symbol characters";
  static readonly singular = "symbol character";

  constructor(minCount: number, maxCount: number, customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    super(
      minCount,
      maxCount,
      AssertContainsSymbols.singular,
      AssertContainsSymbols.plural,
      AssertContainsSymbols.validChars,
      customMessage,
      defaultValidationStatus
    );
  }
}
