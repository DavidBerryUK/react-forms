import AssertIsMandatory from "../../assertions/AssertIsMandatory";
import AssertValueMin from "../../assertions/AssertValueMin";
import AssertValueMax from "../../assertions/AssertValueMax";
import AssertValueIsBetween from "../../assertions/AssertValueIsBetween";
import AssertIsEqualTo from "../../assertions/AssertIsEqualTo";
import AssertValueIsZero from "../../assertions/AssertValueIsZero";
import AssertValueIsPositive from "../../assertions/AssertValueIsPositive";
import AssertIsPopulated from "../../assertions/AssertIsPopulated";
import AssertValueIsNonZero from "../../assertions/AssertValueIsNonZero";
import AssertValueIsInteger from "../../assertions/AssertValueIsInteger";
import AssertIsEmpty from "../../assertions/AssertIsEmpty";
import AssertValueIsDecimal from "../../assertions/AssertValueIsDecimal";
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

  shouldBeDecimal(customMessage?: string): ConditionalValidationBuilderNumber {
    this.add(new AssertValueIsDecimal(customMessage));
    return this;
  }

  shouldBeEmpty(customMessage?: string): ConditionalValidationBuilderNumber {
    this.add(new AssertIsEmpty(customMessage));
    return this;
  }

  shouldBeInteger(customMessage?: string): ConditionalValidationBuilderNumber {
    this.add(new AssertValueIsInteger(customMessage));
    return this;
  }

  shouldBeNoneZero(customMessage?: string): ConditionalValidationBuilderNumber {
    this.add(new AssertValueIsNonZero(customMessage));
    return this;
  }

  shouldBePopulated(customMessage?: string): ConditionalValidationBuilderNumber {
    this.add(new AssertIsPopulated(customMessage));
    return this;
  }

  shouldBePositive(allowZero: boolean, customMessage?: string): ConditionalValidationBuilderNumber {
    this.add(new AssertValueIsPositive(allowZero, customMessage));
    return this;
  }

  shouldBeZero(customMessage?: string): ConditionalValidationBuilderNumber {
    this.add(new AssertValueIsZero(customMessage));
    return this;
  }

  shouldEqual(constant: string, caseInsensitive: boolean, customMessage?: string): ConditionalValidationBuilderNumber {
    this.add(new AssertIsEqualTo(constant, caseInsensitive, customMessage));
    return this;
  }

  shouldHaveValueBetween(minValue: number, maxValue: number, customMessage?: string): ConditionalValidationBuilderNumber {
    this.add(new AssertValueIsBetween(minValue, maxValue, customMessage));
    return this;
  }

  shouldHaveValueMax(maxValue: number, customMessage?: string): ConditionalValidationBuilderNumber {
    this.add(new AssertValueMax(maxValue, customMessage));
    return this;
  }

  shouldHaveValueMin(minValue: number, customMessage?: string): ConditionalValidationBuilderNumber {
    this.add(new AssertValueMin(minValue, customMessage));
    return this;
  }

  mandatory(customMessage?: string): ConditionalValidationBuilderNumber {
    this.add(new AssertIsMandatory(customMessage));
    return this;
  }
}
