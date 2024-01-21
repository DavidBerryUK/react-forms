import AssertIsEmpty from "../../assertions/AssertIsEmpty";
import AssertValueIsFalse from "../../assertions/AssertValueIsFalse";
import AssertValueIsTrue from "../../assertions/AssertValueIsTrue";
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
export default class QueryBuilderBoolean extends QueryBuilderBase<QueryBuilderBoolean> {
  /****************************/
  /* rules                    */
  /****************************/
  ifIsPopulated(customMessage?: string): QueryBuilderBoolean {
    this.newAssertion(new RuleAssertIsPopulated(customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifIsEmpty(customMessage?: string): QueryBuilderBoolean {
    this.newAssertion(new AssertIsEmpty(customMessage, EnumValidationStatus.fail));
    return this;
  }

  ifIsTrue(customMessage?: string): QueryBuilderBoolean {
    this.newAssertion(new AssertValueIsTrue(customMessage, EnumValidationStatus.fail));

    return this;
  }

  ifIsFalse(customMessage?: string): QueryBuilderBoolean {
    this.newAssertion(new AssertValueIsFalse(customMessage, EnumValidationStatus.fail));

    return this;
  }
}
