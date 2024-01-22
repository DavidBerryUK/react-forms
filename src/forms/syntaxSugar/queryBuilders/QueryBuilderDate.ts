import AssertDateMax from "../../assertions/AssertDateMax";
import AssertDateMin from "../../assertions/AssertDateMin";
import AssertIsEmpty from "../../assertions/AssertIsEmpty";
import AssertIsEqualTo from "../../assertions/AssertIsEqualTo";
import AssertValueIsDateLocal from "../../assertions/AssertValueIsDateLocal";
import AssertValueIsDateTimeLocal from "../../assertions/AssertValueIsDateTimeLocal";
import AssertValueIsTime from "../../assertions/AssertValueIsTime";
import EnumValidationStatus from "../../enums/EnumValidationStatus";
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
  /****************************/
  /* Assertions               */
  /****************************/
  ifIsPopulated(customMessage?: string): QueryBuilderDate {
    this.add(new RuleAssertIsPopulated(customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifIsDateLocal(customMessage?: string): QueryBuilderDate {
    this.add(new AssertValueIsDateLocal(customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifIsDateTimeLocal(customMessage?: string): QueryBuilderDate {
    this.add(new AssertValueIsDateTimeLocal(customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifIsTimeLocal(customMessage?: string): QueryBuilderDate {
    this.add(new AssertValueIsTime(customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifIsEmpty(customMessage?: string): QueryBuilderDate {
    this.add(new AssertIsEmpty(customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifHaveDateMin(minDate: string, customMessage?: string): QueryBuilderDate {
    this.add(new AssertDateMin(minDate, customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifHaveDateMax(maxDate: string, customMessage?: string): QueryBuilderDate {
    this.add(new AssertDateMax(maxDate, customMessage, EnumValidationStatus.fail));
    return this;
  }

  // dateBetween(minDate: string,maxDate: string, customMessage?: string): SchemaBaseAssertBuilder {

  //
  //     this._updateCallback(//     new RuleDateBetween(minDate,maxDate, customMessage,EnumValidationStatus.fail));
  //  }
  //     return this;
  // }

  ifIsEqual(constant: string, customMessage?: string): QueryBuilderDate {
    this.add(new AssertIsEqualTo(constant, false, customMessage, EnumValidationStatus.fail));
    return this;
  }
}
