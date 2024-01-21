import EnumValidationStatus from "../enums/EnumValidationStatus";
import IRule from "../interfaces/rules/IRule";
import RuleBaseDateTime from "./base/RuleBaseDateTime";

//
// Note, uses base class for IsValid()
//
export default class AssertValueIsDateLocal extends RuleBaseDateTime implements IRule {
  constructor(customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    super(["dd/MM/yyyy", "yyyy-MM-dd"], customMessage, defaultValidationStatus);
  }
}
