import AssertIsEmpty from "../../assertions/generic/AssertIsEmpty";
import AssertIsEqualTo from "../../assertions/string/AssertIsEqualTo";
import AssertIsMandatory from "../../assertions/generic/AssertIsMandatory";
import AssertIsPopulated from "../../assertions/generic/AssertIsPopulated";
import AssertValueIsBetween from "../../assertions/number/AssertValueIsBetween";
import AssertValueIsDecimal from "../../assertions/number/AssertValueIsDecimal";
import AssertValueIsInteger from "../../assertions/number/AssertValueIsInteger";
import AssertValueIsNonZero from "../../assertions/number/AssertValueIsNonZero";
import AssertValueIsPositive from "../../assertions/number/AssertValueIsPositive";
import AssertValueIsZero from "../../assertions/number/AssertValueIsZero";
import AssertValueMax from "../../assertions/number/AssertValueMax";
import AssertValueMin from "../../assertions/number/AssertValueMin";
import EnumFieldType from "../../enums/EnumFieldType";
import SchemaFieldNumber from "../../schemaField/SchemaFieldNumber";
import FieldBuilderBase from "./FieldBuilderBase";

export default class FieldBuilderNumber extends FieldBuilderBase<FieldBuilderNumber> {
  constructor() {
    super(EnumFieldType.number);
  }

  /****************************/
  /* Assertions               */
  /****************************/
  shouldBeDecimal(customMessage?: string): FieldBuilderNumber {
    this.add(new AssertValueIsDecimal(customMessage));
    return this;
  }

  shouldBeEmpty(customMessage?: string): FieldBuilderNumber {
    this.add(new AssertIsEmpty(customMessage));
    return this;
  }

  shouldBeInteger(customMessage?: string): FieldBuilderNumber {
    this.add(new AssertValueIsInteger(customMessage));
    return this;
  }

  shouldBeNoneZero(customMessage?: string): FieldBuilderNumber {
    this.add(new AssertValueIsNonZero(customMessage));
    return this;
  }

  shouldBePopulated(customMessage?: string): FieldBuilderNumber {
    this.add(new AssertIsPopulated(customMessage));
    return this;
  }

  shouldBePositive(allowZero: boolean, customMessage?: string): FieldBuilderNumber {
    this.add(new AssertValueIsPositive(allowZero, customMessage));
    return this;
  }

  shouldBeZero(customMessage?: string): FieldBuilderNumber {
    this.add(new AssertValueIsZero(customMessage));
    return this;
  }

  shouldEqual(constant: string, caseInsensitive: boolean, customMessage?: string): FieldBuilderNumber {
    this.add(new AssertIsEqualTo(constant, caseInsensitive, customMessage));
    return this;
  }

  shouldHaveValueBetween(minValue: number, maxValue: number, customMessage?: string): FieldBuilderNumber {
    this.add(new AssertValueIsBetween(minValue, maxValue, customMessage));
    return this;
  }

  shouldHaveValueMax(maxValue: number, customMessage?: string): FieldBuilderNumber {
    this.add(new AssertValueMax(maxValue, customMessage));
    return this;
  }

  shouldHaveValueMin(minValue: number, customMessage?: string): FieldBuilderNumber {
    this.add(new AssertValueMin(minValue, customMessage));
    return this;
  }

  mandatory(customMessage?: string): FieldBuilderNumber {
    this.add(new AssertIsMandatory(customMessage));
    return this;
  }

  build(): SchemaFieldNumber {
    return SchemaFieldNumber.createWithAssertions(this._id, this._caption, this._assertions);
  }
}
