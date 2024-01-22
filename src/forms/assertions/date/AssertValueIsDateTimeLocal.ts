import EnumValidationStatus from "../../enums/EnumValidationStatus";
import IAssert from "../../interfaces/assertions/IAssert";
import AssertBaseDateTime from "./AssertBaseDateTime";

export default class AssertValueIsDateTimeLocal extends AssertBaseDateTime implements IAssert {
  constructor(customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    super(["dd/MM/yyyy HH:mm", "yyyy-MM-dd HH:mm"], customMessage, defaultValidationStatus);
  }
}
