import AssertContainsDigits from "../../assertions/AssertContainsDigits";
import AssertContainsLowerCase from "../../assertions/AssertContainsLowerCase";
import AssertContainsNoWhiteSpaces from "../../assertions/AssertContainsNoWhiteSpaces";
import AssertContainsSymbols from "../../assertions/AssertContainsSymbols";
import AssertContainsUpperCase from "../../assertions/AssertContainsUpperCase";
import AssertIsEmpty from "../../assertions/AssertIsEmpty";
import AssertIsEqualTo from "../../assertions/AssertIsEqualTo";
import AssertIsMandatory from "../../assertions/AssertIsMandatory";
import AssertIsPopulated from "../../assertions/AssertIsPopulated";
import AssertLengthIsBetween from "../../assertions/AssertLengthIsBetween";
import AssertLengthMax from "../../assertions/AssertLengthMax";
import AssertLengthMin from "../../assertions/AssertLengthMin";
import AssertPostCodeUK from "../../assertions/AssertPostCodeUk";
import AssertValueIsBetween from "../../assertions/AssertValueIsBetween";
import AssertValueMax from "../../assertions/AssertValueMax";
import AssertValueMin from "../../assertions/AssertValueMin";
import EnumFieldType from "../../enums/EnumFieldType";
import SchemaFieldString from "../../schemaField/SchemaFieldString";
import FieldBuilderBase from "./FieldBuilderBase";

export default class FieldBuilderString extends FieldBuilderBase<FieldBuilderString> {
  constructor() {
    super(EnumFieldType.string);
  }

  /****************************/
  /* Rules                    */
  /****************************/
  shouldBeEmpty(customMessage?: string): FieldBuilderString {
    this.add(new AssertIsEmpty(customMessage));
    return this;
  }

  shouldBePopulated(customMessage?: string): FieldBuilderString {
    this.add(new AssertIsPopulated(customMessage));
    return this;
  }

  shouldBePostCodeUK(customMessage?: string): FieldBuilderString {
    this.add(new AssertPostCodeUK(customMessage));
    return this;
  }

  shouldContainDigits(minCount: number, maxCount: number, customMessage?: string): FieldBuilderString {
    this.add(new AssertContainsDigits(minCount, maxCount, customMessage));
    return this;
  }

  shouldContainLowerCase(minCount: number, maxCount: number, customMessage?: string): FieldBuilderString {
    this.add(new AssertContainsLowerCase(minCount, maxCount, customMessage));
    return this;
  }

  shouldContainSymbols(minCount: number, maxCount: number, customMessage?: string): FieldBuilderString {
    this.add(new AssertContainsSymbols(minCount, maxCount, customMessage));
    return this;
  }

  shouldContainUpperCase(minCount: number, maxCount: number, customMessage?: string): FieldBuilderString {
    this.add(new AssertContainsUpperCase(minCount, maxCount, customMessage));
    return this;
  }

  shouldEqual(constant: string, caseInsensitive: boolean, customMessage?: string): FieldBuilderString {
    this.add(new AssertIsEqualTo(constant, caseInsensitive, customMessage));
    return this;
  }

  shouldHaveLengthBetween(minLength: number, maxLength: number, customMessage?: string): FieldBuilderString {
    this.add(new AssertLengthIsBetween(minLength, maxLength, customMessage));
    return this;
  }

  shouldHaveLengthMax(maxLength: number, customMessage?: string): FieldBuilderString {
    this.add(new AssertLengthMax(maxLength, customMessage));
    return this;
  }

  shouldHaveLengthMin(minLength: number, customMessage?: string): FieldBuilderString {
    this.add(new AssertLengthMin(minLength, customMessage));
    return this;
  }

  shouldHaveNoWhiteSpaces(customMessage?: string): FieldBuilderString {
    this.add(new AssertContainsNoWhiteSpaces(customMessage));
    return this;
  }

  shouldHaveValueBetween(minValue: number, maxValue: number, customMessage?: string): FieldBuilderString {
    this.add(new AssertValueIsBetween(minValue, maxValue, customMessage));
    return this;
  }

  shouldHaveValueMax(maxValue: number, customMessage?: string): FieldBuilderString {
    this.add(new AssertValueMax(maxValue, customMessage));
    return this;
  }

  shouldHaveValueMin(minValue: number, customMessage?: string): FieldBuilderString {
    this.add(new AssertValueMin(minValue, customMessage));
    return this;
  }

  mandatory(customMessage?: string): FieldBuilderString {
    this.add(new AssertIsMandatory(customMessage));
    return this;
  }

  build(): SchemaFieldString {
    return SchemaFieldString.createWithRules(this._id, this._caption, this._rules);
  }
}
