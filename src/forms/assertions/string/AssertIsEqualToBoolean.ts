import AssertBase from "../base/AssertBase";
import EnumValidationStatus from "../../enums/EnumValidationStatus";
import IAssert from "../../interfaces/assertions/IAssert";
import IAssertResponse from "../../interfaces/assertions/IAssertResponse";
import IFormField from "../../interfaces/form/IFormField";
import IFormInstance from "../../interfaces/form/IFormInstance";
import IFormSchema from "../../interfaces/form/IFormSchema";
import StringUtility from "../../../formUI/utility/StringUtility";

export default class AssertIsEqualToBoolean extends AssertBase implements IAssert {
  private readonly constant: boolean;

  constructor(constant: boolean, customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    super(customMessage, defaultValidationStatus);
    this.constant = constant;
  }

  isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IAssertResponse {
    if (this.isValueEmpty(value)) {
      return this.default();
    }

    const booleanValue = StringUtility.toBoolean(value);

    if (booleanValue === this.constant) {
      return this.pass();
    }

    return this.fail(`must be equal to ${this.constant}`);
  }
}
