import EnumValidationStatus from "../enums/EnumValidationStatus";
import RuleBaseDateTime from "./base/RuleBaseDateTime";

export default class AssertValueIsTime extends RuleBaseDateTime {
  constructor(customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    super(["HH:mm"], customMessage, defaultValidationStatus);
  }
}
