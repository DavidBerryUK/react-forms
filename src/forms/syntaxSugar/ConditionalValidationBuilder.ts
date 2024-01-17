import GenericAssertMethodBuilder from "./base/GenericAssertMethodBuilder";
import IRule from "../interfaces/IRule";
import ISchemaField from "../interfaces/ISchemaField";

export default class ConditionalValidationBuilder extends GenericAssertMethodBuilder<ConditionalValidationBuilder> {
  private _schemaField: ISchemaField;
  private _rules: Array<IRule>;

  constructor(schemaField: ISchemaField) {
    super((rule) => this.newAssertionCallback(rule));
    this._rules = new Array<IRule>();
    this._schemaField = schemaField;
  }

  private newAssertionCallback(assertion: IRule): void {
    this._rules.push(assertion);
  }
}
