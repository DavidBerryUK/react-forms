import AssertIsMandatory from "../../assertions/generic/AssertIsMandatory";
import AssertIsEqualTo from "../../assertions/string/AssertIsEqualTo";
import AssertIsPopulated from "../../assertions/generic/AssertIsPopulated";
import AssertIsEmpty from "../../assertions/generic/AssertIsEmpty";
import AssertValueIsFalse from "../../assertions/boolean/AssertValueIsFalse";
import AssertValueIsTrue from "../../assertions/boolean/AssertValueIsTrue";
import ConditionalValidationBuilderBase from "./ConditionalValidationBuilderBase";

//
// used to build up conditional validation in the following format
// this.fields.dietryRequirementsNotes.when(this.fields.dietryRequirementsFlag.state().ifIsTrue()).shouldHaveLengthBetween(10, 1000).mandatory();
//                                                                                                |<------------------------------------------->|
// an instance of [ConditionalValidationBuilder] is return when the when statement,
//  the schemaField and output from the parameters of the when statement as passed into this
//
//  it is then the resposibility of this class to manipulate the schemafield (dietryRequirementsNotes) to apply
//  the conditional validation
//
export default class ConditionalValidationBuilderBoolean extends ConditionalValidationBuilderBase<ConditionalValidationBuilderBoolean> {
  /****************************/
  /* Assertions               */
  /****************************/

  empty(customMessage?: string): ConditionalValidationBuilderBoolean {
    this.add(new AssertIsEmpty(customMessage));
    return this;
  }

  populated(customMessage?: string): ConditionalValidationBuilderBoolean {
    this.add(new AssertIsPopulated(customMessage));
    return this;
  }

  true(customMessage?: string): ConditionalValidationBuilderBoolean {
    this.add(new AssertValueIsTrue(customMessage));
    return this;
  }

  false(customMessage?: string): ConditionalValidationBuilderBoolean {
    this.add(new AssertValueIsFalse(customMessage));
    return this;
  }

  equal(constant: string, caseInsensitive: boolean, customMessage?: string): ConditionalValidationBuilderBoolean {
    this.add(new AssertIsEqualTo(constant, caseInsensitive, customMessage));
    return this;
  }

  mandatory(customMessage?: string): ConditionalValidationBuilderBoolean {
    this.add(new AssertIsMandatory(customMessage));
    return this;
  }
}
