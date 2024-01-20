import IRule from "../interfaces/rules/IRule";
import RuleBaseDateTime from "../models/RuleBaseDateTime";

//
// Note, uses base class for IsValid()
//
export default class AssertValueIsDateLocal extends RuleBaseDateTime implements IRule {
  constructor(customMessage?: string) {
    super(["dd/MM/yyyy", "yyyy-MM-dd"], customMessage);
  }
}
