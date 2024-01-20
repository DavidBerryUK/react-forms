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
import Condition from "../../models/Condition";
import ICondition from "../../interfaces/condition/ICondition";
import IRule from "../../interfaces/rules/IRule";
import ISchemaField from "../../interfaces/schemaField/ISchemaField";
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
export default class QueryBuilderNumber {
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

  /****************************/
  /* Add Rules                */
  /****************************/
  addAssert(rule: IRule): QueryBuilderNumber {
    this.newAssertion(rule);
    return this;
  }

  addAssertions(rules: Array<IRule>): QueryBuilderNumber {
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
