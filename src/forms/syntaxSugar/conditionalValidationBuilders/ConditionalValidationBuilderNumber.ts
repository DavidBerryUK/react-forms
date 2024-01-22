import AssertIsMandatory from "../../assertions/generic/AssertIsMandatory";
import AssertValueMin from "../../assertions/number/AssertValueMin";
import AssertValueMax from "../../assertions/number/AssertValueMax";
import AssertValueIsBetween from "../../assertions/number/AssertValueIsBetween";
import AssertIsEqualTo from "../../assertions/string/AssertIsEqualTo";
import AssertValueIsZero from "../../assertions/number/AssertValueIsZero";
import AssertValueIsPositive from "../../assertions/number/AssertValueIsPositive";
import AssertIsPopulated from "../../assertions/generic/AssertIsPopulated";
import AssertValueIsNonZero from "../../assertions/number/AssertValueIsNonZero";
import AssertValueIsInteger from "../../assertions/number/AssertValueIsInteger";
import AssertIsEmpty from "../../assertions/generic/AssertIsEmpty";
import AssertValueIsDecimal from "../../assertions/number/AssertValueIsDecimal";
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
export default class ConditionalValidationBuilderNumber extends ConditionalValidationBuilderBase<ConditionalValidationBuilderNumber> {
  /****************************/
  /* Assertions               */
  /****************************/

  decimal(customMessage?: string): ConditionalValidationBuilderNumber {
    this.add(new AssertValueIsDecimal(customMessage));
    return this;
  }

  empty(customMessage?: string): ConditionalValidationBuilderNumber {
    this.add(new AssertIsEmpty(customMessage));
    return this;
  }

  integer(customMessage?: string): ConditionalValidationBuilderNumber {
    this.add(new AssertValueIsInteger(customMessage));
    return this;
  }

  noneZero(customMessage?: string): ConditionalValidationBuilderNumber {
    this.add(new AssertValueIsNonZero(customMessage));
    return this;
  }

  populated(customMessage?: string): ConditionalValidationBuilderNumber {
    this.add(new AssertIsPopulated(customMessage));
    return this;
  }

  positive(allowZero: boolean, customMessage?: string): ConditionalValidationBuilderNumber {
    this.add(new AssertValueIsPositive(allowZero, customMessage));
    return this;
  }

  beZero(customMessage?: string): ConditionalValidationBuilderNumber {
    this.add(new AssertValueIsZero(customMessage));
    return this;
  }

  equal(constant: string, caseInsensitive: boolean, customMessage?: string): ConditionalValidationBuilderNumber {
    this.add(new AssertIsEqualTo(constant, caseInsensitive, customMessage));
    return this;
  }

  between(minValue: number, maxValue: number, customMessage?: string): ConditionalValidationBuilderNumber {
    this.add(new AssertValueIsBetween(minValue, maxValue, customMessage));
    return this;
  }

  max(maxValue: number, customMessage?: string): ConditionalValidationBuilderNumber {
    this.add(new AssertValueMax(maxValue, customMessage));
    return this;
  }

  min(minValue: number, customMessage?: string): ConditionalValidationBuilderNumber {
    this.add(new AssertValueMin(minValue, customMessage));
    return this;
  }

  mandatory(customMessage?: string): ConditionalValidationBuilderNumber {
    this.add(new AssertIsMandatory(customMessage));
    return this;
  }
}
