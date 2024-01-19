export default class TextNumberFormatter {
  //
  // formatting with string manipulation as was getting rounding errors using maths
  // e.g. 19.99 would resolve as 19.98 and 16.99 => 16.98
  // (see unit tests)
  static formatter2dp(text: string, allowBlankNumbers: boolean | undefined = false): string {
    let value = 0;

    if (text !== undefined && text !== null) {
      const trimmedText = text.trim();
      if (allowBlankNumbers === true && trimmedText.length === 0) {
        return "";
      }

      if (allowBlankNumbers === false && trimmedText.length === 0) {
        return "0.00";
      }

      if (trimmedText.length > 0) {
        value = Number(text);
        if (isNaN(value)) {
          return "0.00";
        }
      }
    }

    const parts = text.split(".");
    const count = parts.length;

    if (count === 0) {
      return "0.00";
    }

    //
    // remove leading zero's
    //
    while (parts[0].startsWith("0") && parts[0].length > 1) {
      parts[0] = parts[0].substring(1);
    }

    //
    // no fraction provided
    //
    if (count === 1) {
      return `${parts[0]}.00`;
    }

    //
    // combine integer and fraction
    //
    return parts[0] + "." + `${parts[1]}000`.substring(0, 2);
  }

  static formatInteger(text: string, allowBlankNumbers: boolean | undefined = false): string {
    let value = 0;
    if (text !== undefined && text !== null) {
      const trimmedText = text.trim();
      if (allowBlankNumbers === true && trimmedText.length === 0) {
        return "";
      }

      if (trimmedText.length > 0) {
        value = Number(text);
        if (isNaN(value)) {
          value = 0;
        }
      }
    }
    return Math.floor(value).toFixed(0);
  }
}
