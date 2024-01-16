import { enumFieldType } from "../enums/EnumFieldType";
import { RuleDateLocal } from "../validationRules/simple/RuleDateLocal";
import { RuleDateTimeLocal } from "../validationRules/simple/RuleDateTimeLocal";
import { RuleTime } from "../validationRules/simple/RuleTime";
import IRule from "../interfaces/IRule";
import ISchemaField from "../interfaces/ISchemaField";
import RuleConditionIsPopulated from "../validationRules/simple/RuleConditionIsPopulated";
import RuleContainDigits from "../validationRules/simple/RuleContainDigits";
import RuleContainLowerCase from "../validationRules/simple/RuleContainLowerCase";
import RuleContainSymbols from "../validationRules/simple/RuleContainSymbols";
import RuleContainUpperCase from "../validationRules/simple/RuleContainUpperCase";
import RuleDateMin from "../validationRules/simple/RuleDateMin";
import RuleDecimal from "../validationRules/simple/RuleDecimal";
import RuleEmpty from "../validationRules/simple/RuleEmpty";
import RuleEquals from "../validationRules/simple/RuleEquals";
import RuleInteger from "../validationRules/simple/RuleInteger";
import RuleIsNonZero from "../validationRules/simple/RuleIsNonZero";
import RuleIsTrue from "../validationRules/simple/RuleIsTrue";
import RuleIsZero from "../validationRules/simple/RuleIsZero";
import RuleLengthMax from "../validationRules/simple/RuleLengthMax";
import RuleLengthMin from "../validationRules/simple/RuleLengthMin";
import RuleMandatory from "../validationRules/simple/RuleMandatory";
import RuleNoWhiteSpace from "../validationRules/simple/RuleNoWhiteSpace";
import RulePositive from "../validationRules/simple/RulePositive";
import RuleUkPostCode from "../validationRules/simple/RuleUkPostCode";
import RuleValueBetween from "../validationRules/simple/RuleValueBetween";
import RuleValueMax from "../validationRules/simple/RuleValueMax";
import SchemaField from "./SchemaField";
import RuleValueMin from "../validationRules/simple/RuleValueMin";
import RuleLengthBetween from "../validationRules/simple/RuleLengthBetween";
import RuleDateMax from "../validationRules/simple/RuleDateMax";

export default class Builder {
  private _fieldType: enumFieldType;
  private _id: string;
  private _rules: Array<IRule>;

  constructor() {
    this._rules = new Array<IRule>();
    this._id = "";
    this._fieldType = enumFieldType.string;
  }

  id(id: string): Builder {
    this._id = id;
    return this;
  }

  caption(caption: string): Builder {
    return this;
  }

  static id(name: string): Builder {
    var builder = new Builder();
    builder.id(name);
    return builder;
  }

  static caption(caption: string): Builder {
    var builder = new Builder();
    builder.caption(caption);
    return builder;
  }

  /****************************/
  /* TYPE - one is mandatory  */
  /****************************/
  static string(caption?: string): Builder {
    var builder = new Builder();
    builder._fieldType = enumFieldType.string;
    if (caption !== undefined && caption !== null) {
      builder.caption(caption);
    }
    return builder;
  }

  string(caption?: string): Builder {
    this._fieldType = enumFieldType.string;
    if (caption !== undefined && caption !== null) {
      this.caption(caption);
    }
    return this;
  }

  static number(caption?: string): Builder {
    var builder = new Builder();
    builder._fieldType = enumFieldType.number;
    if (caption !== undefined && caption !== null) {
      builder.caption(caption);
    }
    return builder;
  }

  number(caption?: string): Builder {
    this._fieldType = enumFieldType.number;
    if (caption !== undefined && caption !== null) {
      this.caption(caption);
    }
    return this;
  }

  static boolean(caption?: string): Builder {
    var builder = new Builder();
    builder._fieldType = enumFieldType.boolean;
    if (caption !== undefined && caption !== null) {
      builder.caption(caption);
    }
    return builder;
  }

  boolean(caption?: string): Builder {
    this._fieldType = enumFieldType.boolean;
    if (caption !== undefined && caption !== null) {
      this.caption(caption);
    }
    return this;
  }

  static date(caption?: string): Builder {
    var builder = new Builder();
    builder._fieldType = enumFieldType.date;
    if (caption !== undefined && caption !== null) {
      builder.caption(caption);
    }
    return builder;
  }

  date(caption?: string): Builder {
    this._fieldType = enumFieldType.date;
    if (caption !== undefined && caption !== null) {
      this.caption(caption);
    }
    return this;
  }

  /****************************/
  /* rules                    */
  /****************************/
  isPopulated(customMessage?: string): Builder {
    this._rules.push(new RuleConditionIsPopulated(customMessage));
    return this;
  }

