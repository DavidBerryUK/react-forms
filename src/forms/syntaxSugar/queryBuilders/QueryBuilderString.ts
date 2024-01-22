import AssertContainsDigits from "../../assertions/AssertContainsDigits";
import AssertContainsLowerCase from "../../assertions/AssertContainsLowerCase";
import AssertContainsNoWhiteSpaces from "../../assertions/AssertContainsNoWhiteSpaces";
import AssertContainsSymbols from "../../assertions/AssertContainsSymbols";
import AssertContainsUpperCase from "../../assertions/AssertContainsUpperCase";
import AssertIsEmpty from "../../assertions/AssertIsEmpty";
import AssertIsEqualTo from "../../assertions/AssertIsEqualTo";
import AssertIsPopulated from "../../assertions/AssertIsPopulated";
import AssertLengthIsBetween from "../../assertions/AssertLengthIsBetween";
import AssertLengthMax from "../../assertions/AssertLengthMax";
import AssertLengthMin from "../../assertions/AssertLengthMin";
import AssertPostCodeUK from "../../assertions/AssertPostCodeUk";
import AssertValueIsDecimal from "../../assertions/AssertValueIsDecimal";
import AssertValueIsInteger from "../../assertions/AssertValueIsInteger";
import AssertValueIsNonZero from "../../assertions/AssertValueIsNonZero";
import AssertValueIsZero from "../../assertions/AssertValueIsZero";
import EnumValidationStatus from "../../enums/EnumValidationStatus";
import QueryBuilderBase from "./QueryBuilderBase";

/**
 * allow a query to be built, used as a parameter for the [when] statement.
 *
 * This builds up a single conditions instance for the field specified inside the when statement
 * along with all the assertions appended to it.
 *
 * in the instance below, the field will be supplyNameFlag and the assertions will be 'IfIsTrue' and 'Mandatory'
 * this instance of QueryBuilder is then passed into the "when" statement for further processing
 *
 * this.fields.fullName.when(this.fields.supplyNameFlag.state().ifIsTrue()).mandatory();
 *
 */
export default class QueryBuilderString extends QueryBuilderBase<QueryBuilderString> {
  /****************************/
  /* Assertions               */
  /****************************/
  ifIsPopulated(customMessage?: string): QueryBuilderString {
    this.add(new AssertIsPopulated(customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifContainsDigits(minCount: number, maxCount: number, customMessage?: string): QueryBuilderString {
    this.add(new AssertContainsDigits(minCount, maxCount, customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifContainsLowerCase(minCount: number, maxCount: number, customMessage?: string): QueryBuilderString {
    this.add(new AssertContainsLowerCase(minCount, maxCount, customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifContainsSymbols(minCount: number, maxCount: number, customMessage?: string): QueryBuilderString {
    this.add(new AssertContainsSymbols(minCount, maxCount, customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifContainsUpperCase(minCount: number, maxCount: number, customMessage?: string): QueryBuilderString {
    this.add(new AssertContainsUpperCase(minCount, maxCount, customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifIsEmpty(customMessage?: string): QueryBuilderString {
    this.add(new AssertIsEmpty(customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifUkPostCode(customMessage?: string): QueryBuilderString {
    this.add(new AssertPostCodeUK(customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifHaveLengthLessOrEqual(minLength: number, customMessage?: string): QueryBuilderString {
    this.add(new AssertLengthMin(minLength, customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifLengthGreaterOrEqual(maxLength: number, customMessage?: string): QueryBuilderString {
    this.add(new AssertLengthMax(maxLength, customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifHaveLengthBetween(minLength: number, maxLength: number, customMessage?: string): QueryBuilderString {
    this.add(new AssertLengthIsBetween(minLength, maxLength, customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifIsHaveNoWhiteSpaces(customMessage?: string): QueryBuilderString {
    this.add(new AssertContainsNoWhiteSpaces(customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifIsEqual(constant: string, caseInsensitive: boolean, customMessage?: string): QueryBuilderString {
    this.add(new AssertIsEqualTo(constant, caseInsensitive, customMessage, EnumValidationStatus.fail));
    return this;
  }
  //
  // numeric type functions
  //
  ifIsNoneZero(customMessage?: string): QueryBuilderString {
    this.add(new AssertValueIsNonZero(customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifIsZero(customMessage?: string): QueryBuilderString {
    this.add(new AssertValueIsZero(customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifIsDecimal(customMessage?: string): QueryBuilderString {
    this.add(new AssertValueIsDecimal(customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifIsInteger(customMessage?: string): QueryBuilderString {
    this.add(new AssertValueIsInteger(customMessage, EnumValidationStatus.fail));
    return this;
  }
}
