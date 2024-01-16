import { RuleDateLocal } from "../validationRules/simple/RuleDateLocal";
import { RuleDateTimeLocal } from "../validationRules/simple/RuleDateTimeLocal";
import IRule from "../interfaces/IRule";
import ISchemaField from "../interfaces/ISchemaField";
import RuleConditionIsPopulated from "../validationRules/simple/RuleConditionIsPopulated";
import RuleContainDigits from "../validationRules/simple/RuleContainDigits";
import RuleContainLowerCase from "../validationRules/simple/RuleContainLowerCase";
import RuleContainSymbols from "../validationRules/simple/RuleContainSymbols";
import RuleContainUpperCase from "../validationRules/simple/RuleContainUpperCase";
import RuleDateMax from "../validationRules/simple/RuleDateMax";
import RuleDateMin from "../validationRules/simple/RuleDateMin";
import RuleDecimal from "../validationRules/simple/RuleDecimal";
import RuleEmpty from "../validationRules/simple/RuleEmpty";
import RuleEquals from "../validationRules/simple/RuleEquals";
import RuleInteger from "../validationRules/simple/RuleInteger";
import RuleIsFalse from "../validationRules/simple/RuleIsFalse";
import RuleIsNonZero from "../validationRules/simple/RuleIsNonZero";
import RuleIsTrue from "../validationRules/simple/RuleIsTrue";
import RuleIsZero from "../validationRules/simple/RuleIsZero";
import RuleLengthBetween from "../validationRules/simple/RuleLengthBetween";
import RuleLengthMax from "../validationRules/simple/RuleLengthMax";
import RuleNoWhiteSpace from "../validationRules/simple/RuleNoWhiteSpace";
import RulePositive from "../validationRules/simple/RulePositive";
import RuleUkPostCode from "../validationRules/simple/RuleUkPostCode";
import RuleValueBetween from "../validationRules/simple/RuleValueBetween";
import RuleValueMax from "../validationRules/simple/RuleValueMax";
import RuleValueMin from "../validationRules/simple/RuleValueMin";

export default class EvaluatesTo {
  private schemaField: ISchemaField;
  private rules: Array<IRule>;

  constructor(schemaField: ISchemaField) {
    this.schemaField = schemaField;
    this.rules = new Array<IRule>();
  }

  isFalse(): EvaluatesTo {
    this.rules.push(new RuleIsFalse());
    return this;
  }

  isPopulated(): EvaluatesTo {
    this.rules.push(new RuleConditionIsPopulated());
    return this;
  }

  containDigits(minCount: number, maxCount: number): EvaluatesTo {
    this.rules.push(new RuleContainDigits(minCount, maxCount));
    return this;
  }

  containLowerCase(minCount: number, maxCount: number): EvaluatesTo {
    this.rules.push(new RuleContainLowerCase(minCount, maxCount));
    return this;
  }

  containSymbols(minCount: number, maxCount: number): EvaluatesTo {
    this.rules.push(new RuleContainSymbols(minCount, maxCount));
    return this;
  }

  containUpperCase(minCount: number, maxCount: number): EvaluatesTo {
    this.rules.push(new RuleContainUpperCase(minCount, maxCount));
    return this;
  }

  isDateLocal(): EvaluatesTo {
    this.rules.push(new RuleDateLocal());
    return this;
  }

  isDateTimeLocal(): EvaluatesTo {
    this.rules.push(new RuleDateTimeLocal());
    return this;
  }

  isTimeLocal(): EvaluatesTo {
    this.rules.push(new RuleDateTimeLocal());
    return this;
  }

  isDecimal(): EvaluatesTo {
    this.rules.push(new RuleDecimal());
    return this;
  }

  isInteger(): EvaluatesTo {
    this.rules.push(new RuleInteger());
    return this;
  }

  isEmpty(): EvaluatesTo {
    this.rules.push(new RuleEmpty());
    return this;
  }

  isNoneZero(): EvaluatesTo {
    this.rules.push(new RuleIsNonZero());
    return this;
  }

  isZero(): EvaluatesTo {
    this.rules.push(new RuleIsZero());
    return this;
  }

  isTrue(): EvaluatesTo {
    this.rules.push(new RuleIsTrue());
    return this;
  }

  isPositive(allowZero: boolean): EvaluatesTo {
    this.rules.push(new RulePositive(allowZero));
    return this;
  }

  // isNegative() : SchemaFieldEvaluatesTo {
  //
  //     return this;
  // }

  isUkPostCode(): EvaluatesTo {
    this.rules.push(new RuleUkPostCode());
    return this;
  }

  lengthMin(minLength: number): EvaluatesTo {
    this.rules.push(new RuleValueMin(minLength));
    return this;
  }

  lengthMax(maxLength: number): EvaluatesTo {
    this.rules.push(new RuleLengthMax(maxLength));
    return this;
  }

  lengthBetween(minLength: number, maxLength: number): EvaluatesTo {
    this.rules.push(new RuleLengthBetween(minLength, maxLength));
    return this;
  }

  valueMin(minValue: number): EvaluatesTo {
    this.rules.push(new RuleValueMin(minValue));
    return this;
  }

  valueMax(maxValue: number): EvaluatesTo {
    this.rules.push(new RuleValueMax(maxValue));
    return this;
  }

  valueBetween(minValue: number, maxValue: number): EvaluatesTo {
    this.rules.push(new RuleValueBetween(minValue, maxValue));
    return this;
  }

  isDateLessThan(minDate: string): EvaluatesTo {
    this.rules.push(new RuleDateMin(minDate));
    return this;
  }

  isDateGreaterThan(maxDate: string): EvaluatesTo {
    this.rules.push(new RuleDateMax(maxDate));
    return this;
  }

  isDateBetween(minDate: string, maxDate: string): EvaluatesTo {
    //this.rules.push(new ruledate());
    return this;
  }

  // TODO:
  doesContainNoWhiteSpace(): EvaluatesTo {
    this.rules.push(new RuleNoWhiteSpace());
    return this;
  }

  // TODO:
  doesContainWhiteSpace(): EvaluatesTo {
    this.rules.push(new RuleNoWhiteSpace());
    return this;
  }

  doEquals(constant: string, caseInsensitive: boolean): EvaluatesTo {
    this.rules.push(new RuleEquals(constant, caseInsensitive));
    return this;
  }
}
