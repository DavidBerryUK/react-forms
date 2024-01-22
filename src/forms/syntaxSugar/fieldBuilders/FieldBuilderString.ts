import AssertContainsDigits from "../../assertions/string/AssertContainsDigits";
import AssertContainsLowerCase from "../../assertions/string/AssertContainsLowerCase";
import AssertContainsNoWhiteSpaces from "../../assertions/string/AssertContainsNoWhiteSpaces";
import AssertContainsSymbols from "../../assertions/string/AssertContainsSymbols";
import AssertContainsUpperCase from "../../assertions/string/AssertContainsUpperCase";
import AssertIsEmpty from "../../assertions/generic/AssertIsEmpty";
import AssertIsEqualTo from "../../assertions/string/AssertIsEqualTo";
import AssertIsMandatory from "../../assertions/generic/AssertIsMandatory";
import AssertIsPopulated from "../../assertions/generic/AssertIsPopulated";
import AssertLengthIsBetween from "../../assertions/string/AssertLengthIsBetween";
import AssertLengthMax from "../../assertions/string/AssertLengthMax";
import AssertLengthMin from "../../assertions/string/AssertLengthMin";
import AssertPostCodeUK from "../../assertions/string/AssertPostCodeUk";
import AssertValueIsBetween from "../../assertions/number/AssertValueIsBetween";
import AssertValueMax from "../../assertions/number/AssertValueMax";
import AssertValueMin from "../../assertions/number/AssertValueMin";
import EnumFieldType from "../../enums/EnumFieldType";
import SchemaFieldString from "../../schemaField/SchemaFieldString";
import FieldBuilderBase from "./FieldBuilderBase";

export default class FieldBuilderString extends FieldBuilderBase<FieldBuilderString> {
  constructor() {
    super(EnumFieldType.string);
  }

  /****************************/
  /* Assertions               */
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
    return SchemaFieldString.createWithAssertions(this._id, this._caption, this._assertions);
  }
}
