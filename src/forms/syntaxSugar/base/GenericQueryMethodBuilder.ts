import IRule from "../../interfaces/rules/IRule";
import AssertContainsDigits from "../../assertions/AssertContainsDigits";
import AssertContainsLowerCase from "../../assertions/AssertContainsLowerCase";
import AssertContainsNoWhiteSpaces from "../../assertions/AssertContainsNoWhiteSpaces";
import AssertContainsSymbols from "../../assertions/AssertContainsSymbols";
import AssertContainsUpperCase from "../../assertions/AssertContainsUpperCase";
import AssertDateMax from "../../assertions/AssertDateMax";
import AssertDateMin from "../../assertions/AssertDateMin";
import AssertIsEmpty from "../../assertions/AssertIsEmpty";
import AssertIsEqualTo from "../../assertions/AssertIsEqualTo";
import AssertLengthIsBetween from "../../assertions/AssertLengthIsBetween";
import AssertLengthMax from "../../assertions/AssertLengthMax";
import AssertLengthMin from "../../assertions/AssertLengthMin";
import AssertPostCodeUK from "../../assertions/AssertPostCodeUk";
import AssertValueIsBetween from "../../assertions/AssertValueIsBetween";
import AssertValueIsDateLocal from "../../assertions/AssertValueIsDateLocal";
import AssertValueIsDateTimeLocal from "../../assertions/AssertValueIsDateTimeLocal";
import AssertValueIsDecimal from "../../assertions/AssertValueIsDecimal";
import AssertValueIsInteger from "../../assertions/AssertValueIsInteger";
import AssertValueIsNonZero from "../../assertions/AssertValueIsNonZero";
import AssertValueIsPositive from "../../assertions/AssertValueIsPositive";
import AssertValueIsTime from "../../assertions/AssertValueIsTime";
import AssertValueIsTrue from "../../assertions/AssertValueIsTrue";
import AssertValueIsZero from "../../assertions/AssertValueIsZero";
import AssertValueMax from "../../assertions/AssertValueMax";
import AssertValueMin from "../../assertions/AssertValueMin";
import RuleAssertIsPopulated from "../../assertions/AssertIsPopulated";

export default class GenericQueryMethodBuilder<T extends GenericQueryMethodBuilder<T>> {
  private _newAssertion: (assertion: IRule) => void;

  constructor(newAssertionCallback: (assertion: IRule) => void) {
    this._newAssertion = newAssertionCallback;
  }

  /****************************/
  /* rules                    */
  /****************************/
  ifIsPopulated(customMessage?: string): T {
    this._newAssertion(new RuleAssertIsPopulated(customMessage));
    return this as any as T;
  }

  ifContainsDigits(minCount: number, maxCount: number, customMessage?: string): T {
    this._newAssertion(new AssertContainsDigits(minCount, maxCount, customMessage));
    return this as any as T;
  }

  ifContainsLowerCase(minCount: number, maxCount: number, customMessage?: string): T {
    this._newAssertion(new AssertContainsLowerCase(minCount, maxCount, customMessage));
    return this as any as T;
  }

  ifContainsSymbols(minCount: number, maxCount: number, customMessage?: string): T {
    this._newAssertion(new AssertContainsSymbols(minCount, maxCount, customMessage));
    return this as any as T;
  }

  ifContainsUpperCase(minCount: number, maxCount: number, customMessage?: string): T {
    this._newAssertion(new AssertContainsUpperCase(minCount, maxCount, customMessage));
    return this as any as T;
  }

  ifIsDateLocal(customMessage?: string): T {
    this._newAssertion(new AssertValueIsDateLocal(customMessage));
    return this as any as T;
  }

  ifIsDateTimeLocal(customMessage?: string): T {
    this._newAssertion(new AssertValueIsDateTimeLocal(customMessage));
    return this as any as T;
  }

  ifIsTimeLocal(customMessage?: string): T {
    this._newAssertion(new AssertValueIsTime(customMessage));
    return this as any as T;
  }

