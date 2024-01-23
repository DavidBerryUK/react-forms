import AssertBase from "../base/AssertBase";
import EnumValidationStatus from "../../enums/EnumValidationStatus";
import IAssert from "../../interfaces/assertions/IAssert";
import IAssertResponse from "../../interfaces/assertions/IAssertResponse";
import IFormField from "../../interfaces/form/IFormField";
import IFormInstance from "../../interfaces/form/IFormInstance";
import IFormSchema from "../../interfaces/form/IFormSchema";

export default class AssertIsEqualTo extends AssertBase implements IAssert {
  private readonly constant: string;
  private readonly caseInsensitive: boolean;

  constructor(constant: string, caseInsensitive?: boolean, customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    super(customMessage, defaultValidationStatus);
    this.constant = constant;
    this.caseInsensitive = caseInsensitive ?? false;

    if (caseInsensitive) {
      this.constant = this.constant.toLocaleLowerCase();
    }
  }

  isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IAssertResponse {
    if (this.isValueEmpty(value)) {
      return this.default();
    }

    if (this.caseInsensitive === true) {
      if (value.toLocaleLowerCase() === this.constant) {
        return this.pass();
      }
    }

    if (this.caseInsensitive === false) {
      if (value === this.constant) {
        return this.pass();
      }
    }

    return this.fail(`must be equal to '${this.constant}'`);
  }
}
