import { enGB } from "date-fns/locale";
import { isValid, parse } from "date-fns";
import DateParseResponse from "../../models/DateParseResponse";
import EnumValidationStatus from "../../enums/EnumValidationStatus";
import IFormField from "../../interfaces/form/IFormField";
import IFormInstance from "../../interfaces/form/IFormInstance";
import IFormSchema from "../../interfaces/form/IFormSchema";
import IAssert from "../../interfaces/assertions/IAssert";
import IAssertResponse from "../../interfaces/assertions/IAssertResponse";
import AssertBase from "./AssertBase";

export default class AssertBaseDateTime extends AssertBase implements IAssert {
  formats: string[];

  constructor(formats: string[], customMessage?: string, defaultValidationStatus?: EnumValidationStatus) {
    super(customMessage, defaultValidationStatus);
    this.formats = formats;
  }

  isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IAssertResponse {
    if (this.isValueEmpty(value)) {
      return this.pass();
    }

    var result = this.parseMultipleFormats(value);

    if (!result.success) {
      return this.fail(this.formatErrorMessage());
    }
    return this.pass();
  }

  parseMultipleFormats(value: string): DateParseResponse {
    for (let f = 0, fl = this.formats.length; f < fl; f++) {
      const parsedDated = parse(value, this.formats[f], new Date(), { locale: enGB });
      if (isValid(parsedDated)) {
        return new DateParseResponse(value, true, parsedDated, this.formats[f]);
      }
    }
    return new DateParseResponse(value, false);
  }

  formatErrorMessage(): string {
    if (this.customMessage !== undefined && this.customMessage !== null && this.customMessage !== "") {
      return this.customMessage;
    }
    var isDate = this.formats.filter((item) => item.toLocaleLowerCase().includes("dd")).length > 0;
    var isTime = this.formats.filter((item) => item.toLocaleLowerCase().includes("hh")).length > 0;
    var formatType = "value";
    if (isDate && isTime) {
      formatType = "date time";
    } else {
      if (isDate === true) {
        formatType = "date";
      } else if (isTime === true) {
        formatType = "time";
      }
    }

    if (this.formats.length === 0) {
      return "No valid formatters specified on the rule";
    }

    if (this.formats.length === 1) {
      return `must be a valid ${formatType} in the format ${this.formats[0]}`;
    }

    if (this.formats.length === 2) {
      return `must be a valid ${formatType} in the format ${this.formats[0]} or ${this.formats[1]}`;
    }

    if (this.formats.length === 3) {
      return `must be a valid ${formatType} in the format ${this.formats[0]}, ${this.formats[1]} or ${this.formats[2]}`;
    }

    return `must be a valid ${formatType} in the format ${this.formats.join(",")}`;
  }
}
