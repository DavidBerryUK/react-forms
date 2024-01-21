import AssertContainsDigits from "../../assertions/AssertContainsDigits";
import AssertContainsLowerCase from "../../assertions/AssertContainsLowerCase";
import AssertContainsNoWhiteSpaces from "../../assertions/AssertContainsNoWhiteSpaces";
import AssertContainsSymbols from "../../assertions/AssertContainsSymbols";
import AssertContainsUpperCase from "../../assertions/AssertContainsUpperCase";
import AssertIsEmpty from "../../assertions/AssertIsEmpty";
import AssertIsEqualTo from "../../assertions/AssertIsEqualTo";
import AssertLengthIsBetween from "../../assertions/AssertLengthIsBetween";
import AssertLengthMax from "../../assertions/AssertLengthMax";
import AssertLengthMin from "../../assertions/AssertLengthMin";
import AssertPostCodeUK from "../../assertions/AssertPostCodeUk";
import AssertValueIsDecimal from "../../assertions/AssertValueIsDecimal";
import AssertValueIsInteger from "../../assertions/AssertValueIsInteger";
import AssertValueIsNonZero from "../../assertions/AssertValueIsNonZero";
import AssertValueIsZero from "../../assertions/AssertValueIsZero";
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
export default class QueryBuilderString extends QueryBuilderBase<QueryBuilderString> {
  /****************************/
  /* rules                    */
  /****************************/
  ifIsPopulated(customMessage?: string): QueryBuilderString {
    this.newAssertion(new RuleAssertIsPopulated(customMessage));
    return this;
  }

  ifContainsDigits(minCount: number, maxCount: number, customMessage?: string): QueryBuilderString {
    this.newAssertion(new AssertContainsDigits(minCount, maxCount, customMessage));
    return this;
  }

  ifContainsLowerCase(minCount: number, maxCount: number, customMessage?: string): QueryBuilderString {
    this.newAssertion(new AssertContainsLowerCase(minCount, maxCount, customMessage));
    return this;
  }

  ifContainsSymbols(minCount: number, maxCount: number, customMessage?: string): QueryBuilderString {
    this.newAssertion(new AssertContainsSymbols(minCount, maxCount, customMessage));
    return this;
  }

  ifContainsUpperCase(minCount: number, maxCount: number, customMessage?: string): QueryBuilderString {
    this.newAssertion(new AssertContainsUpperCase(minCount, maxCount, customMessage));
    return this;
  }

  ifIsEmpty(customMessage?: string): QueryBuilderString {
    this.newAssertion(new AssertIsEmpty(customMessage));
    return this;
  }

  ifUkPostCode(customMessage?: string): QueryBuilderString {
    this.newAssertion(new AssertPostCodeUK(customMessage));

    return this;
  }

  ifHaveLengthLessOrEqual(minLength: number, customMessage?: string): QueryBuilderString {
    this.newAssertion(new AssertLengthMin(minLength, customMessage));

    return this;
  }

  ifLengthGreaterOrEqual(maxLength: number, customMessage?: string): QueryBuilderString {
    this.newAssertion(new AssertLengthMax(maxLength, customMessage));

    return this;
  }

  ifHaveLengthBetween(minLength: number, maxLength: number, customMessage?: string): QueryBuilderString {
    this.newAssertion(new AssertLengthIsBetween(minLength, maxLength, customMessage));

    return this;
  }

  ifIsHaveNoWhiteSpaces(customMessage?: string): QueryBuilderString {
    this.newAssertion(new AssertContainsNoWhiteSpaces(customMessage));
    return this;
  }

  ifIsEqual(constant: string, caseInsensitive: boolean, customMessage?: string): QueryBuilderString {
    this.newAssertion(new AssertIsEqualTo(constant, caseInsensitive, customMessage));
    return this;
  }
  //
  // numeric type functions
  //
  ifIsNoneZero(customMessage?: string): QueryBuilderString {
    this.newAssertion(new AssertValueIsNonZero(customMessage));
    return this;
  }

  ifIsZero(customMessage?: string): QueryBuilderString {
    this.newAssertion(new AssertValueIsZero(customMessage));
    return this;
  }

  ifIsDecimal(customMessage?: string): QueryBuilderString {
    this.newAssertion(new AssertValueIsDecimal(customMessage));
    return this;
  }

  ifIsInteger(customMessage?: string): QueryBuilderString {
    this.newAssertion(new AssertValueIsInteger(customMessage));
    return this;
  }
}
