import EnumValidationStatus from "../enums/EnumValidationStatus";
import IRule from "../interfaces/rules/IRule";
import RuleBaseDateTime from "./base/RuleBaseDateTime";

export default class AssertValueIsDateTimeLocal extends RuleBaseDateTime implements IRule {
  constructor(customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    super(["dd/MM/yyyy HH:mm", "yyyy-MM-dd HH:mm"], customMessage, defaultValidationStatus);
  }
}
