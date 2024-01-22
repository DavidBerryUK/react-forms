import AssertBaseContain from "../base/AssertBaseContain";
import EnumValidationStatus from "../../enums/EnumValidationStatus";
import IAssert from "../../interfaces/assertions/IAssert";

export default class AssertContainsDigits extends AssertBaseContain implements IAssert {
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
