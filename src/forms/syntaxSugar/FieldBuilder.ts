import EnumFieldType from "../enums/EnumFieldType";

import IRule from "../interfaces/IRule";
import ISchemaField from "../interfaces/ISchemaField";
import SchemaField from "../models/SchemaField";

import AssertContainsDigits from "../assertions/AssertContainsDigits";
import AssertContainsLowerCase from "../assertions/AssertContainsLowerCase";
import AssertContainsNoWhiteSpaces from "../assertions/AssertContainsNoWhiteSpaces";
import AssertContainsSymbols from "../assertions/AssertContainsSymbols";
import AssertContainsUpperCase from "../assertions/AssertContainsUpperCase";
import AssertDateMax from "../assertions/AssertDateMax";
import AssertDateMin from "../assertions/AssertDateMin";
import AssertIsEmpty from "../assertions/AssertIsEmpty";
import AssertIsEqualTo from "../assertions/AssertIsEqualTo";
import AssertIsMandatory from "../assertions/AssertIsMandatory";
import AssertLengthIsBetween from "../assertions/AssertLengthIsBetween";
import AssertLengthMax from "../assertions/AssertLengthMax";
import AssertLengthMin from "../assertions/AssertLengthMin";
import AssertPostCodeUK from "../assertions/AssertPostCodeUk";
import AssertValueIsBetween from "../assertions/AssertValueIsBetween";
import AssertValueIsDateLocal from "../assertions/AssertValueIsDateLocal";
import AssertValueIsDateTimeLocal from "../assertions/AssertValueIsDateTimeLocal";
import AssertValueIsDecimal from "../assertions/AssertValueIsDecimal";
import AssertValueIsInteger from "../assertions/AssertValueIsInteger";
import AssertValueIsNonZero from "../assertions/AssertValueIsNonZero";
import AssertValueIsPositive from "../assertions/AssertValueIsPositive";
import AssertValueIsTime from "../assertions/AssertValueIsTime";
import AssertValueIsTrue from "../assertions/AssertValueIsTrue";
import AssertValueIsZero from "../assertions/AssertValueIsZero";
import AssertValueMax from "../assertions/AssertValueMax";
import AssertValueMin from "../assertions/AssertValueMin";
import RuleAssertIsPopulated from "../assertions/AssertIsPopulated";

export default class FieldBuilder {
  private _fieldType: EnumFieldType;
  private _id: string;
  private _rules: Array<IRule>;

  constructor() {
    this._rules = new Array<IRule>();
    this._id = "";
    this._fieldType = EnumFieldType.string;
  }

  id(id: string): FieldBuilder {
    this._id = id;
    return this;
  }

  caption(caption: string): FieldBuilder {
    return this;
  }

