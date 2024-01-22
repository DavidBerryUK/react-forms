import AssertIsMandatory from "../../assertions/AssertIsMandatory";
import AssertIsEqualTo from "../../assertions/AssertIsEqualTo";
import AssertIsPopulated from "../../assertions/AssertIsPopulated";
import AssertIsEmpty from "../../assertions/AssertIsEmpty";
import AssertValueIsFalse from "../../assertions/AssertValueIsFalse";
import AssertValueIsTrue from "../../assertions/AssertValueIsTrue";
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

  shouldBeEmpty(customMessage?: string): ConditionalValidationBuilderBoolean {
    this.add(new AssertIsEmpty(customMessage));
    return this;
  }

  shouldBePopulated(customMessage?: string): ConditionalValidationBuilderBoolean {
    this.add(new AssertIsPopulated(customMessage));
    return this;
  }

  shouldBeTrue(customMessage?: string): ConditionalValidationBuilderBoolean {
    this.add(new AssertValueIsTrue(customMessage));
    return this;
  }

  shouldBeFalse(customMessage?: string): ConditionalValidationBuilderBoolean {
    this.add(new AssertValueIsFalse(customMessage));
    return this;
  }

  shouldEqual(constant: string, caseInsensitive: boolean, customMessage?: string): ConditionalValidationBuilderBoolean {
    this.add(new AssertIsEqualTo(constant, caseInsensitive, customMessage));
    return this;
  }

  mandatory(customMessage?: string): ConditionalValidationBuilderBoolean {
    this.add(new AssertIsMandatory(customMessage));
    return this;
  }
}
