import IRule from "../../interfaces/IRule";
import AssertContainsDigits from "../../assertions/AssertContainsDigits";
import AssertContainsLowerCase from "../../assertions/AssertContainsLowerCase";
import AssertContainsNoWhiteSpaces from "../../assertions/AssertContainsNoWhiteSpaces";
import AssertContainsSymbols from "../../assertions/AssertContainsSymbols";
import AssertContainsUpperCase from "../../assertions/AssertContainsUpperCase";
import AssertDateMax from "../../assertions/AssertDateMax";
import AssertDateMin from "../../assertions/AssertDateMin";
import AssertIsEmpty from "../../assertions/AssertIsEmpty";
import AssertIsEqualTo from "../../assertions/AssertIsEqualTo";
import AssertIsMandatory from "../../assertions/AssertIsMandatory";
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

export default class GenericAssertMethodBuilder<T extends GenericAssertMethodBuilder<T>> {
  private _newAssertionCallback: (assertion: IRule) => void;

  constructor(updateCallback: (assertion: IRule) => void) {
    this._newAssertionCallback = updateCallback;
  }

  /****************************/
  /* Add Rules                */
  /****************************/
  addAssert(rule: IRule): T {
    this._newAssertionCallback(rule);
    return this as any as T;
  }

  addAssertions(rules: Array<IRule>): T {
    rules.forEach((rule) => this._newAssertionCallback(rule));
    return this as any as T;
  }

  /****************************/
  /* rules                    */
  /****************************/
  shouldBeDateLocal(customMessage?: string): T {
    this._newAssertionCallback(new AssertValueIsDateLocal(customMessage));
    return this as any as T;
  }

  shouldBeDateTimeLocal(customMessage?: string): T {
    this._newAssertionCallback(new AssertValueIsDateTimeLocal(customMessage));
    return this as any as T;
  }

  shouldBeDecimal(customMessage?: string): T {
    this._newAssertionCallback(new AssertValueIsDecimal(customMessage));
    return this as any as T;
  }

  shouldBeEmpty(customMessage?: string): T {
    this._newAssertionCallback(new AssertIsEmpty(customMessage));
    return this as any as T;
  }

  shouldBeInteger(customMessage?: string): T {
    this._newAssertionCallback(new AssertValueIsInteger(customMessage));
    return this as any as T;
  }

  shouldBeNoneZero(customMessage?: string): T {
    this._newAssertionCallback(new AssertValueIsNonZero(customMessage));
    return this as any as T;
  }

  shouldBePopulated(customMessage?: string): T {
    this._newAssertionCallback(new RuleAssertIsPopulated(customMessage));
    return this as any as T;
  }

  shouldBePositive(allowZero: boolean, customMessage?: string): T {
    this._newAssertionCallback(new AssertValueIsPositive(allowZero, customMessage));
    return this as any as T;
  }

  shouldBeTimeLocal(customMessage?: string): T {
    this._newAssertionCallback(new AssertValueIsTime(customMessage));
    return this as any as T;
  }

  shouldBeTrue(customMessage?: string): T {
    this._newAssertionCallback(new AssertValueIsTrue(customMessage));
    return this as any as T;
  }

  shouldBeUkPostCode(customMessage?: string): T {
    this._newAssertionCallback(new AssertPostCodeUK(customMessage));
    return this as any as T;
  }

  shouldBeZero(customMessage?: string): T {
    this._newAssertionCallback(new AssertValueIsZero(customMessage));
    return this as any as T;
  }

  shouldContainDigits(minCount: number, maxCount: number, customMessage?: string): T {
    this._newAssertionCallback(new AssertContainsDigits(minCount, maxCount, customMessage));
    return this as any as T;
  }

  shouldContainLowerCase(minCount: number, maxCount: number, customMessage?: string): T {
    this._newAssertionCallback(new AssertContainsLowerCase(minCount, maxCount, customMessage));
    return this as any as T;
  }

  shouldContainSymbols(minCount: number, maxCount: number, customMessage?: string): T {
    this._newAssertionCallback(new AssertContainsSymbols(minCount, maxCount, customMessage));
    return this as any as T;
  }

  shouldContainUpperCase(minCount: number, maxCount: number, customMessage?: string): T {
    this._newAssertionCallback(new AssertContainsUpperCase(minCount, maxCount, customMessage));
    return this as any as T;
  }

  shouldEqual(constant: string, caseInsensitive: boolean, customMessage?: string): T {
    this._newAssertionCallback(new AssertIsEqualTo(constant, caseInsensitive, customMessage));
    return this as any as T;
  }

  shouldHaveDateMax(maxDate: string, customMessage?: string): T {
    this._newAssertionCallback(new AssertDateMax(maxDate, customMessage));
    return this as any as T;
  }

  shouldHaveDateMin(minDate: string, customMessage?: string): T {
    this._newAssertionCallback(new AssertDateMin(minDate, customMessage));
    return this as any as T;
  }

  shouldHaveLengthBetween(minLength: number, maxLength: number, customMessage?: string): T {
    this._newAssertionCallback(new AssertLengthIsBetween(minLength, maxLength, customMessage));
    return this as any as T;
  }

  shouldHaveLengthMax(maxLength: number, customMessage?: string): T {
    this._newAssertionCallback(new AssertLengthMax(maxLength, customMessage));
    return this as any as T;
  }

  shouldHaveLengthMin(minLength: number, customMessage?: string): T {
    this._newAssertionCallback(new AssertLengthMin(minLength, customMessage));
    return this as any as T;
  }

  shouldHaveNoWhiteSpaces(customMessage?: string): T {
    this._newAssertionCallback(new AssertContainsNoWhiteSpaces(customMessage));
    return this as any as T;
  }

  shouldHaveValueBetween(minValue: number, maxValue: number, customMessage?: string): T {
    this._newAssertionCallback(new AssertValueIsBetween(minValue, maxValue, customMessage));
    return this as any as T;
  }

  shouldHaveValueMax(maxValue: number, customMessage?: string): T {
    this._newAssertionCallback(new AssertValueMax(maxValue, customMessage));
    return this as any as T;
  }

  shouldHaveValueMin(minValue: number, customMessage?: string): T {
    this._newAssertionCallback(new AssertValueMin(minValue, customMessage));
    return this as any as T;
  }

  mandatory(customMessage?: string): T {
    this._newAssertionCallback(new AssertIsMandatory(customMessage));
    return this as any as T;
  }
}
