import { enumFieldType } from "../enums/EnumFieldType";
import IRule from "../interfaces/IRule";
import ISchemaField from "../interfaces/ISchemaField";
import RuleConditionIsPopulated from "../validationRules/simple/RuleConditionIsPopulated";
import RuleContainDigits from "../validationRules/simple/RuleContainDigits";
import RuleContainLowerCase from "../validationRules/simple/RuleContainLowerCase";
import RuleContainSymbols from "../validationRules/simple/RuleContainSymbols";
import RuleContainUpperCase from "../validationRules/simple/RuleContainUpperCase";
import { RuleDateLocal } from "../validationRules/simple/RuleDateLocal";
import { RuleDateTimeLocal } from "../validationRules/simple/RuleDateTimeLocal";
import RuleDecimal from "../validationRules/simple/RuleDecimal";
import RuleEmpty from "../validationRules/simple/RuleEmpty";
import RuleEquals from "../validationRules/simple/RuleEquals";
import RuleInteger from "../validationRules/simple/RuleInteger";
import RuleIsNonZero from "../validationRules/simple/RuleIsNonZero";
import RuleIsTrue from "../validationRules/simple/RuleIsTrue";
import RuleIsZero from "../validationRules/simple/RuleIsZero";
import RuleMandatory from "../validationRules/simple/RuleMandatory";
import RuleLengthMax from "../validationRules/simple/RuleLengthMax";
import RuleValueMax from "../validationRules/simple/RuleValueMax";
import RuleDateMin from "../validationRules/simple/RuleDateMin";
import RuleLengthMin from "../validationRules/simple/RuleLengthMin";
import RuleNoWhiteSpace from "../validationRules/simple/RuleNoWhiteSpace";
import RulePositive from "../validationRules/simple/RulePositive";
import { RuleTime } from "../validationRules/simple/RuleTime";
import RuleUkPostCode from "../validationRules/simple/RuleUkPostCode";
import RuleValueBetween from "../validationRules/simple/RuleValueBetween";
import SchemaField from "./SchemaField";

export default class SchemaFieldBuilder {

    private _fieldType: enumFieldType;
    private _name: string;
    private _rules: Array<IRule>;

    constructor() {
        this._rules = new Array<IRule>();
        this._name = "";
        this._fieldType = enumFieldType.string;
    }

    name(name: string): SchemaFieldBuilder {
        this._name = name;
        return this;
    }

    caption(caption: string): SchemaFieldBuilder {
        return this;
    }

    /****************************/
    /* TYPE - one is mandatory  */
    /****************************/
    string(): SchemaFieldBuilder {
        this._fieldType = enumFieldType.string;
        return this;
    }

    number(): SchemaFieldBuilder {
        this._fieldType = enumFieldType.number;
        return this;
    }

    boolean(): SchemaFieldBuilder {
        this._fieldType = enumFieldType.boolean;
        return this;
    }

    date(): SchemaFieldBuilder {
        this._fieldType = enumFieldType.date;
        return this;
    }

    /****************************/
    /* rules                    */
    /****************************/
    isPopulated(customMessage?: string): SchemaFieldBuilder {
        this._rules.push(new RuleConditionIsPopulated(customMessage))
        return this;
    }

    containDigits(minCount: number, maxCount: number, customMessage?: string): SchemaFieldBuilder {
        this._rules.push(new RuleContainDigits(minCount, maxCount, customMessage));
        return this;
    }

    containLowerCase(minCount: number, maxCount: number, customMessage?: string): SchemaFieldBuilder {
        this._rules.push(new RuleContainLowerCase(minCount, maxCount, customMessage));
        return this;
    }

    containSymbols(minCount: number, maxCount: number, customMessage?: string): SchemaFieldBuilder {
        this._rules.push(new RuleContainSymbols(minCount, maxCount, customMessage));
        return this;
    }

    containUpperCase(minCount: number, maxCount: number, customMessage?: string): SchemaFieldBuilder {
        this._rules.push(new RuleContainUpperCase(minCount, maxCount, customMessage));
        return this;
    }

