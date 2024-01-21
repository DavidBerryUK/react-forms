import Condition from "../../models/Condition";
import ICondition from "../../interfaces/condition/ICondition";
import IRule from "../../interfaces/rules/IRule";
import ISchemaField from "../../interfaces/schemaField/ISchemaField";

export default class QueryBuilderBase<T extends QueryBuilderBase<T>> {
  protected _schemaField: ISchemaField;
  protected _condition: ICondition | undefined;

  public conditions: Array<ICondition>;

  constructor(schemaField: ISchemaField) {
    this._schemaField = schemaField;
    this.conditions = new Array<ICondition>();
  }

  protected add(assertion: IRule) {
    if (this._condition === undefined) {
      this._condition = Condition.create(this._schemaField, assertion);
      this.conditions.push(this._condition);
      return;
    }

    this._condition.addRule(assertion);
  }

  /****************************/
  /* Add Rules                */
  /****************************/
  public addAssert(rule: IRule): T {
    this.add(rule);
    return this as any as T;
  }

  public addAssertions(rules: Array<IRule>): T {
    rules.forEach((rule) => this.add(rule));
    return this as any as T;
  }
}
