import { format, parse, isValid } from "date-fns";

export default class DateTimeUtility {
  static dateToDdMmYyyy(date: Date | null | undefined): string {
    if (date === undefined || date === null) {
      return "";
    }
    return format(date, "dd/MM/yyyy");
  }

  static dateToDdMmYyyyHhMm(date: Date | null | undefined): string {
    if (date === undefined || date === null) {
      return "";
    }
    return format(date, "dd/MM/yyyy HH:mm");
  }

  static stringDateToDate(value: Date | string | undefined | null): Date | undefined {
    if (value === undefined || value === null) {
      return undefined;
    }
    return new Date(value);
  }

  static dateStringToDdMmYyyy(dateString: string): string {
    return dateString ? format(new Date(dateString), "dd/MM/yyyy") : "";
  }

  static dateForInputBox(date: Date | string | undefined | null): string {
    if (date === undefined || date === null) {
      return "";
    }
    if (date instanceof Date) {
      return format(date, "yyyy-MM-dd");
    }
    const parsedDate = parse(date, "yyyy-MM-dd", new Date());
    const isValidDate = isValid(parsedDate);
    if (isValidDate) {
      return format(parsedDate, "yyyy-MM-dd");
    }
    return "";
  }

  static todayAsInputStringyyyyMMDD(): string {
    return format(new Date(), "yyyy-MM-dd");
  }

  static dateStringToHhMm(dateString: string): string {
    return dateString ? format(new Date(dateString), "HH:mm") : "";
  }

  static dateStringToDdMmYyyyHhMm(dateString: string): string {
    return dateString ? format(new Date(dateString), "dd/MM/yyyy HH:mm") : "";
  }

  static dateTimeInputStringToDate(inputString: string): Date {
    let date = parse(inputString, "yyyy-MM-dd HH:mm", new Date());

    // handle IE11 not supporting date inputs
    if (isNaN(date as any as number)) {
      date = parse(inputString, "dd/MM/yyyy HH:mm", new Date());
    }

    return date;
  }

  static dateInputStringToDate(inputString: string): Date {
    let date = parse(inputString, "yyyy-MM-dd", new Date());

    // handle IE11 not supporting date inputs
    if (isNaN(date as any as number)) {
      date = parse(inputString, "dd/MM/yyyy", new Date());
    }

    return date;
  }
}
