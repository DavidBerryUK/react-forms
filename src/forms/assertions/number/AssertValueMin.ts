import AssertBase from "../base/AssertBase";
import EnumValidationStatus from "../../enums/EnumValidationStatus";
import IAssert from "../../interfaces/assertions/IAssert";
import IAssertResponse from "../../interfaces/assertions/IAssertResponse";
import IFormField from "../../interfaces/form/IFormField";
import IFormInstance from "../../interfaces/form/IFormInstance";
import IFormSchema from "../../interfaces/form/IFormSchema";

export default class AssertValueMin extends AssertBase implements IAssert {
  private readonly minValue: number;

  constructor(minValue: number, customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    super(customMessage, defaultValidationStatus);
    this.minValue = minValue;
  }

  isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IAssertResponse {
    if (this.isValueEmpty(value)) {
      return this.pass();
    }

    var number = Number(value);

    if (isNaN(number)) {
      return this.fail("must be a valid number");
    }

    if (number < this.minValue) {
      return this.fail(`must be equal or greater than ${this.minValue}`);
    }

    return this.pass();
  }
}
