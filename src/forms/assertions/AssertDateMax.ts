import { format, isBefore } from "date-fns";
import DateParseResponse from "../models/DateParseResponse";
import EnumValidationStatus from "../enums/EnumValidationStatus";
import IFormField from "../interfaces/form/IFormField";
import IFormInstance from "../interfaces/form/IFormInstance";
import IFormSchema from "../interfaces/form/IFormSchema";
import IRule from "../interfaces/rules/IRule";
import IRuleResponse from "../interfaces/rules/IRuleResponse";
import RuleBaseDateTime from "./base/RuleBaseDateTime";

//
// works with date or date time, or times
//
export default class AssertDateMax extends RuleBaseDateTime implements IRule {
  private readonly minDate: DateParseResponse;
  private readonly constantMaxDate: string;

  constructor(minDate: string, customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    super(["dd/MM/yyyy", "yyyy-MM-dd", "dd/MM/yyyy HH:mm", "yyyy-MM-dd HH:mm", "HH:mm"], customMessage, defaultValidationStatus);
    this.constantMaxDate = minDate;
    this.minDate = this.parseMultipleFormats(minDate);
  }

  isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IRuleResponse {
    if (this.isValueEmpty(value)) {
      return this.pass();
    }

    //
    // validate constant min date,
    //
    if (!this.minDate.success) {
      return this.fail(`MinDate validation rule has invalid constant date of ${this.constantMaxDate}`);
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
