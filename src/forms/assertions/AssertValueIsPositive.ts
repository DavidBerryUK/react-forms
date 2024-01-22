import EnumValidationStatus from "../enums/EnumValidationStatus";
import IFormField from "../interfaces/form/IFormField";
import IFormInstance from "../interfaces/form/IFormInstance";
import IFormSchema from "../interfaces/form/IFormSchema";
import IAssert from "../interfaces/assertions/IAssert";
import IAssertResponse from "../interfaces/assertions/IAssertResponse";
import AssertBase from "./base/AssertBase";

export default class AssertValueIsPositive extends AssertBase implements IAssert {
  private readonly allowZero: boolean;

  constructor(allowZero: boolean, customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    super(customMessage, defaultValidationStatus);
    this.allowZero = allowZero;
  }

  isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IAssertResponse {
    if (this.isValueEmpty(value)) {
      return this.pass();
    }

    const number = Number(value);

    if (!isNaN(number)) {
      if (this.allowZero) {
        if (number >= 0) {
          return this.pass();
        }
      } else {
        if (number > 0) {
          return this.pass();
        }
      }
    }

    if (this.allowZero) {
      return this.fail(`must be positive or zero`);
    }
    return this.fail(`must be positive`);
  }
}
