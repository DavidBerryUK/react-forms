import EnumValidationStatus from "../enums/EnumValidationStatus";
import IFormField from "../interfaces/form/IFormField";
import IFormInstance from "../interfaces/form/IFormInstance";
import IFormSchema from "../interfaces/form/IFormSchema";
import IAssert from "../interfaces/assertions/IAssert";
import IAssertResponse from "../interfaces/assertions/IAssertResponse";
import AssertBase from "./base/AssertBase";

export default class AssertContainsNoWhiteSpaces extends AssertBase implements IAssert {
  private message: string;

  constructor(customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    super(customMessage, defaultValidationStatus);

    this.message = this.customMessage ?? "cannot contain spaces";
  }

  isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IAssertResponse {
    if (this.isValueEmpty(value)) {
      return this.fail(this.message);
    }

    const cleanedValue = value!.replace(/\s+/g, "");

    if (cleanedValue !== value) {
      return this.fail(this.message);
    }

    return this.pass();
  }
}
