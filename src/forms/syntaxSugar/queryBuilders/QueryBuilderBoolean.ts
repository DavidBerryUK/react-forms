import AssertIsEmpty from "../../assertions/generic/AssertIsEmpty";
import AssertIsEqualTo from "../../assertions/string/AssertIsEqualTo";
import AssertIsPopulated from "../../assertions/generic/AssertIsPopulated";
import AssertValueIsFalse from "../../assertions/boolean/AssertValueIsFalse";
import AssertValueIsTrue from "../../assertions/boolean/AssertValueIsTrue";
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
export default class QueryBuilderBoolean extends QueryBuilderBase<QueryBuilderBoolean> {
  /****************************/
  /* Assertions               */
  /****************************/
  populated(customMessage?: string): QueryBuilderBoolean {
    this.add(new AssertIsPopulated(customMessage, EnumValidationStatus.fail));
    return this;
  }

  empty(customMessage?: string): QueryBuilderBoolean {
    this.add(new AssertIsEmpty(customMessage, EnumValidationStatus.fail));
    return this;
  }

  true(customMessage?: string): QueryBuilderBoolean {
    this.add(new AssertValueIsTrue(customMessage, EnumValidationStatus.fail));
    return this;
  }

  false(customMessage?: string): QueryBuilderBoolean {
    this.add(new AssertValueIsFalse(customMessage, EnumValidationStatus.fail));
    return this;
  }

  equals(constant: string, customMessage?: string): QueryBuilderBoolean {
    this.add(new AssertIsEqualTo(constant, false, customMessage, EnumValidationStatus.fail));
    return this;
  }
}
