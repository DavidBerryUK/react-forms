import AssertIsEmpty from "../../assertions/generic/AssertIsEmpty";
import AssertValueIsFalse from "../../assertions/boolean/AssertValueIsFalse";
import AssertValueIsTrue from "../../assertions/boolean/AssertValueIsTrue";
import EnumValidationStatus from "../../enums/EnumValidationStatus";
import QueryBuilderBase from "./QueryBuilderBase";
import AssertIsPopulated from "../../assertions/generic/AssertIsPopulated";

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
export default class QueryBuilderBoolean extends QueryBuilderBase<QueryBuilderBoolean> {
  /****************************/
  /* Assertions               */
  /****************************/
  ifIsPopulated(customMessage?: string): QueryBuilderBoolean {
    this.add(new AssertIsPopulated(customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifIsEmpty(customMessage?: string): QueryBuilderBoolean {
    this.add(new AssertIsEmpty(customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifIsTrue(customMessage?: string): QueryBuilderBoolean {
    this.add(new AssertValueIsTrue(customMessage, EnumValidationStatus.fail));

    return this;
  }

  ifIsFalse(customMessage?: string): QueryBuilderBoolean {
    this.add(new AssertValueIsFalse(customMessage, EnumValidationStatus.fail));

    return this;
  }
}
