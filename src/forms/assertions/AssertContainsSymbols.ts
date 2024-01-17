import IRule from "../interfaces/IRule";
import RuleBaseContain from "../models/RuleBaseContain";

export default class AssertContainsSymbols extends RuleBaseContain implements IRule {
  static readonly validChars = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  static readonly plural = "symbol characters";
  static readonly singular = "symbol character";

  constructor(minCount: number, maxCount: number, customMessage?: string) {
    super(minCount, maxCount, AssertContainsSymbols.singular, AssertContainsSymbols.plural, AssertContainsSymbols.validChars, customMessage);
  }
}
