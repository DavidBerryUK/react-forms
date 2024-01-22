import AssertBaseContain from "../base/AssertBaseContain";
import EnumValidationStatus from "../../enums/EnumValidationStatus";
import IAssert from "../../interfaces/assertions/IAssert";

export default class AssertContainsUpperCase extends AssertBaseContain implements IAssert {
  static readonly validChars = "ABCDEFGHIJKLMNOPQRSTUVWXYX";
  static readonly plural = "uppercase characters";
  static readonly singular = "uppercase character";

  constructor(minCount: number, maxCount: number, customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    super(
      minCount,
      maxCount,
      AssertContainsUpperCase.singular,
      AssertContainsUpperCase.plural,
      AssertContainsUpperCase.validChars,
      customMessage,
      defaultValidationStatus
    );
  }
}
