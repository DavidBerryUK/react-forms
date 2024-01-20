import AssertIsEmpty from "../../assertions/AssertIsEmpty";
import AssertValueIsTrue from "../../assertions/AssertValueIsTrue";
import Condition from "../../models/Condition";
import ICondition from "../../interfaces/condition/ICondition";
import IRule from "../../interfaces/rules/IRule";
import ISchemaField from "../../interfaces/schemaField/ISchemaField";
import RuleAssertIsPopulated from "../../assertions/AssertIsPopulated";
import AssertValueIsFalse from "../../assertions/AssertValueIsFalse";

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
export default class QueryBuilderBoolean {
  private _schemaField: ISchemaField;
  private _condition: ICondition | undefined;

  conditions: Array<ICondition>;

  constructor(schemaField: ISchemaField) {
    this._schemaField = schemaField;
    this.conditions = new Array<ICondition>();
  }

  private newAssertion(assertion: IRule) {
    if (this._condition === undefined) {
      this._condition = Condition.create(this._schemaField, assertion);
      this.conditions.push(this._condition);
      return;
    }

    this._condition.addRule(assertion);
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

  /**
   * ensure a new condition
   * note that each condition is a field and a rule group
   *
   * @param assertion a new assertion rule to be added to the field
   */
  private newAssertionCallback(assertion: IRule): void {
    if (this._condition === undefined) {
      this._condition = Condition.create(this._schemaField, assertion);
      this.conditions.push(this._condition);
      return;
    }

    this._condition.addRule(assertion);
  }
}
