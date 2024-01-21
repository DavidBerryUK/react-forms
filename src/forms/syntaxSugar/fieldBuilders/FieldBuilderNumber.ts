import AssertIsEmpty from "../../assertions/AssertIsEmpty";
import AssertIsEqualTo from "../../assertions/AssertIsEqualTo";
import AssertIsMandatory from "../../assertions/AssertIsMandatory";
import AssertIsPopulated from "../../assertions/AssertIsPopulated";
import AssertValueIsBetween from "../../assertions/AssertValueIsBetween";
import AssertValueIsDecimal from "../../assertions/AssertValueIsDecimal";
import AssertValueIsInteger from "../../assertions/AssertValueIsInteger";
import AssertValueIsNonZero from "../../assertions/AssertValueIsNonZero";
import AssertValueIsPositive from "../../assertions/AssertValueIsPositive";
import AssertValueIsZero from "../../assertions/AssertValueIsZero";
import AssertValueMax from "../../assertions/AssertValueMax";
import AssertValueMin from "../../assertions/AssertValueMin";
import EnumFieldType from "../../enums/EnumFieldType";
import SchemaFieldNumber from "../../schemaField/SchemaFieldNumber";
import FieldBuilderBase from "./FieldBuilderBase";

export default class FieldBuilderNumber extends FieldBuilderBase<FieldBuilderNumber> {
  constructor() {
    super(EnumFieldType.number);
  }

  /****************************/
  /* Rules                    */
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
    return SchemaFieldNumber.createWithRules(this._id, this._caption, this._rules);
  }
}
