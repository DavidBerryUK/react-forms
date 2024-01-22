import { format, isBefore } from "date-fns";
import AssertBaseDateTime from "../base/AssertBaseDateTime";
import DateParseResponse from "../../models/DateParseResponse";
import EnumValidationStatus from "../../enums/EnumValidationStatus";
import IAssert from "../../interfaces/assertions/IAssert";
import IAssertResponse from "../../interfaces/assertions/IAssertResponse";
import IFormField from "../../interfaces/form/IFormField";
import IFormInstance from "../../interfaces/form/IFormInstance";
import IFormSchema from "../../interfaces/form/IFormSchema";

//
// works with date or date time, or times
//
export default class AssertDateMax extends AssertBaseDateTime implements IAssert {
  private readonly minDate: DateParseResponse;
  private readonly constantMaxDate: string;

  constructor(minDate: string, customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    super(["dd/MM/yyyy", "yyyy-MM-dd", "dd/MM/yyyy HH:mm", "yyyy-MM-dd HH:mm", "HH:mm"], customMessage, defaultValidationStatus);
    this.constantMaxDate = minDate;
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
      return this.fail(`MinDate validation assertion has invalid constant date of ${this.constantMaxDate}`);
    }

    //
    // parse and validate input date / time
    //
    let inputDate = this.parseMultipleFormats(value);
    if (!inputDate.success) {
      return this.fail(this.formatErrorMessage());
    }

    if (isBefore(this.minDate.result!, inputDate.result!)) {
      return this.fail(`must not be a date after ${format(this.minDate.result!, inputDate.matchingFormat!)}`);
    }

    return this.pass();
  }
}
