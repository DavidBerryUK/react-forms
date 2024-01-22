import AssertDateMax from "../../assertions/date/AssertDateMax";
import AssertDateMin from "../../assertions/date/AssertDateMin";
import AssertIsEmpty from "../../assertions/generic/AssertIsEmpty";
import AssertIsMandatory from "../../assertions/generic/AssertIsMandatory";
import AssertIsPopulated from "../../assertions/generic/AssertIsPopulated";
import AssertValueIsDateLocal from "../../assertions/date/AssertValueIsDateLocal";
import AssertValueIsDateTimeLocal from "../../assertions/date/AssertValueIsDateTimeLocal";
import AssertValueIsTime from "../../assertions/date/AssertValueIsTime";
import EnumFieldType from "../../enums/EnumFieldType";
import SchemaFieldDate from "../../schemaField/SchemaFieldDate";
import FieldBuilderBase from "./FieldBuilderBase";

export default class FieldBuilderDate extends FieldBuilderBase<FieldBuilderDate> {
  constructor() {
    super(EnumFieldType.date);
  }

  /****************************/
  /* Assertions - Generic     */
  /****************************/

  mandatory(customMessage?: string): FieldBuilderDate {
    this.add(new AssertIsMandatory(customMessage));
    return this;
  }

  shouldBeEmpty(customMessage?: string): FieldBuilderDate {
    this.add(new AssertIsEmpty(customMessage));
    return this;
  }

  shouldBePopulated(customMessage?: string): FieldBuilderDate {
    this.add(new AssertIsPopulated(customMessage));
    return this;
  }

  /****************************/
  /* Assertions               */
  /****************************/
  shouldBeDateLocal(customMessage?: string): FieldBuilderDate {
    this.add(new AssertValueIsDateLocal(customMessage));
    return this;
  }

  shouldBeDateTimeLocal(customMessage?: string): FieldBuilderDate {
    this.add(new AssertValueIsDateTimeLocal(customMessage));
    return this;
  }

  shouldBeTimeLocal(customMessage?: string): FieldBuilderDate {
    this.add(new AssertValueIsTime(customMessage));
    return this;
  }

  max(maxDate: string, customMessage?: string): FieldBuilderDate {
    this.add(new AssertDateMax(maxDate, customMessage));
    return this;
  }

  min(minDate: string, customMessage?: string): FieldBuilderDate {
    this.add(new AssertDateMin(minDate, customMessage));
    return this;
  }

  // BETWEEN

  build(): SchemaFieldDate {
    return SchemaFieldDate.createWithAssertions(this._id, this._caption, this._assertions);
  }
}
