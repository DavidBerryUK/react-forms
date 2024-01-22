import AssertIsEmpty from "../../assertions/generic/AssertIsEmpty";
import AssertIsEqualTo from "../../assertions/string/AssertIsEqualTo";
import AssertIsPopulated from "../../assertions/generic/AssertIsPopulated";
import AssertValueIsBetween from "../../assertions/number/AssertValueIsBetween";
import AssertValueIsDecimal from "../../assertions/number/AssertValueIsDecimal";
import AssertValueIsInteger from "../../assertions/number/AssertValueIsInteger";
import AssertValueIsNonZero from "../../assertions/number/AssertValueIsNonZero";
import AssertValueIsPositive from "../../assertions/number/AssertValueIsPositive";
import AssertValueIsZero from "../../assertions/number/AssertValueIsZero";
import AssertValueMax from "../../assertions/number/AssertValueMax";
import AssertValueMin from "../../assertions/number/AssertValueMin";
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
export default class QueryBuilderNumber extends QueryBuilderBase<QueryBuilderNumber> {
  /****************************/
  /* Assertions               */
  /****************************/
  ifIsPopulated(customMessage?: string): QueryBuilderNumber {
    this.add(new AssertIsPopulated(customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifIsDecimal(customMessage?: string): QueryBuilderNumber {
    this.add(new AssertValueIsDecimal(customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifIsInteger(customMessage?: string): QueryBuilderNumber {
    this.add(new AssertValueIsInteger(customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifIsEmpty(customMessage?: string): QueryBuilderNumber {
    this.add(new AssertIsEmpty(customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifIsNoneZero(customMessage?: string): QueryBuilderNumber {
    this.add(new AssertValueIsNonZero(customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifIsZero(customMessage?: string): QueryBuilderNumber {
    this.add(new AssertValueIsZero(customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifIsPositive(allowZero: boolean, customMessage?: string): QueryBuilderNumber {
    this.add(new AssertValueIsPositive(allowZero, customMessage, EnumValidationStatus.fail));

    return this;
  }

  // isNegative(customMessage?: string) : SchemaBaseAssertBuilder {

  //
  //     this._updateCallback(//     new AssertNegative(customMessag);
  //  }
  //     return this;
  // }

  ifHaveValueMin(minValue: number, customMessage?: string): QueryBuilderNumber {
    this.add(new AssertValueMin(minValue, customMessage, EnumValidationStatus.fail));

    return this;
  }

  ifHaveValueMax(maxValue: number, customMessage?: string): QueryBuilderNumber {
    this.add(new AssertValueMax(maxValue, customMessage, EnumValidationStatus.fail));

    return this;
  }

  ifHaveValueBetween(minValue: number, maxValue: number, customMessage?: string): QueryBuilderNumber {
    this.add(new AssertValueIsBetween(minValue, maxValue, customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifIsEqual(constant: number, customMessage?: string): QueryBuilderNumber {
    //TODO: sort this out, should be number specific assertion with option for variance
    this.add(new AssertIsEqualTo(`${constant}`, false, customMessage, EnumValidationStatus.fail));
    return this;
  }
}
