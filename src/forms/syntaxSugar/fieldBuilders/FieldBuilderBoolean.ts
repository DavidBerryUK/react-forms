import AssertIsEmpty from "../../assertions/AssertIsEmpty";
import AssertIsEqualTo from "../../assertions/AssertIsEqualTo";
import AssertIsMandatory from "../../assertions/AssertIsMandatory";
import AssertIsPopulated from "../../assertions/AssertIsPopulated";
import AssertValueIsFalse from "../../assertions/AssertValueIsFalse";
import AssertValueIsTrue from "../../assertions/AssertValueIsTrue";
import EnumFieldType from "../../enums/EnumFieldType";
import IRule from "../../interfaces/rules/IRule";

import FieldBuilderBase from "./FieldBuilderBase";

export default class FieldBuilderBoolean extends FieldBuilderBase<FieldBuilderBoolean> {
  constructor() {
    super(EnumFieldType.boolean);
  }

  /****************************/
  /* Rules                    */
  /****************************/
  shouldBeEmpty(customMessage?: string): FieldBuilderBoolean {
    this.add(new AssertIsEmpty(customMessage));
    return this;
  }

  shouldBePopulated(customMessage?: string): FieldBuilderBoolean {
    this.add(new AssertIsPopulated(customMessage));
    return this;
  }

  shouldBeTrue(customMessage?: string): FieldBuilderBoolean {
    this.add(new AssertValueIsTrue(customMessage));
    return this;
  }

  shouldBeFalse(customMessage?: string): FieldBuilderBoolean {
    this.add(new AssertValueIsFalse(customMessage));
    return this;
  }

  shouldEqual(constant: string, caseInsensitive: boolean, customMessage?: string): FieldBuilderBoolean {
    this.add(new AssertIsEqualTo(constant, caseInsensitive, customMessage));
    return this;
  }

  mandatory(customMessage?: string): FieldBuilderBoolean {
    this.add(new AssertIsMandatory(customMessage));
    return this;
  }
}
