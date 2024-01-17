import RuleBaseDateTime from "../models/RuleBaseDateTime";

export default class AssertValueIsTime extends RuleBaseDateTime {
  constructor(customMessage?: string) {
    super(["HH:mm"], customMessage);
  }
}
