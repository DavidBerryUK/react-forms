import AssertBase from "../base/AssertBase";
import EnumValidationStatus from "../../enums/EnumValidationStatus";
import IAssert from "../../interfaces/assertions/IAssert";
import IAssertResponse from "../../interfaces/assertions/IAssertResponse";
import IFormField from "../../interfaces/form/IFormField";
import IFormInstance from "../../interfaces/form/IFormInstance";
import IFormSchema from "../../interfaces/form/IFormSchema";
import StringUtility from "../../../formUI/utility/StringUtility";

export default class AssertIsNotEqualToNumber extends AssertBase implements IAssert {
  private readonly constant: number;
  private readonly tolerance?: number;

  constructor(constant: number, tolerance?: number, customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    super(customMessage, defaultValidationStatus);
    this.constant = constant;
    this.tolerance = tolerance;
  }

  isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IAssertResponse {
    if (this.isValueEmpty(value)) {
      return this.default();
    }

    const numberValue = StringUtility.toNumber(value);

    if (numberValue === null) {
      return this.default();
    }

    if (this.tolerance === undefined) {
      if (numberValue !== this.constant) {
        return this.pass();
      }
    } else {
      if (Math.abs(numberValue - this.constant) > this.tolerance) {
        return this.pass();
      }
    }

    return this.fail(`must not be equal to ${this.constant}`);
  }
}
