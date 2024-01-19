export default class BooleanUtility {
  static booleanToYesNo(bool: boolean, nullishToEmptyString: boolean): string {
    if (nullishToEmptyString && (bool === null || bool === undefined)) {
      return "";
    }

    return bool ? "Yes" : "No";
  }
}
