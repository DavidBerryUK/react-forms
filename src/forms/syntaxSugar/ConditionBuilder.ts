import AssertContainsDigits from "../assertions/AssertContainsDigits";
import AssertContainsLowerCase from "../assertions/AssertContainsLowerCase";
import AssertContainsNoWhiteSpaces from "../assertions/AssertContainsNoWhiteSpaces";
import AssertContainsSymbols from "../assertions/AssertContainsSymbols";
import AssertContainsUpperCase from "../assertions/AssertContainsUpperCase";
import AssertDateMax from "../assertions/AssertDateMax";
import AssertDateMin from "../assertions/AssertDateMin";
import AssertIsDateTimeLocal from "../assertions/AssertValueIsDateTimeLocal";
import AssertIsEmpty from "../assertions/AssertIsEmpty";
import AssertIsEqualTo from "../assertions/AssertIsEqualTo";
import AssertIsPopulated from "../assertions/AssertIsPopulated";
import AssertLengthIsBetween from "../assertions/AssertLengthIsBetween";
import AssertLengthMax from "../assertions/AssertLengthMax";
import AssertPostCodeUK from "../assertions/AssertPostCodeUk";
import AssertValueIsBetween from "../assertions/AssertValueIsBetween";
import AssertValueIsDateLocal from "../assertions/AssertValueIsDateLocal";
import AssertValueIsDecimal from "../assertions/AssertValueIsDecimal";
import AssertValueIsFalse from "../assertions/AssertValueIsFalse";
import AssertValueIsInteger from "../assertions/AssertValueIsInteger";
import AssertValueIsNonZero from "../assertions/AssertValueIsNonZero";
import AssertValueIsTrue from "../assertions/AssertValueIsTrue";
import AssertValueIsZero from "../assertions/AssertValueIsZero";
import AssertValueMax from "../assertions/AssertValueMax";
import AssertValueMin from "../assertions/AssertValueMin";
import IRule from "../interfaces/IRule";
import ISchemaField from "../interfaces/ISchemaField";
import RulePositive from "../assertions/AssertValueIsPositive";

export default class ConditionBuilder {
  private schemaField: ISchemaField;
  private rules: Array<IRule>;

  constructor(schemaField: ISchemaField) {
    this.schemaField = schemaField;
    this.rules = new Array<IRule>();
  }

  isEmpty(): ConditionBuilder {
    this.rules.push(new AssertIsEmpty());
    return this;
  }

  isPopulated(): ConditionBuilder {
    this.rules.push(new AssertIsPopulated());
    return this;
  }

  isTrue(): ConditionBuilder {
    this.rules.push(new AssertValueIsTrue());
    return this;
  }

  isFalse(): ConditionBuilder {
    this.rules.push(new AssertValueIsFalse());
    return this;
  }

  containDigits(minCount: number, maxCount: number): ConditionBuilder {
    this.rules.push(new AssertContainsDigits(minCount, maxCount));
    return this;
  }

  containLowerCase(minCount: number, maxCount: number): ConditionBuilder {
    this.rules.push(new AssertContainsLowerCase(minCount, maxCount));
    return this;
  }

  containUpperCase(minCount: number, maxCount: number): ConditionBuilder {
    this.rules.push(new AssertContainsUpperCase(minCount, maxCount));
    return this;
  }

  containSymbols(minCount: number, maxCount: number): ConditionBuilder {
    this.rules.push(new AssertContainsSymbols(minCount, maxCount));
    return this;
  }

  isDateLocal(): ConditionBuilder {
    this.rules.push(new AssertValueIsDateLocal());
    return this;
  }

  isDateTimeLocal(): ConditionBuilder {
    this.rules.push(new AssertIsDateTimeLocal());
    return this;
  }

  isTimeLocal(): ConditionBuilder {
    this.rules.push(new AssertIsDateTimeLocal());
    return this;
  }

  isDecimal(): ConditionBuilder {
    this.rules.push(new AssertValueIsDecimal());
    return this;
  }

  isInteger(): ConditionBuilder {
    this.rules.push(new AssertValueIsInteger());
    return this;
  }

  isNoneZero(): ConditionBuilder {
    this.rules.push(new AssertValueIsNonZero());
    return this;
  }

  isZero(): ConditionBuilder {
    this.rules.push(new AssertValueIsZero());
    return this;
  }

  isPositive(allowZero: boolean): ConditionBuilder {
    this.rules.push(new RulePositive(allowZero));
    return this;
  }

  // isNegative() : SchemaFieldEvaluatesTo {
  //
  //     return this;
  // }

  isUkPostCode(): ConditionBuilder {
    this.rules.push(new AssertPostCodeUK());
    return this;
  }

  lengthGreaterOrEqualTo(minLength: number): ConditionBuilder {
    this.rules.push(new AssertValueMin(minLength));
    return this;
  }

  lengthLessOrEqualTo(maxLength: number): ConditionBuilder {
    this.rules.push(new AssertLengthMax(maxLength));
    return this;
  }

  lengthBetween(minLength: number, maxLength: number): ConditionBuilder {
    this.rules.push(new AssertLengthIsBetween(minLength, maxLength));
    return this;
  }

  valueGreaterOrEqualTo(minValue: number): ConditionBuilder {
    this.rules.push(new AssertValueMin(minValue));
    return this;
  }

  valueLessOrEqualTo(maxValue: number): ConditionBuilder {
    this.rules.push(new AssertValueMax(maxValue));
    return this;
  }

  valueBetween(minValue: number, maxValue: number): ConditionBuilder {
    this.rules.push(new AssertValueIsBetween(minValue, maxValue));
    return this;
  }

  dateLessOrEqualTo(minDate: string): ConditionBuilder {
    this.rules.push(new AssertDateMin(minDate));
    return this;
  }

  dateGreaterOrEqualTo(maxDate: string): ConditionBuilder {
    this.rules.push(new AssertDateMax(maxDate));
    return this;
  }

  isDateBetween(minDate: string, maxDate: string): ConditionBuilder {
    //this.rules.push(new ruledate());
    return this;
  }

  // TODO:
  doesContainNoWhiteSpace(): ConditionBuilder {
    this.rules.push(new AssertContainsNoWhiteSpaces());
    return this;
  }

  // TODO:
  doesContainWhiteSpace(): ConditionBuilder {
    this.rules.push(new AssertContainsNoWhiteSpaces());
    return this;
  }

  doesEquals(constant: string, caseInsensitive: boolean): ConditionBuilder {
    this.rules.push(new AssertIsEqualTo(constant, caseInsensitive));
    return this;
  }
}
