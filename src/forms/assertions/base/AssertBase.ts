import AssertResponse from "../../assert/AssertResponse";
import EnumValidationStatus from "../../enums/EnumValidationStatus";
import IAssertResponse from "../../interfaces/assertions/IAssertResponse";

export default class AssertBase {
  public readonly customMessage?: string;
  private readonly defaultValidationStatus: EnumValidationStatus;

  constructor(customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    this.customMessage = customMessage;
    this.defaultValidationStatus = defaultValidationStatus || EnumValidationStatus.pass;
  }

  isValueEmpty(value: string | number | Date | undefined | null): boolean {
    if (value === undefined || value === null) {
      return true;
    }
    if (typeof value === "string" && value.trim().length === 0) {
      return true;
    }

    return false;
  }

  default() {
    if (this.defaultValidationStatus === EnumValidationStatus.pass) {
      return this.pass();
    }
    return this.fail("No Value Provided");
  }

  fail(message: string): IAssertResponse {
    return AssertResponse.fail(this.customMessage || message);
  }

  pass(): IAssertResponse {
    return AssertResponse.pass();
  }
}
