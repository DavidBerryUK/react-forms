import EnumFieldType from "../../enums/EnumFieldType";
import IAssert from "../../interfaces/assertions/IAssert";

export default abstract class FieldBuilderBase<T extends FieldBuilderBase<T>> {
  protected _fieldType: EnumFieldType;
  protected _caption: string;
  protected _id: string;
  protected _assertions: Array<IAssert>;

  constructor(fieldType: EnumFieldType) {
    this._id = "";
    this._caption = "";
    this._assertions = new Array<IAssert>();
    this._fieldType = fieldType;
  }

  protected add(assertion: IAssert): void {
    this._assertions.push(assertion);
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
  /* Assertions               */
  /****************************/

  addAssertion(assertion: IAssert): T {
    this.add(assertion);
    return this as any as T;
  }

  addAssertions(assertions: Array<IAssert>): T {
    assertions.forEach((assertion) => this.add(assertion));
    return this as any as T;
  }

  /****************************/
  /* Finish Off               */
  /****************************/

  toAssertions(): Array<IAssert> {
    return this._assertions;
  }
}
