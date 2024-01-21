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
import IRule from "../../interfaces/rules/IRule";
import ISchemaField from "../../interfaces/schemaField/ISchemaField";
import QueryBuilderBase from "./QueryBuilderBase";
import RuleAssertIsPopulated from "../../assertions/AssertIsPopulated";

/**
 * allow a query to be built, used as a parameter for the [when] statement.
 *
 * This builds up a single conditions instance for the field specified inside the when statement
 * along with all the rules appended to it.
 *
 * in the instance below, the field will be supplyNameFlag and the rules will be 'IfIsTrue' and 'Mandatory'
 * this instance of QueryBuilder is then passed into the "when" statement for further processing
 *
 * this.fields.fullName.when(this.fields.supplyNameFlag.state().ifIsTrue()).mandatory();
 *
 */
export default class QueryBuilderDate extends QueryBuilderBase<QueryBuilderDate> {
  constructor(schemaField: ISchemaField) {
    super(schemaField);
  }

  /****************************/
  /* rules                    */
  /****************************/
  ifIsPopulated(customMessage?: string): QueryBuilderDate {
    this.newAssertion(new RuleAssertIsPopulated(customMessage));
    return this;
  }

  ifContainsDigits(minCount: number, maxCount: number, customMessage?: string): QueryBuilderDate {
    this.newAssertion(new AssertContainsDigits(minCount, maxCount, customMessage));
    return this;
  }

  ifContainsLowerCase(minCount: number, maxCount: number, customMessage?: string): QueryBuilderDate {
    this.newAssertion(new AssertContainsLowerCase(minCount, maxCount, customMessage));
    return this;
  }

  ifContainsSymbols(minCount: number, maxCount: number, customMessage?: string): QueryBuilderDate {
    this.newAssertion(new AssertContainsSymbols(minCount, maxCount, customMessage));
    return this;
  }

  ifContainsUpperCase(minCount: number, maxCount: number, customMessage?: string): QueryBuilderDate {
    this.newAssertion(new AssertContainsUpperCase(minCount, maxCount, customMessage));
    return this;
  }

  ifIsDateLocal(customMessage?: string): QueryBuilderDate {
    this.newAssertion(new AssertValueIsDateLocal(customMessage));
    return this;
  }

  ifIsDateTimeLocal(customMessage?: string): QueryBuilderDate {
    this.newAssertion(new AssertValueIsDateTimeLocal(customMessage));
    return this;
  }

  ifIsTimeLocal(customMessage?: string): QueryBuilderDate {
    this.newAssertion(new AssertValueIsTime(customMessage));
    return this;
  }

  ifIsDecimal(customMessage?: string): QueryBuilderDate {
    this.newAssertion(new AssertValueIsDecimal(customMessage));
    return this;
  }

  ifIsInteger(customMessage?: string): QueryBuilderDate {
    this.newAssertion(new AssertValueIsInteger(customMessage));
    return this;
  }

  ifIsEmpty(customMessage?: string): QueryBuilderDate {
    this.newAssertion(new AssertIsEmpty(customMessage));
    return this;
  }

  ifIsNoneZero(customMessage?: string): QueryBuilderDate {
    this.newAssertion(new AssertValueIsNonZero(customMessage));
    return this;
  }

  ifIsZero(customMessage?: string): QueryBuilderDate {
    this.newAssertion(new AssertValueIsZero(customMessage));
    return this;
  }

  ifIsTrue(customMessage?: string): QueryBuilderDate {
    this.newAssertion(new AssertValueIsTrue(customMessage));

    return this;
  }

  ifIsPositive(allowZero: boolean, customMessage?: string): QueryBuilderDate {
    this.newAssertion(new AssertValueIsPositive(allowZero, customMessage));

    return this;
  }

  // isNegative(customMessage?: string) : SchemaBaseAssertBuilder {

  //
  //     this._updateCallback(//     new ruleNegative(customMessag);
  //  }
  //     return this;
  // }

  ifUkPostCode(customMessage?: string): QueryBuilderDate {
    this.newAssertion(new AssertPostCodeUK(customMessage));

    return this;
  }

  ifHaveLengthLessOrEqual(minLength: number, customMessage?: string): QueryBuilderDate {
    this.newAssertion(new AssertLengthMin(minLength, customMessage));

    return this;
  }

  ifLengthGreaterOrEqual(maxLength: number, customMessage?: string): QueryBuilderDate {
    this.newAssertion(new AssertLengthMax(maxLength, customMessage));

    return this;
  }

  ifHaveLengthBetween(minLength: number, maxLength: number, customMessage?: string): QueryBuilderDate {
    this.newAssertion(new AssertLengthIsBetween(minLength, maxLength, customMessage));

    return this;
  }

  ifHaveValueMin(minValue: number, customMessage?: string): QueryBuilderDate {
    this.newAssertion(new AssertValueMin(minValue, customMessage));

    return this;
  }

  ifHaveValueMax(maxValue: number, customMessage?: string): QueryBuilderDate {
    this.newAssertion(new AssertValueMax(maxValue, customMessage));

    return this;
  }

  ifHaveValueBetween(minValue: number, maxValue: number, customMessage?: string): QueryBuilderDate {
    this.newAssertion(new AssertValueIsBetween(minValue, maxValue, customMessage));
    return this;
  }

  ifHaveDateMin(minDate: string, customMessage?: string): QueryBuilderDate {
    this.newAssertion(new AssertDateMin(minDate, customMessage));
    return this;
  }

  ifHaveDateMax(maxDate: string, customMessage?: string): QueryBuilderDate {
    this.newAssertion(new AssertDateMax(maxDate, customMessage));
    return this;
  }

  // dateBetween(minDate: string,maxDate: string, customMessage?: string): SchemaBaseAssertBuilder {

  //
  //     this._updateCallback(//     new RuleDateBetween(minDate,maxDate, customMessage));
  //  }
  //     return this;
  // }

  ifIsHaveNoWhiteSpaces(customMessage?: string): QueryBuilderDate {
    this.newAssertion(new AssertContainsNoWhiteSpaces(customMessage));
    return this;
  }

  ifIsEqual(constant: string, caseInsensitive: boolean, customMessage?: string): QueryBuilderDate {
    this.newAssertion(new AssertIsEqualTo(constant, caseInsensitive, customMessage));
    return this;
  }
}
