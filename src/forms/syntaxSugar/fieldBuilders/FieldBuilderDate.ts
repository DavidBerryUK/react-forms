import AssertDateMax from "../../assertions/AssertDateMax";
import AssertDateMin from "../../assertions/AssertDateMin";
import AssertIsEmpty from "../../assertions/AssertIsEmpty";
import AssertIsMandatory from "../../assertions/AssertIsMandatory";
import AssertIsPopulated from "../../assertions/AssertIsPopulated";
import AssertValueIsDateLocal from "../../assertions/AssertValueIsDateLocal";
import AssertValueIsDateTimeLocal from "../../assertions/AssertValueIsDateTimeLocal";
import AssertValueIsTime from "../../assertions/AssertValueIsTime";
import EnumFieldType from "../../enums/EnumFieldType";
import SchemaFieldDate from "../../schemaField/SchemaFieldDate";
import FieldBuilderBase from "./FieldBuilderBase";

export default class FieldBuilderDate extends FieldBuilderBase<FieldBuilderDate> {
  constructor() {
    super(EnumFieldType.date);
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

  shouldBeEmpty(customMessage?: string): FieldBuilderDate {
    this.add(new AssertIsEmpty(customMessage));
    return this;
  }

  shouldBePopulated(customMessage?: string): FieldBuilderDate {
    this.add(new AssertIsPopulated(customMessage));
    return this;
  }

  shouldBeTimeLocal(customMessage?: string): FieldBuilderDate {
    this.add(new AssertValueIsTime(customMessage));
    return this;
  }

  shouldHaveDateMax(maxDate: string, customMessage?: string): FieldBuilderDate {
    this.add(new AssertDateMax(maxDate, customMessage));
    return this;
  }

  shouldHaveDateMin(minDate: string, customMessage?: string): FieldBuilderDate {
    this.add(new AssertDateMin(minDate, customMessage));
    return this;
  }

  mandatory(customMessage?: string): FieldBuilderDate {
    this.add(new AssertIsMandatory(customMessage));
    return this;
  }

  build(): SchemaFieldDate {
    return SchemaFieldDate.createWithAssertions(this._id, this._caption, this._assertions);
  }
}
