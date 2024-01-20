import EnumFieldType from "../enums/EnumFieldType";
import IRule from "../interfaces/rules/IRule";

export default class RuleBuilder {
  private _fieldType: EnumFieldType;
  private _caption: string;
  private _rules: Array<IRule>;

  constructor() {
    this._caption = "";
    this._rules = new Array<IRule>();
    this._fieldType = EnumFieldType.string;
  }

  caption(caption: string): RuleBuilder {
    this._caption = caption;
    return this;
  }

  private newAssertionCallback(assertion: IRule): void {
    this._rules.push(assertion);
  }

  static caption(caption: string): RuleBuilder {
    var builder = new RuleBuilder();
    builder.caption(caption);
    return builder;
  }

  /****************************/
  /* TYPE - one is mandatory  */
  /****************************/
  static string(caption?: string): RuleBuilder {
    var builder = new RuleBuilder();
    builder._fieldType = EnumFieldType.string;
    if (caption !== undefined && caption !== null) {
      builder.caption(caption);
    }
    return builder;
  }

  string(caption?: string): RuleBuilder {
    this._fieldType = EnumFieldType.string;
    if (caption !== undefined && caption !== null) {
      this.caption(caption);
    }
    return this;
  }

  static number(caption?: string): RuleBuilder {
    var builder = new RuleBuilder();
    builder._fieldType = EnumFieldType.number;
    if (caption !== undefined && caption !== null) {
      builder.caption(caption);
    }
    return builder;
  }

  number(caption?: string): RuleBuilder {
    this._fieldType = EnumFieldType.number;
    if (caption !== undefined && caption !== null) {
      this.caption(caption);
    }
    return this;
  }

  static boolean(caption?: string): RuleBuilder {
    var builder = new RuleBuilder();
    builder._fieldType = EnumFieldType.boolean;
    if (caption !== undefined && caption !== null) {
      builder.caption(caption);
    }
    return builder;
  }

  boolean(caption?: string): RuleBuilder {
    this._fieldType = EnumFieldType.boolean;
    if (caption !== undefined && caption !== null) {
      this.caption(caption);
    }
    return this;
  }

  static date(caption?: string): RuleBuilder {
    var builder = new RuleBuilder();
    builder._fieldType = EnumFieldType.date;
    if (caption !== undefined && caption !== null) {
      builder.caption(caption);
    }
    return builder;
  }

  date(caption?: string): RuleBuilder {
    this._fieldType = EnumFieldType.date;
    if (caption !== undefined && caption !== null) {
      this.caption(caption);
    }
    return this;
  }

  /****************************/
  /* Finish Off               */
  /****************************/
  toRules(): Array<IRule> {
    return this._rules;
  }
}
