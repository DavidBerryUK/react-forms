import GenericQueryMethodBuilder from "./base/GenericQueryMethodBuilder";
import IRule from "../interfaces/rules/IRule";
import ISchemaField from "../interfaces/schema/ISchemaField";
import Condition from "../models/Condition";
import ICondition from "../interfaces/condition/ICondition";

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
export default class QueryBuilder extends GenericQueryMethodBuilder<QueryBuilder> {
  private _schemaField: ISchemaField;
  private _condition: ICondition | undefined;

  conditions: Array<ICondition>;

  constructor(schemaField: ISchemaField) {
    super((rule) => this.newAssertionCallback(rule));
    this._schemaField = schemaField;
    this.conditions = new Array<ICondition>();
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