  ifIsDecimal(customMessage?: string): T {
    this._newAssertion(new AssertValueIsDecimal(customMessage));
    return this as any as T;
  }

  ifIsInteger(customMessage?: string): T {
    this._newAssertion(new AssertValueIsInteger(customMessage));
    return this as any as T;
  }

  ifIsEmpty(customMessage?: string): T {
    this._newAssertion(new AssertIsEmpty(customMessage));
    return this as any as T;
  }

  ifIsNoneZero(customMessage?: string): T {
    this._newAssertion(new AssertValueIsNonZero(customMessage));
    return this as any as T;
  }

  ifIsZero(customMessage?: string): T {
    this._newAssertion(new AssertValueIsZero(customMessage));
    return this as any as T;
  }

  ifIsTrue(customMessage?: string): T {
    this._newAssertion(new AssertValueIsTrue(customMessage));

    return this as any as T;
  }

  ifIsPositive(allowZero: boolean, customMessage?: string): T {
    this._newAssertion(new AssertValueIsPositive(allowZero, customMessage));

    return this as any as T;
  }

  // isNegative(customMessage?: string) : SchemaBaseAssertBuilder {

  //
  //     this._updateCallback(//     new ruleNegative(customMessag);
  //  }
  //     return this as any as T;
  // }

  ifUkPostCode(customMessage?: string): T {
    this._newAssertion(new AssertPostCodeUK(customMessage));

    return this as any as T;
  }

  ifHaveLengthLessOrEqual(minLength: number, customMessage?: string): T {
    this._newAssertion(new AssertLengthMin(minLength, customMessage));

    return this as any as T;
  }

  ifLengthGreaterOrEqual(maxLength: number, customMessage?: string): T {
    this._newAssertion(new AssertLengthMax(maxLength, customMessage));

    return this as any as T;
  }

  ifHaveLengthBetween(minLength: number, maxLength: number, customMessage?: string): T {
    this._newAssertion(new AssertLengthIsBetween(minLength, maxLength, customMessage));

    return this as any as T;
  }

  ifHaveValueMin(minValue: number, customMessage?: string): T {
    this._newAssertion(new AssertValueMin(minValue, customMessage));

    return this as any as T;
  }

  ifHaveValueMax(maxValue: number, customMessage?: string): T {
    this._newAssertion(new AssertValueMax(maxValue, customMessage));

    return this as any as T;
  }

  ifHaveValueBetween(minValue: number, maxValue: number, customMessage?: string): T {
    this._newAssertion(new AssertValueIsBetween(minValue, maxValue, customMessage));
    return this as any as T;
  }

  ifHaveDateMin(minDate: string, customMessage?: string): T {
    this._newAssertion(new AssertDateMin(minDate, customMessage));
    return this as any as T;
  }

  ifHaveDateMax(maxDate: string, customMessage?: string): T {
    this._newAssertion(new AssertDateMax(maxDate, customMessage));
    return this as any as T;
  }

  // dateBetween(minDate: string,maxDate: string, customMessage?: string): SchemaBaseAssertBuilder {

  //
  //     this._updateCallback(//     new RuleDateBetween(minDate,maxDate, customMessage));
  //  }
  //     return this as any as T;
  // }

  ifIsHaveNoWhiteSpaces(customMessage?: string): T {
    this._newAssertion(new AssertContainsNoWhiteSpaces(customMessage));
    return this as any as T;
  }

  ifIsEqual(constant: string, caseInsensitive: boolean, customMessage?: string): T {
    this._newAssertion(new AssertIsEqualTo(constant, caseInsensitive, customMessage));
    return this as any as T;
  }

  /****************************/
  /* Add Rules                */
  /****************************/
  addAssert(rule: IRule): T {
    this._newAssertion(rule);
    return this as any as T;
  }

  addAssertions(rules: Array<IRule>): T {
    rules.forEach((rule) => this._newAssertion(rule));
    return this as any as T;
  }
}