    isDateLocal(customMessage?: string): SchemaFieldBuilder {
        this._rules.push(new RuleDateLocal(customMessage));
        return this;
    }

    isDateTimeLocal(customMessage?: string): SchemaFieldBuilder {
        this._rules.push(new RuleDateTimeLocal(customMessage));
        return this
    }

    isTimeLocal(customMessage?: string): SchemaFieldBuilder {
        this._rules.push(new RuleTime(customMessage));
        return this;
    }

    isDecimal(customMessage?: string): SchemaFieldBuilder {
        this._rules.push(new RuleDecimal(customMessage));
        return this;
    }

    isInteger(customMessage?: string): SchemaFieldBuilder {
        this._rules.push(new RuleInteger(customMessage));
        return this;
    }

    isEmpty(customMessage?: string): SchemaFieldBuilder {
        this._rules.push(new RuleEmpty(customMessage));
        return this;
    }

    isNoneZero(customMessage?: string): SchemaFieldBuilder {
        this._rules.push(new RuleIsNonZero(customMessage));
        return this;
    }

    isZero(customMessage?: string): SchemaFieldBuilder {
        this._rules.push(new RuleIsZero(customMessage));
        return this;
    }

    isTrue(customMessage?: string): SchemaFieldBuilder {
        this._rules.push(new RuleIsTrue(customMessage));
        return this;
    }

    isPositive(allowZero: boolean, customMessage?: string): SchemaFieldBuilder {
        this._rules.push(new RulePositive(allowZero, customMessage));
        return this;
    }

    // isNegative(customMessage?: string) : SchemaFieldBuilder {
    //     this._rules.push(new ruleNegative(customMessage)
    //     return this;
    // }

    isUkPostCode(customMessage?: string): SchemaFieldBuilder {
        this._rules.push(new RuleUkPostCode(customMessage));
        return this;
    }

    mandatory(customMessage?: string): SchemaFieldBuilder {
        this._rules.push(new RuleMandatory(customMessage));
        return this;
    }

    maxLength(maxLength: number, customMessage?: string): SchemaFieldBuilder {
        this._rules.push(new RuleLengthMax(maxLength, customMessage));
        return this;
    }

    minLength(minLength: number, customMessage?: string): SchemaFieldBuilder {
        this._rules.push(new RuleLengthMin(minLength, customMessage));
        return this;
    }

    maxValue(maxValue: number, customMessage?: string): SchemaFieldBuilder {
        this._rules.push(new RuleValueMax(maxValue, customMessage));
        return this;
    }

    minValue(minValue: number, customMessage?: string): SchemaFieldBuilder {
        this._rules.push(new RuleValueMax(minValue, customMessage));
        return this;
    }

    valueBetween(minValue: number, maxValue: number, customMessage?: string): SchemaFieldBuilder {
        this._rules.push(new RuleValueBetween(minValue, maxValue, customMessage));
        return this;
    }

    minDate(minDate: string, customMessage?: string): SchemaFieldBuilder {
        this._rules.push(new RuleDateMin(minDate, customMessage));
        return this;
    }

    // maxDate(maxDate: string, customMessage?: string): SchemaFieldBuilder {
    //     this._rules.push(new RuleDate(maxDate, customMessage));
    //     return this;
    // }

    // dateBetween(minDate: string,maxDate: string, customMessage?: string): SchemaFieldBuilder {
    //     this._rules.push(new RuleDateBetween(minDate,maxDate, customMessage));
    //     return this;
    // }

    noWhiteSpace(customMessage?: string): SchemaFieldBuilder {
        this._rules.push(new RuleNoWhiteSpace(customMessage));
        return this;
    }

    equals(constant: string, caseInsensitive: boolean, customMessage?: string): SchemaFieldBuilder {
        this._rules.push(new RuleEquals(constant, caseInsensitive, customMessage));
        return this;
    }

    /****************************/
    /* Finish Off               */
    /****************************/
    build(): ISchemaField {
        return SchemaField.create("name", "caption", enumFieldType.boolean)
    }
}