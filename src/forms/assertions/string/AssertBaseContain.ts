import AssertBase from "../base/AssertBase";
import EnumValidationStatus from "../../enums/EnumValidationStatus";
import IAssert from "../../interfaces/assertions/IAssert";
import IAssertResponse from "../../interfaces/assertions/IAssertResponse";
import IFormField from "../../interfaces/form/IFormField";
import IFormInstance from "../../interfaces/form/IFormInstance";
import IFormSchema from "../../interfaces/form/IFormSchema";

//
// this is tested extensively by the AssertContainsDigits.spec.ts test suite
//
export default class AssertBaseContain extends AssertBase implements IAssert {
  private readonly minCount: number;
  private readonly maxCount: number;
  private readonly validChars: string;
  private readonly plural: string;
  private readonly singular: string;

  constructor(
    minCount: number,
    maxCount: number,
    singular: string,
    plural: string,
    validChars: string,
    customMessage?: string,
    defaultValidationStatus?: EnumValidationStatus
  ) {
    super(customMessage, defaultValidationStatus);
    this.minCount = minCount;
    this.maxCount = maxCount;
    this.validChars = validChars;
    this.singular = singular;
    this.plural = plural;
  }

  isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IAssertResponse {
    if (this.isValueEmpty(value)) {
      return this.default();
    }

    const count = value.split("").filter((c) => this.validChars.indexOf(c) >= 0).length;

    if (count < this.minCount) {
      if (this.minCount === 1) {
        if (this.maxCount === 1) {
          return this.fail(`must contain 1 ${this.singular}`);
        }
        return this.fail(`must contain at least 1 ${this.singular}`);
      }
      return this.fail(`must contain at least ${this.minCount} ${this.plural}`);
    }
    if (count > this.maxCount) {
      if (this.maxCount === 0) {
        return this.fail(`must contain no ${this.plural}`);
      } else if (this.maxCount === 1) {
        if (this.minCount === 1) {
          return this.fail(`must contain 1 ${this.singular}`);
        } else {
          return this.fail(`must contain a maximum 1 ${this.singular}`);
        }
      }
      return this.fail(`must contain no more than ${this.maxCount} ${this.plural}`);
    }

    return this.pass();
  }
}
