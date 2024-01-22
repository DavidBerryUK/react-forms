import AssertIsMandatory from "../../assertions/generic/AssertIsMandatory";
import AssertIsEqualTo from "../../assertions/string/AssertIsEqualTo";
import AssertIsPopulated from "../../assertions/generic/AssertIsPopulated";
import AssertIsEmpty from "../../assertions/generic/AssertIsEmpty";
import AssertDateMin from "../../assertions/date/AssertDateMin";
import AssertDateMax from "../../assertions/date/AssertDateMax";
import AssertValueIsTime from "../../assertions/date/AssertValueIsTime";
import AssertValueIsDateTimeLocal from "../../assertions/date/AssertValueIsDateTimeLocal";
import AssertValueIsDateLocal from "../../assertions/date/AssertValueIsDateLocal";
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

  dateLocal(customMessage?: string): ConditionalValidationBuilderDate {
    this.add(new AssertValueIsDateLocal(customMessage));
    return this;
  }

  dateTimeLocal(customMessage?: string): ConditionalValidationBuilderDate {
    this.add(new AssertValueIsDateTimeLocal(customMessage));
    return this;
  }

  empty(customMessage?: string): ConditionalValidationBuilderDate {
    this.add(new AssertIsEmpty(customMessage));
    return this;
  }

  populated(customMessage?: string): ConditionalValidationBuilderDate {
    this.add(new AssertIsPopulated(customMessage));
    return this;
  }

  timeLocal(customMessage?: string): ConditionalValidationBuilderDate {
    this.add(new AssertValueIsTime(customMessage));
    return this;
  }

  equal(constant: string, caseInsensitive: boolean, customMessage?: string): ConditionalValidationBuilderDate {
    this.add(new AssertIsEqualTo(constant, caseInsensitive, customMessage));
    return this;
  }

  max(maxDate: string, customMessage?: string): ConditionalValidationBuilderDate {
    this.add(new AssertDateMax(maxDate, customMessage));
    return this;
  }

  min(minDate: string, customMessage?: string): ConditionalValidationBuilderDate {
    this.add(new AssertDateMin(minDate, customMessage));
    return this;
  }

  mandatory(customMessage?: string): ConditionalValidationBuilderDate {
    this.add(new AssertIsMandatory(customMessage));
    return this;
  }
}
