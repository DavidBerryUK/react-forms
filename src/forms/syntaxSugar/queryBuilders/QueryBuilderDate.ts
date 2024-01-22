import AssertDateMax from "../../assertions/date/AssertDateMax";
import AssertDateMin from "../../assertions/date/AssertDateMin";
import AssertIsEmpty from "../../assertions/generic/AssertIsEmpty";
import AssertIsEqualTo from "../../assertions/string/AssertIsEqualTo";
import AssertIsPopulated from "../../assertions/generic/AssertIsPopulated";
import AssertValueIsDateLocal from "../../assertions/date/AssertValueIsDateLocal";
import AssertValueIsDateTimeLocal from "../../assertions/date/AssertValueIsDateTimeLocal";
import AssertValueIsTime from "../../assertions/date/AssertValueIsTime";
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
export default class QueryBuilderDate extends QueryBuilderBase<QueryBuilderDate> {
  /****************************/
  /* Assertions               */
  /****************************/
  ifPopulated(customMessage?: string): QueryBuilderDate {
    this.add(new AssertIsPopulated(customMessage, EnumValidationStatus.fail));
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

  ifEmpty(customMessage?: string): QueryBuilderDate {
    this.add(new AssertIsEmpty(customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifLessThan(minDate: string, customMessage?: string): QueryBuilderDate {
    this.add(new AssertDateMin(minDate, customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifGreaterThan(maxDate: string, customMessage?: string): QueryBuilderDate {
    this.add(new AssertDateMax(maxDate, customMessage, EnumValidationStatus.fail));
    return this;
  }

  // dateBetween(minDate: string,maxDate: string, customMessage?: string): SchemaBaseAssertBuilder {

  //
  //     this._updateCallback(//     new AssertDateBetween(minDate,maxDate, customMessage,EnumValidationStatus.fail));
  //  }
  //     return this;
  // }

  ifEquals(constant: string, customMessage?: string): QueryBuilderDate {
    this.add(new AssertIsEqualTo(constant, false, customMessage, EnumValidationStatus.fail));
    return this;
  }
}
