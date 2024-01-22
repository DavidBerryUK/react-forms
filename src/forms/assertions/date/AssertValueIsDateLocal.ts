import AssertBaseDateTime from "../base/AssertBaseDateTime";
import EnumValidationStatus from "../../enums/EnumValidationStatus";
import IAssert from "../../interfaces/assertions/IAssert";

//
// Note, uses base class for IsValid()
//
export default class AssertValueIsDateLocal extends AssertBaseDateTime implements IAssert {
  constructor(customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    super(["dd/MM/yyyy", "yyyy-MM-dd"], customMessage, defaultValidationStatus);
  }
}
