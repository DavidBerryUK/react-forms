import EnumValidationStatus from "../enums/EnumValidationStatus";
import IAssert from "../interfaces/assertions/IAssert";
import AssertBaseContain from "./base/AssertBaseContain";

export default class AssertContainsSymbols extends AssertBaseContain implements IAssert {
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
