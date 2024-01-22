import { format, isAfter } from "date-fns";
import DateParseResponse from "../models/DateParseResponse";
import EnumValidationStatus from "../enums/EnumValidationStatus";
import IFormField from "../interfaces/form/IFormField";
import IFormInstance from "../interfaces/form/IFormInstance";
import IFormSchema from "../interfaces/form/IFormSchema";
import IAssert from "../interfaces/assertions/IAssert";
import IAssertResponse from "../interfaces/assertions/IAssertResponse";
import AssertBaseDateTime from "./base/AssertBaseDateTime";

//
// works with date or date time, or times
//
export default class AssertDateMin extends AssertBaseDateTime implements IAssert {
  private readonly minDate: DateParseResponse;
  private readonly constantMinDate: string;

  constructor(minDate: string, customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    super(["dd/MM/yyyy", "yyyy-MM-dd", "dd/MM/yyyy HH:mm", "yyyy-MM-dd HH:mm", "HH:mm"], customMessage, defaultValidationStatus);
    this.constantMinDate = minDate;
    this.minDate = this.parseMultipleFormats(minDate);
  }

  isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IAssertResponse {
    if (this.isValueEmpty(value)) {
      return this.pass();
    }

    //
    // validate constant min date,
    //
    if (!this.minDate.success) {
      return this.fail(`MinDate validation assertion has invalid constant date of ${this.constantMinDate}`);
    }

    //
    // parse and validate input date / time
    //
    let inputDate = this.parseMultipleFormats(value);
    if (!inputDate.success) {
      return this.fail(this.formatErrorMessage());
    }

    if (isAfter(this.minDate.result!, inputDate.result!)) {
      return this.fail(`must not be a date before ${format(this.minDate.result!, inputDate.matchingFormat!)}`);
    }

    return this.pass();
  }
}
