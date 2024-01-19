export default class NumberArrayHelper {
  // Quick helper functions to assist managing a simple
  // numeric array
  //
  static add(array: Array<number>, value: number): Array<number> {
    if (array.indexOf(value) >= 0) {
      return array;
    }
    array.push(value);
    return array;
  }

  static remove(array: Array<number>, value: number) {
    array = array.filter((item) => item !== value);
    return array;
  }
}
