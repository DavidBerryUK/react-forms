import AssertIsEmpty from "../../assertions/generic/AssertIsEmpty";
import AssertIsEqualToNumber from "../../assertions/number/AssertIsEqualToNumber";
import AssertIsMandatory from "../../assertions/generic/AssertIsMandatory";
import AssertIsNotEqualToNumber from "../../assertions/number/AssertIsNotEqualToNumber";
import AssertIsPopulated from "../../assertions/generic/AssertIsPopulated";
import AssertValueIsBetween from "../../assertions/number/AssertValueIsBetween";
import AssertValueIsDecimal from "../../assertions/number/AssertValueIsDecimal";
import AssertValueIsInteger from "../../assertions/number/AssertValueIsInteger";
import AssertValueIsNegative from "../../assertions/number/AssertValueIsNegative";
import AssertValueIsNonZero from "../../assertions/number/AssertValueIsNonZero";
import AssertValueIsPositive from "../../assertions/number/AssertValueIsPositive";
import AssertValueIsZero from "../../assertions/number/AssertValueIsZero";
import AssertValueMax from "../../assertions/number/AssertValueMax";
import AssertValueMin from "../../assertions/number/AssertValueMin";
import EnumFieldType from "../../enums/EnumFieldType";
import FieldBuilderBase from "./FieldBuilderBase";
import SchemaFieldNumber from "../../schemaField/SchemaFieldNumber";

export default class FieldBuilderNumber extends FieldBuilderBase<FieldBuilderNumber> {
  constructor() {
    super(EnumFieldType.number);
  }

  /****************************/
  /* Assertions - Generic     */
  /****************************/
  mandatory(customMessage?: string): FieldBuilderNumber {
    this.add(new AssertIsMandatory(customMessage));
    return this;
  }

  empty(customMessage?: string): FieldBuilderNumber {
    this.add(new AssertIsEmpty(customMessage));
    return this;
  }

  populated(customMessage?: string): FieldBuilderNumber {
    this.add(new AssertIsPopulated(customMessage));
    return this;
  }

  /****************************/
  /* Assertions - types       */
  /****************************/

  decimal(customMessage?: string): FieldBuilderNumber {
    this.add(new AssertValueIsDecimal(customMessage));
    return this;
  }

  integer(customMessage?: string): FieldBuilderNumber {
    this.add(new AssertValueIsInteger(customMessage));
    return this;
  }

  /****************************/
  /* Assertions - equality    */
  /****************************/

  equal(constant: number, tolerance?: number, customMessage?: string): FieldBuilderNumber {
    this.add(new AssertIsEqualToNumber(constant, tolerance, customMessage));
    return this;
  }

  notEqual(constant: number, tolerance?: number, customMessage?: string): FieldBuilderNumber {
    this.add(new AssertIsNotEqualToNumber(constant, tolerance, customMessage));
    return this;
  }

  zero(customMessage?: string): FieldBuilderNumber {
    this.add(new AssertValueIsZero(customMessage));
    return this;
  }

  notZero(customMessage?: string): FieldBuilderNumber {
    this.add(new AssertValueIsNonZero(customMessage));
    return this;
  }

  positive(allowZero?: boolean, customMessage?: string): FieldBuilderNumber {
    this.add(new AssertValueIsPositive(allowZero, customMessage));
    return this;
  }

  negative(customMessage?: string): FieldBuilderNumber {
    this.add(new AssertValueIsNegative(customMessage));
    return this;
  }

  between(minValue: number, maxValue: number, customMessage?: string): FieldBuilderNumber {
    this.add(new AssertValueIsBetween(minValue, maxValue, customMessage));
    return this;
  }

  min(constant: number, customMessage?: string): FieldBuilderNumber {
    this.add(new AssertValueMin(constant, customMessage));
    return this;
  }

  max(constant: number, customMessage?: string): FieldBuilderNumber {
    this.add(new AssertValueMax(constant, customMessage));
    return this;
  }

  /****************************/
  /* Assertions - build       */
  /****************************/

  build(): SchemaFieldNumber {
    return SchemaFieldNumber.createWithAssertions(this._id, this._caption, this._assertions);
  }
}
