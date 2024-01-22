import AssertBase from "../base/AssertBase";
import EnumValidationStatus from "../../enums/EnumValidationStatus";
import IAssert from "../../interfaces/assertions/IAssert";
import IAssertResponse from "../../interfaces/assertions/IAssertResponse";
import IFormField from "../../interfaces/form/IFormField";
import IFormInstance from "../../interfaces/form/IFormInstance";
import IFormSchema from "../../interfaces/form/IFormSchema";

export default class AssertLengthIsBetween extends AssertBase implements IAssert {
  private readonly minLength: number;
  private readonly maxLength: number;

  constructor(minLength: number, maxLength: number, customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    super(customMessage, defaultValidationStatus);
    this.minLength = minLength;
    this.maxLength = maxLength;
  }

  isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IAssertResponse {
    if (this.isValueEmpty(value)) {
      return this.pass();
    }

    if (value.length >= this.minLength && value.length <= this.maxLength) {
      return this.pass();
    }

    return this.fail(`must be between ${this.minLength} and ${this.maxLength} characters`);
  }
}
