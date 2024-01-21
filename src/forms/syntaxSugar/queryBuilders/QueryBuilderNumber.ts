import AssertIsEmpty from "../../assertions/AssertIsEmpty";
import AssertIsEqualTo from "../../assertions/AssertIsEqualTo";
import AssertValueIsBetween from "../../assertions/AssertValueIsBetween";
import AssertValueIsDecimal from "../../assertions/AssertValueIsDecimal";
import AssertValueIsInteger from "../../assertions/AssertValueIsInteger";
import AssertValueIsNonZero from "../../assertions/AssertValueIsNonZero";
import AssertValueIsPositive from "../../assertions/AssertValueIsPositive";
import AssertValueIsZero from "../../assertions/AssertValueIsZero";
import AssertValueMax from "../../assertions/AssertValueMax";
import AssertValueMin from "../../assertions/AssertValueMin";
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
export default class QueryBuilderNumber extends QueryBuilderBase<QueryBuilderNumber> {
  /****************************/
  /* rules                    */
  /****************************/
  ifIsPopulated(customMessage?: string): QueryBuilderNumber {
    this.newAssertion(new RuleAssertIsPopulated(customMessage));
    return this;
  }

  ifIsDecimal(customMessage?: string): QueryBuilderNumber {
    this.newAssertion(new AssertValueIsDecimal(customMessage));
    return this;
  }

  ifIsInteger(customMessage?: string): QueryBuilderNumber {
    this.newAssertion(new AssertValueIsInteger(customMessage));
    return this;
  }

  ifIsEmpty(customMessage?: string): QueryBuilderNumber {
    this.newAssertion(new AssertIsEmpty(customMessage));
    return this;
  }

  ifIsNoneZero(customMessage?: string): QueryBuilderNumber {
    this.newAssertion(new AssertValueIsNonZero(customMessage));
    return this;
  }

  ifIsZero(customMessage?: string): QueryBuilderNumber {
    this.newAssertion(new AssertValueIsZero(customMessage));
    return this;
  }

  ifIsPositive(allowZero: boolean, customMessage?: string): QueryBuilderNumber {
    this.newAssertion(new AssertValueIsPositive(allowZero, customMessage));

    return this;
  }

  // isNegative(customMessage?: string) : SchemaBaseAssertBuilder {

  //
  //     this._updateCallback(//     new ruleNegative(customMessag);
  //  }
  //     return this;
  // }

  ifHaveValueMin(minValue: number, customMessage?: string): QueryBuilderNumber {
    this.newAssertion(new AssertValueMin(minValue, customMessage));

    return this;
  }

  ifHaveValueMax(maxValue: number, customMessage?: string): QueryBuilderNumber {
    this.newAssertion(new AssertValueMax(maxValue, customMessage));

    return this;
  }

  ifHaveValueBetween(minValue: number, maxValue: number, customMessage?: string): QueryBuilderNumber {
    this.newAssertion(new AssertValueIsBetween(minValue, maxValue, customMessage));
    return this;
  }

  ifIsEqual(constant: number, customMessage?: string): QueryBuilderNumber {
    //TODO: sort this out, should be number specific assertion with option for variance
    this.newAssertion(new AssertIsEqualTo(`${constant}`, false, customMessage));
    return this;
  }
}
