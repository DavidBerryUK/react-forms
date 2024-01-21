import AssertIsEmpty from "../../assertions/AssertIsEmpty";
import AssertValueIsFalse from "../../assertions/AssertValueIsFalse";
import AssertValueIsTrue from "../../assertions/AssertValueIsTrue";
import IRule from "../../interfaces/rules/IRule";
import ISchemaField from "../../interfaces/schemaField/ISchemaField";
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
  constructor(schemaField: ISchemaField) {
    super(schemaField);
  }

  /****************************/
  /* rules                    */
  /****************************/
  ifIsPopulated(customMessage?: string): QueryBuilderBoolean {
    this.newAssertion(new RuleAssertIsPopulated(customMessage));
    return this;
  }

  ifIsEmpty(customMessage?: string): QueryBuilderBoolean {
    this.newAssertion(new AssertIsEmpty(customMessage));
    return this;
  }

  ifIsTrue(customMessage?: string): QueryBuilderBoolean {
    this.newAssertion(new AssertValueIsTrue(customMessage));

    return this;
  }

  ifIsFalse(customMessage?: string): QueryBuilderBoolean {
    this.newAssertion(new AssertValueIsFalse(customMessage));

    return this;
  }

  /****************************/
  /* Add Rules                */
  /****************************/
  addAssert(rule: IRule): QueryBuilderBoolean {
    this.newAssertion(rule);
    return this;
  }

  addAssertions(rules: Array<IRule>): QueryBuilderBoolean {
    rules.forEach((rule) => this.newAssertion(rule));
    return this;
  }
}
