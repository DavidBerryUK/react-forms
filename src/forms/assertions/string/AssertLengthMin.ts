import AssertBase from "../base/AssertBase";
import EnumValidationStatus from "../../enums/EnumValidationStatus";
import IAssert from "../../interfaces/assertions/IAssert";
import IAssertResponse from "../../interfaces/assertions/IAssertResponse";
import IFormField from "../../interfaces/form/IFormField";
import IFormInstance from "../../interfaces/form/IFormInstance";
import IFormSchema from "../../interfaces/form/IFormSchema";

export default class AssertLengthMin extends AssertBase implements IAssert {
  private readonly minLength: number;

  constructor(minLength: number, customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    super(customMessage, defaultValidationStatus);
    this.minLength = minLength;
  }

  isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IAssertResponse {
    if (this.isValueEmpty(value)) {
      return this.pass();
    }

    if (value.length >= this.minLength) {
      return this.pass();
    }

    return this.fail(`must be greater or equal to ${this.minLength} characters`);
  }
}
