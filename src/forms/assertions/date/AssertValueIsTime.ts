import EnumValidationStatus from "../../enums/EnumValidationStatus";
import AssertBaseDateTime from "../base/AssertBaseDateTime";

export default class AssertValueIsTime extends AssertBaseDateTime {
  constructor(customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    super(["HH:mm"], customMessage, defaultValidationStatus);
  }
}
