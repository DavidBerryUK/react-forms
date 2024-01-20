import EnumFieldType from "../../enums/EnumFieldType";
import IRule from "../../interfaces/rules/IRule";

export default abstract class FieldBuilderBase<T extends FieldBuilderBase<T>> {
  protected _fieldType: EnumFieldType;
  protected _caption: string;
  protected _id: string;
  protected _rules: Array<IRule>;

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

  toRules(): Array<IRule> {
    return this._rules;
  }
}