  static id(name: string): FieldBuilder {
    var builder = new FieldBuilder();
    builder.id(name);
    return builder;
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
  /* rules                    */
  /****************************/
  shouldBePopulated(customMessage?: string): FieldBuilder {
    this._rules.push(new RuleAssertIsPopulated(customMessage));
    return this;
  }

  shouldContainDigits(minCount: number, maxCount: number, customMessage?: string): FieldBuilder {
    this._rules.push(new AssertContainsDigits(minCount, maxCount, customMessage));
    return this;
  }

  shouldContainLowerCase(minCount: number, maxCount: number, customMessage?: string): FieldBuilder {
    this._rules.push(new AssertContainsLowerCase(minCount, maxCount, customMessage));
    return this;
  }

  shouldContainSymbols(minCount: number, maxCount: number, customMessage?: string): FieldBuilder {
    this._rules.push(new AssertContainsSymbols(minCount, maxCount, customMessage));
    return this;
  }

  shouldContainUpperCase(minCount: number, maxCount: number, customMessage?: string): FieldBuilder {
    this._rules.push(new AssertContainsUpperCase(minCount, maxCount, customMessage));
    return this;
  }

  shouldBeDateLocal(customMessage?: string): FieldBuilder {
    this._rules.push(new AssertValueIsDateLocal(customMessage));
    return this;
  }

  shouldBeDateTimeLocal(customMessage?: string): FieldBuilder {
    this._rules.push(new AssertValueIsDateTimeLocal(customMessage));
    return this;
  }

  shouldBeTimeLocal(customMessage?: string): FieldBuilder {
    this._rules.push(new AssertValueIsTime(customMessage));
    return this;
  }

  shouldeBeDecimal(customMessage?: string): FieldBuilder {
    this._rules.push(new AssertValueIsDecimal(customMessage));
    return this;
  }

  shouldBeInteger(customMessage?: string): FieldBuilder {
    this._rules.push(new AssertValueIsInteger(customMessage));
    return this;
  }

  shouldBeEmpty(customMessage?: string): FieldBuilder {
    this._rules.push(new AssertIsEmpty(customMessage));
    return this;
  }

  shouldBeNoneZero(customMessage?: string): FieldBuilder {
    this._rules.push(new AssertValueIsNonZero(customMessage));
    return this;
  }

  shouldBeZero(customMessage?: string): FieldBuilder {
    this._rules.push(new AssertValueIsZero(customMessage));
    return this;
  }

  shouldBeTrue(customMessage?: string): FieldBuilder {
    this._rules.push(new AssertValueIsTrue(customMessage));
    return this;
  }

  shouldBePositive(allowZero: boolean, customMessage?: string): FieldBuilder {
    this._rules.push(new AssertValueIsPositive(allowZero, customMessage));
    return this;
  }

  // isNegative(customMessage?: string) : SchemaFieldBuilder {
  //     this._rules.push(new ruleNegative(customMessage)
  //     return this;
  // }

  shouldBeUkPostCode(customMessage?: string): FieldBuilder {
    this._rules.push(new AssertPostCodeUK(customMessage));
    return this;
  }

  mandatory(customMessage?: string): FieldBuilder {
    this._rules.push(new AssertIsMandatory(customMessage));
    return this;
  }

  shouldHaveLengthMin(minLength: number, customMessage?: string): FieldBuilder {
    this._rules.push(new AssertLengthMin(minLength, customMessage));
    return this;
  }

  shouldHaveLengthMax(maxLength: number, customMessage?: string): FieldBuilder {
    this._rules.push(new AssertLengthMax(maxLength, customMessage));
    return this;
  }

  shouldHaveLengthBetween(minLength: number, maxLength: number, customMessage?: string): FieldBuilder {
    this._rules.push(new AssertLengthIsBetween(minLength, maxLength, customMessage));
    return this;
  }

  shouldHaveValueMin(minValue: number, customMessage?: string): FieldBuilder {
    this._rules.push(new AssertValueMin(minValue, customMessage));
    return this;
  }

  shouldHaveValueMax(maxValue: number, customMessage?: string): FieldBuilder {
    this._rules.push(new AssertValueMax(maxValue, customMessage));
    return this;
  }

  shouldHaveValueBetween(minValue: number, maxValue: number, customMessage?: string): FieldBuilder {
    this._rules.push(new AssertValueIsBetween(minValue, maxValue, customMessage));
    return this;
  }

  shouldHaveDateMin(minDate: string, customMessage?: string): FieldBuilder {
    this._rules.push(new AssertDateMin(minDate, customMessage));
    return this;
  }

  shouldHaveDateMax(maxDate: string, customMessage?: string): FieldBuilder {
    this._rules.push(new AssertDateMax(maxDate, customMessage));
    return this;
  }

  // dateBetween(minDate: string,maxDate: string, customMessage?: string): SchemaFieldBuilder {
  //     this._rules.push(new RuleDateBetween(minDate,maxDate, customMessage));
  //     return this;
  // }

  shouldHaveNoWhiteSpaces(customMessage?: string): FieldBuilder {
    this._rules.push(new AssertContainsNoWhiteSpaces(customMessage));
    return this;
  }

  shouldEqual(constant: string, caseInsensitive: boolean, customMessage?: string): FieldBuilder {
    this._rules.push(new AssertIsEqualTo(constant, caseInsensitive, customMessage));
    return this;
  }

  /****************************/
  /* Add Rules                */
  /****************************/
  withRule(rule: IRule): FieldBuilder {
    this._rules.push(rule);
    return this;
  }

  withRules(rules: Array<IRule>): FieldBuilder {
    this._rules = this._rules.concat(rules);
    return this;
  }

  /****************************/
  /* Finish Off               */
  /****************************/
  toField(): ISchemaField {
    return SchemaField.create("name", "caption", EnumFieldType.boolean);
  }

  toRules(): Array<IRule> {
    return this._rules;
  }
}
