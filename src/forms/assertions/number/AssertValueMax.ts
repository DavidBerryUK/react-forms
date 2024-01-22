import AssertBase from "../base/AssertBase";
import EnumValidationStatus from "../../enums/EnumValidationStatus";
import IAssert from "../../interfaces/assertions/IAssert";
import IAssertResponse from "../../interfaces/assertions/IAssertResponse";
import IFormField from "../../interfaces/form/IFormField";
import IFormInstance from "../../interfaces/form/IFormInstance";
import IFormSchema from "../../interfaces/form/IFormSchema";

export default class AssertValueMax extends AssertBase implements IAssert {
  private maxValue: number;

  constructor(maxValue: number, customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    super(customMessage, defaultValidationStatus);
    this.maxValue = maxValue;
  }

  isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IAssertResponse {
    if (this.isValueEmpty(value)) {
      return this.pass();
    }

    const number = Number(value);

    if (isNaN(number)) {
      return this.fail("must be a valid number");
    }

    if (number > this.maxValue) {
      return this.fail(`must be equal or less than ${this.maxValue}`);
    }

    return this.pass();
  }
}
