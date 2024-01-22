import AssertBase from "../base/AssertBase";
import EnumValidationStatus from "../../enums/EnumValidationStatus";
import IAssert from "../../interfaces/assertions/IAssert";
import IAssertResponse from "../../interfaces/assertions/IAssertResponse";
import IFormField from "../../interfaces/form/IFormField";
import IFormInstance from "../../interfaces/form/IFormInstance";
import IFormSchema from "../../interfaces/form/IFormSchema";

//
// will validate either integers or decimal, if you require
// further checks on types, then include AssertDecimal or AssertInteger
// in the assertions collection
//
export default class AssertValueIsBetween extends AssertBase implements IAssert {
  private readonly minValue: number;
  private readonly maxValue: number;

  constructor(minValue: number, maxValue: number, customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    super(customMessage, defaultValidationStatus);
    this.minValue = minValue;
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

    if (number < this.minValue || number > this.maxValue) {
      return this.fail(`must be between ${this.minValue} and ${this.maxValue}`);
    }

    return this.pass();
  }
}
