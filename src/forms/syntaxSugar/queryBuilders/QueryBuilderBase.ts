import Condition from "../../models/Condition";
import ICondition from "../../interfaces/condition/ICondition";
import IAssert from "../../interfaces/assertions/IAssert";
import ISchemaField from "../../interfaces/schemaField/ISchemaField";

export default class QueryBuilderBase<T extends QueryBuilderBase<T>> {
  protected _schemaField: ISchemaField;
  protected _condition: ICondition | undefined;

  public conditions: Array<ICondition>;

  constructor(schemaField: ISchemaField) {
    this._schemaField = schemaField;
    this.conditions = new Array<ICondition>();
  }

  protected add(assertion: IAssert) {
    if (this._condition === undefined) {
      this._condition = Condition.create(this._schemaField, assertion);
      this.conditions.push(this._condition);
      return;
    }

    this._condition.addAssert(assertion);
  }

  /****************************/
  /* Assertions               */
  /****************************/
  public addAssert(assertion: IAssert): T {
    this.add(assertion);
    return this as any as T;
  }

  public addAssertions(assertions: Array<IAssert>): T {
    assertions.forEach((assertion) => this.add(assertion));
    return this as any as T;
  }
}
