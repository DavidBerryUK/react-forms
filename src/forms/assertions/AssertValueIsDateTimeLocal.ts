import IRule from "../interfaces/rules/IRule";
import RuleBaseDateTime from "../models/RuleBaseDateTime";

export default class AssertValueIsDateTimeLocal extends RuleBaseDateTime implements IRule {
  constructor(customMessage?: string) {
    super(["dd/MM/yyyy HH:mm", "yyyy-MM-dd HH:mm"], customMessage);
  }
}
