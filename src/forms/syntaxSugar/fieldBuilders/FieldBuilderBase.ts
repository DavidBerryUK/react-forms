import EnumFieldType from "../../enums/EnumFieldType";
import IRule from "../../interfaces/rules/IRule";
import ISchemaField from "../../interfaces/schemaField/ISchemaField";
import SchemaField from "../../models/SchemaField";

export default class FieldBuilderBase<T extends FieldBuilderBase<T>> {
  private _fieldType: EnumFieldType;
  private _caption: string;
  private _id: string;
  private _rules: Array<IRule>;

  constructor(fieldType: EnumFieldType) {
    this._id = "";
    this._caption = "";
    this._rules = new Array<IRule>();
    this._fieldType = fieldType;
  }

  protected add(assertion: IRule): void {
    this._rules.push(assertion);
  }

  /****************************/
  /* Change Caption or Id     */
  /****************************/
  id(id: string): T {
    this._id = id;
    return this as any as T;
  }

  caption(caption: string): T {
    this._caption = caption;
    return this as any as T;
  }

  /****************************/
  /* Rules                    */
  /****************************/

  addAssertion(rule: IRule): T {
    this.add(rule);
    return this as any as T;
  }

  addAssertions(rules: Array<IRule>): T {
    rules.forEach((rule) => this.add(rule));
    return this as any as T;
  }

  /****************************/
  /* Finish Off               */
  /****************************/
  build(): ISchemaField {
    return SchemaField.createWithRules(this._id, this._caption, this._fieldType, this._rules);
  }
}