  containDigits(minCount: number, maxCount: number, customMessage?: string): Builder {
    this._rules.push(new RuleContainDigits(minCount, maxCount, customMessage));
    return this;
  }

  containLowerCase(minCount: number, maxCount: number, customMessage?: string): Builder {
    this._rules.push(new RuleContainLowerCase(minCount, maxCount, customMessage));
    return this;
  }

  containSymbols(minCount: number, maxCount: number, customMessage?: string): Builder {
    this._rules.push(new RuleContainSymbols(minCount, maxCount, customMessage));
    return this;
  }

  containUpperCase(minCount: number, maxCount: number, customMessage?: string): Builder {
    this._rules.push(new RuleContainUpperCase(minCount, maxCount, customMessage));
    return this;
  }

  isDateLocal(customMessage?: string): Builder {
    this._rules.push(new RuleDateLocal(customMessage));
    return this;
  }

  isDateTimeLocal(customMessage?: string): Builder {
    this._rules.push(new RuleDateTimeLocal(customMessage));
    return this;
  }

  isTimeLocal(customMessage?: string): Builder {
    this._rules.push(new RuleTime(customMessage));
    return this;
  }

  isDecimal(customMessage?: string): Builder {
    this._rules.push(new RuleDecimal(customMessage));
    return this;
  }

  isInteger(customMessage?: string): Builder {
    this._rules.push(new RuleInteger(customMessage));
    return this;
  }

  isEmpty(customMessage?: string): Builder {
    this._rules.push(new RuleEmpty(customMessage));
    return this;
  }

  isNoneZero(customMessage?: string): Builder {
    this._rules.push(new RuleIsNonZero(customMessage));
    return this;
  }

  isZero(customMessage?: string): Builder {
    this._rules.push(new RuleIsZero(customMessage));
    return this;
  }

  isTrue(customMessage?: string): Builder {
    this._rules.push(new RuleIsTrue(customMessage));
    return this;
  }

  isPositive(allowZero: boolean, customMessage?: string): Builder {
    this._rules.push(new RulePositive(allowZero, customMessage));
    return this;
  }

  // isNegative(customMessage?: string) : SchemaFieldBuilder {
  //     this._rules.push(new ruleNegative(customMessage)
  //     return this;
  // }

  isUkPostCode(customMessage?: string): Builder {
    this._rules.push(new RuleUkPostCode(customMessage));
    return this;
  }

  mandatory(customMessage?: string): Builder {
    this._rules.push(new RuleMandatory(customMessage));
    return this;
  }

  lengthMin(minLength: number, customMessage?: string): Builder {
    this._rules.push(new RuleLengthMin(minLength, customMessage));
    return this;
  }

  lengthMax(maxLength: number, customMessage?: string): Builder {
    this._rules.push(new RuleLengthMax(maxLength, customMessage));
    return this;
  }

  lengthBetween(minLength: number, maxLength: number, customMessage?: string): Builder {
    this._rules.push(new RuleLengthBetween(minLength, maxLength, customMessage));
    return this;
  }

  valueMin(minValue: number, customMessage?: string): Builder {
    this._rules.push(new RuleValueMin(minValue, customMessage));
    return this;
  }

  valueMax(maxValue: number, customMessage?: string): Builder {
    this._rules.push(new RuleValueMax(maxValue, customMessage));
    return this;
  }

  valueBetween(minValue: number, maxValue: number, customMessage?: string): Builder {
    this._rules.push(new RuleValueBetween(minValue, maxValue, customMessage));
    return this;
  }

  minDate(minDate: string, customMessage?: string): Builder {
    this._rules.push(new RuleDateMin(minDate, customMessage));
    return this;
  }

  maxDate(maxDate: string, customMessage?: string): Builder {
    this._rules.push(new RuleDateMax(maxDate, customMessage));
    return this;
  }

  // dateBetween(minDate: string,maxDate: string, customMessage?: string): SchemaFieldBuilder {
  //     this._rules.push(new RuleDateBetween(minDate,maxDate, customMessage));
  //     return this;
  // }

  noWhiteSpace(customMessage?: string): Builder {
    this._rules.push(new RuleNoWhiteSpace(customMessage));
    return this;
  }

  equals(constant: string, caseInsensitive: boolean, customMessage?: string): Builder {
    this._rules.push(new RuleEquals(constant, caseInsensitive, customMessage));
    return this;
  }

  /****************************/
  /* Add Rules                */
  /****************************/
  withRule(rule: IRule): Builder {
    this._rules.push(rule);
    return this;
  }

  withRules(rules: Array<IRule>): Builder {
    this._rules = this._rules.concat(rules);
    return this;
  }

  /****************************/
  /* Finish Off               */
  /****************************/
  toField(): ISchemaField {
    return SchemaField.create("name", "caption", enumFieldType.boolean);
  }

  toRules(): Array<IRule> {
    return this._rules;
  }
}
