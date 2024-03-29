import AssertIsMandatory from "../../assertions/generic/AssertIsMandatory";
import AssertIsEqualTo from "../../assertions/string/AssertIsEqualTo";
import AssertIsPopulated from "../../assertions/generic/AssertIsPopulated";
import AssertIsEmpty from "../../assertions/generic/AssertIsEmpty";
import AssertPostCodeUK from "../../assertions/string/AssertPostCodeUk";
import AssertContainsDigits from "../../assertions/string/AssertContainsDigits";
import AssertContainsLowerCase from "../../assertions/string/AssertContainsLowerCase";
import AssertContainsSymbols from "../../assertions/string/AssertContainsSymbols";
import AssertContainsUpperCase from "../../assertions/string/AssertContainsUpperCase";
import AssertLengthIsBetween from "../../assertions/string/AssertLengthIsBetween";
import AssertLengthMax from "../../assertions/string/AssertLengthMax";
import AssertContainsNoWhiteSpaces from "../../assertions/string/AssertContainsNoWhiteSpaces";
import AssertLengthMin from "../../assertions/string/AssertLengthMin";
import ConditionalValidationBuilderBase from "./ConditionalValidationBuilderBase";
import ConditionalValidationBuilderNumber from "./ConditionalValidationBuilderNumber";

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
export default class ConditionalValidationBuilderString extends ConditionalValidationBuilderBase<ConditionalValidationBuilderNumber> {
  /****************************/
  /* Assertions               */
  /****************************/

  empty(customMessage?: string): ConditionalValidationBuilderString {
    this.add(new AssertIsEmpty(customMessage));
    return this;
  }

  populated(customMessage?: string): ConditionalValidationBuilderString {
    this.add(new AssertIsPopulated(customMessage));
    return this;
  }

  postCodeUK(customMessage?: string): ConditionalValidationBuilderString {
    this.add(new AssertPostCodeUK(customMessage));
    return this;
  }

  containDigits(minCount: number, maxCount: number, customMessage?: string): ConditionalValidationBuilderString {
    this.add(new AssertContainsDigits(minCount, maxCount, customMessage));
    return this;
  }

  containLowerCase(minCount: number, maxCount: number, customMessage?: string): ConditionalValidationBuilderString {
    this.add(new AssertContainsLowerCase(minCount, maxCount, customMessage));
    return this;
  }

  containSymbols(minCount: number, maxCount: number, customMessage?: string): ConditionalValidationBuilderString {
    this.add(new AssertContainsSymbols(minCount, maxCount, customMessage));
    return this;
  }

  containUpperCase(minCount: number, maxCount: number, customMessage?: string): ConditionalValidationBuilderString {
    this.add(new AssertContainsUpperCase(minCount, maxCount, customMessage));
    return this;
  }

  equal(constant: string, caseInsensitive: boolean, customMessage?: string): ConditionalValidationBuilderString {
    this.add(new AssertIsEqualTo(constant, caseInsensitive, customMessage));
    return this;
  }

  lengthBetween(minLength: number, maxLength: number, customMessage?: string): ConditionalValidationBuilderString {
    this.add(new AssertLengthIsBetween(minLength, maxLength, customMessage));
    return this;
  }

  maxLength(maxLength: number, customMessage?: string): ConditionalValidationBuilderString {
    this.add(new AssertLengthMax(maxLength, customMessage));
    return this;
  }

  minLength(minLength: number, customMessage?: string): ConditionalValidationBuilderString {
    this.add(new AssertLengthMin(minLength, customMessage));
    return this;
  }

  noWhiteSpaces(customMessage?: string): ConditionalValidationBuilderString {
    this.add(new AssertContainsNoWhiteSpaces(customMessage));
    return this;
  }

  mandatory(customMessage?: string): ConditionalValidationBuilderString {
    this.add(new AssertIsMandatory(customMessage));
    return this;
  }
}
