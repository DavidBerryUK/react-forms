import AssertIsEmpty from "../../assertions/generic/AssertIsEmpty";
import AssertIsEqualToBoolean from "../../assertions/boolean/AssertIsEqualToBoolean";
import AssertIsMandatory from "../../assertions/generic/AssertIsMandatory";
import AssertIsPopulated from "../../assertions/generic/AssertIsPopulated";
import AssertValueIsFalse from "../../assertions/boolean/AssertValueIsFalse";
import AssertValueIsTrue from "../../assertions/boolean/AssertValueIsTrue";
import EnumFieldType from "../../enums/EnumFieldType";
import FieldBuilderBase from "./FieldBuilderBase";
import SchemaFieldBoolean from "../../schemaField/SchemaFieldBoolean";

export default class FieldBuilderBoolean extends FieldBuilderBase<FieldBuilderBoolean> {
  constructor() {
    super(EnumFieldType.boolean);
  }

  /****************************/
  /* Assertions - Generic     */
  /****************************/
  mandatory(customMessage?: string): FieldBuilderBoolean {
    this.add(new AssertIsMandatory(customMessage));
    return this;
  }

  empty(customMessage?: string): FieldBuilderBoolean {
    this.add(new AssertIsEmpty(customMessage));
    return this;
  }

  populated(customMessage?: string): FieldBuilderBoolean {
    this.add(new AssertIsPopulated(customMessage));
    return this;
  }

  /****************************/
  /* Assertions               */
  /****************************/
  true(customMessage?: string): FieldBuilderBoolean {
    this.add(new AssertValueIsTrue(customMessage));
    return this;
  }

  false(customMessage?: string): FieldBuilderBoolean {
    this.add(new AssertValueIsFalse(customMessage));
    return this;
  }

  equals(constant: boolean, customMessage?: string): FieldBuilderBoolean {
    this.add(new AssertIsEqualToBoolean(constant, customMessage));
    return this;
  }

  build(): SchemaFieldBoolean {
    return SchemaFieldBoolean.createWithAssertions(this._id, this._caption, this._assertions);
  }
}
