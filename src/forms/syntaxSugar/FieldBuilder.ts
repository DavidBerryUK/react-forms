import GenericAssertMethodBuilder from "./base/GenericAssertMethodBuilder";
import EnumFieldType from "../enums/EnumFieldType";
import IRule from "../interfaces/rules/IRule";
import ISchemaField from "../interfaces/schema/ISchemaField";
import SchemaField from "../models/SchemaField";

export default class FieldBuilder extends GenericAssertMethodBuilder<FieldBuilder> {
  private _fieldType: EnumFieldType;
  private _caption: string;
  private _id: string;
  private _rules: Array<IRule>;

  constructor() {
    super((rule) => this.newAssertionCallback(rule));
    this._id = "";
    this._caption = "";
    this._rules = new Array<IRule>();
    this._fieldType = EnumFieldType.string;
  }

  private newAssertionCallback(assertion: IRule): void {
    this._rules.push(assertion);
  }

  id(id: string): FieldBuilder {
    this._id = id;
    return this;
  }

  static id(name: string): FieldBuilder {
    var builder = new FieldBuilder();
    builder.id(name);
    return builder;
  }

  caption(caption: string): FieldBuilder {
    this._caption = caption;
    return this;
  }

  static caption(caption: string): FieldBuilder {
    var builder = new FieldBuilder();
    builder.caption(caption);
    return builder;
  }

  /****************************/
  /* TYPE - one is mandatory  */
  /****************************/
  static string(caption?: string): FieldBuilder {
    var builder = new FieldBuilder();
    builder._fieldType = EnumFieldType.string;
    if (caption !== undefined && caption !== null) {
      builder.caption(caption);
    }
    return builder;
  }

  string(caption?: string): FieldBuilder {
    this._fieldType = EnumFieldType.string;
    if (caption !== undefined && caption !== null) {
      this.caption(caption);
    }
    return this;
  }

  static number(caption?: string): FieldBuilder {
    var builder = new FieldBuilder();
    builder._fieldType = EnumFieldType.number;
    if (caption !== undefined && caption !== null) {
      builder.caption(caption);
    }
    return builder;
  }

  number(caption?: string): FieldBuilder {
    this._fieldType = EnumFieldType.number;
    if (caption !== undefined && caption !== null) {
      this.caption(caption);
    }
    return this;
  }

  static boolean(caption?: string): FieldBuilder {
    var builder = new FieldBuilder();
    builder._fieldType = EnumFieldType.boolean;
    if (caption !== undefined && caption !== null) {
      builder.caption(caption);
    }
    return builder;
  }

  boolean(caption?: string): FieldBuilder {
    this._fieldType = EnumFieldType.boolean;
    if (caption !== undefined && caption !== null) {
      this.caption(caption);
    }
    return this;
  }

  static date(caption?: string): FieldBuilder {
    var builder = new FieldBuilder();
    builder._fieldType = EnumFieldType.date;
    if (caption !== undefined && caption !== null) {
      builder.caption(caption);
    }
    return builder;
  }

  date(caption?: string): FieldBuilder {
    this._fieldType = EnumFieldType.date;
    if (caption !== undefined && caption !== null) {
      this.caption(caption);
    }
    return this;
  }

  /****************************/
  /* Finish Off               */
  /****************************/
  build(): ISchemaField {
    return SchemaField.createWithRules(this._id, this._caption, this._fieldType, this._rules);
  }
}
