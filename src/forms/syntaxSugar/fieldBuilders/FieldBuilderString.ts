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
import EnumFieldType from "../../enums/EnumFieldType";
import FieldBuilderBase from "./FieldBuilderBase";
import SchemaFieldString from "../../schemaField/SchemaFieldString";

export default class FieldBuilderString extends FieldBuilderBase<FieldBuilderString> {
  constructor() {
    super(EnumFieldType.string);
  }
  /****************************/
  /* Assertions - Generic     */
  /****************************/
  mandatory(customMessage?: string): FieldBuilderString {
    this.add(new AssertIsMandatory(customMessage));
    return this;
  }

  empty(customMessage?: string): FieldBuilderString {
    this.add(new AssertIsEmpty(customMessage));
    return this;
  }

  populated(customMessage?: string): FieldBuilderString {
    this.add(new AssertIsPopulated(customMessage));
    return this;
  }

  /****************************/
  /* Assertions               */
  /****************************/
  equal(constant: string, caseInsensitive?: boolean, customMessage?: string): FieldBuilderString {
    this.add(new AssertIsEqualTo(constant, caseInsensitive, customMessage));
    return this;
  }

  lengthBetween(minLength: number, maxLength: number, customMessage?: string): FieldBuilderString {
    this.add(new AssertLengthIsBetween(minLength, maxLength, customMessage));
    return this;
  }

  maxLength(maxLength: number, customMessage?: string): FieldBuilderString {
    this.add(new AssertLengthMax(maxLength, customMessage));
    return this;
  }

  minLength(minLength: number, customMessage?: string): FieldBuilderString {
    this.add(new AssertLengthMin(minLength, customMessage));
    return this;
  }

  containDigits(minCount: number, maxCount: number, customMessage?: string): FieldBuilderString {
    this.add(new AssertContainsDigits(minCount, maxCount, customMessage));
    return this;
  }

  containLowerCase(minCount: number, maxCount: number, customMessage?: string): FieldBuilderString {
    this.add(new AssertContainsLowerCase(minCount, maxCount, customMessage));
    return this;
  }

  containSymbols(minCount: number, maxCount: number, customMessage?: string): FieldBuilderString {
    this.add(new AssertContainsSymbols(minCount, maxCount, customMessage));
    return this;
  }

  containUpperCase(minCount: number, maxCount: number, customMessage?: string): FieldBuilderString {
    this.add(new AssertContainsUpperCase(minCount, maxCount, customMessage));
    return this;
  }

  noWhiteSpaces(customMessage?: string): FieldBuilderString {
    this.add(new AssertContainsNoWhiteSpaces(customMessage));
    return this;
  }

  postCodeUK(customMessage?: string): FieldBuilderString {
    this.add(new AssertPostCodeUK(customMessage));
    return this;
  }

  build(): SchemaFieldString {
    return SchemaFieldString.createWithAssertions(this._id, this._caption, this._assertions);
  }
}
