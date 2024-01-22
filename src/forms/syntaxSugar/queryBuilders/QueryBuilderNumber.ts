import AssertIsEmpty from "../../assertions/AssertIsEmpty";
import AssertIsEqualTo from "../../assertions/AssertIsEqualTo";
import AssertIsPopulated from "../../assertions/AssertIsPopulated";
import AssertValueIsBetween from "../../assertions/AssertValueIsBetween";
import AssertValueIsDecimal from "../../assertions/AssertValueIsDecimal";
import AssertValueIsInteger from "../../assertions/AssertValueIsInteger";
import AssertValueIsNonZero from "../../assertions/AssertValueIsNonZero";
import AssertValueIsPositive from "../../assertions/AssertValueIsPositive";
import AssertValueIsZero from "../../assertions/AssertValueIsZero";
import AssertValueMax from "../../assertions/AssertValueMax";
import AssertValueMin from "../../assertions/AssertValueMin";
import EnumValidationStatus from "../../enums/EnumValidationStatus";
import QueryBuilderBase from "./QueryBuilderBase";

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
  //     this._updateCallback(//     new ruleNegative(customMessag);
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
