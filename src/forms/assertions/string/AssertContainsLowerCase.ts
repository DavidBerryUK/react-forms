import AssertBaseContain from "../base/AssertBaseContain";
import EnumValidationStatus from "../../enums/EnumValidationStatus";
import IAssert from "../../interfaces/assertions/IAssert";

export default class AssertContainsLowerCase extends AssertBaseContain implements IAssert {
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
