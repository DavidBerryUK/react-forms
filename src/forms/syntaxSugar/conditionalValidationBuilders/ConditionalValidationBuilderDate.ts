import AssertIsMandatory from "../../assertions/AssertIsMandatory";
import AssertIsEqualTo from "../../assertions/AssertIsEqualTo";
import AssertIsPopulated from "../../assertions/AssertIsPopulated";
import AssertIsEmpty from "../../assertions/AssertIsEmpty";
import AssertDateMin from "../../assertions/AssertDateMin";
import AssertDateMax from "../../assertions/AssertDateMax";
import AssertValueIsTime from "../../assertions/AssertValueIsTime";
import AssertValueIsDateTimeLocal from "../../assertions/AssertValueIsDateTimeLocal";
import AssertValueIsDateLocal from "../../assertions/AssertValueIsDateLocal";
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
export default class ConditionalValidationBuilderDate extends ConditionalValidationBuilderBase<ConditionalValidationBuilderDate> {
  /****************************/
  /* Assertions               */
  /****************************/

  shouldBeDateLocal(customMessage?: string): ConditionalValidationBuilderDate {
    this.add(new AssertValueIsDateLocal(customMessage));
    return this;
  }

  shouldBeDateTimeLocal(customMessage?: string): ConditionalValidationBuilderDate {
    this.add(new AssertValueIsDateTimeLocal(customMessage));
    return this;
  }

  shouldBeEmpty(customMessage?: string): ConditionalValidationBuilderDate {
    this.add(new AssertIsEmpty(customMessage));
    return this;
  }

  shouldBePopulated(customMessage?: string): ConditionalValidationBuilderDate {
    this.add(new AssertIsPopulated(customMessage));
    return this;
  }

  shouldBeTimeLocal(customMessage?: string): ConditionalValidationBuilderDate {
    this.add(new AssertValueIsTime(customMessage));
    return this;
  }

  shouldEqual(constant: string, caseInsensitive: boolean, customMessage?: string): ConditionalValidationBuilderDate {
    this.add(new AssertIsEqualTo(constant, caseInsensitive, customMessage));
    return this;
  }

  shouldHaveDateMax(maxDate: string, customMessage?: string): ConditionalValidationBuilderDate {
    this.add(new AssertDateMax(maxDate, customMessage));
    return this;
  }

  shouldHaveDateMin(minDate: string, customMessage?: string): ConditionalValidationBuilderDate {
    this.add(new AssertDateMin(minDate, customMessage));
    return this;
  }

  mandatory(customMessage?: string): ConditionalValidationBuilderDate {
    this.add(new AssertIsMandatory(customMessage));
    return this;
  }
}
