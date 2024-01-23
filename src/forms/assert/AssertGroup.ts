import Conditions from "../models/Conditions";
import EnumFieldType from "../enums/EnumFieldType";
import EnumMessageType from "../enums/EnumMessageType";
import FormField from "../interfaces/form/IFormField";
import FormInstance from "../models/FormInstance";
import ICondition from "../interfaces/condition/ICondition";
import IConditions from "../interfaces/condition/IConditions";
import IFormSchema from "../interfaces/form/IFormSchema";
import IAssert from "../interfaces/assertions/IAssert";
import IAssertGroup from "../interfaces/assertions/IAssertGroup";
import ISchemaField from "../interfaces/schemaField/ISchemaField";
import { tr } from "date-fns/locale";

export default class AssertGroup implements IAssertGroup {
  //
  // Assertions to evaluate to determine if a field is valid
  //
  schemaField: ISchemaField | undefined;
  items: Array<IAssert>;
  conditions: IConditions;

  public static create(assertion: IAssert): IAssertGroup {
    return new AssertGroup([assertion]);
  }

  public static createAssertions(assertions: Array<IAssert>): IAssertGroup {
    return new AssertGroup(assertions);
  }

  public static createAssertionAndCondition(assertion: IAssert, condition: ICondition): IAssertGroup {
    return new AssertGroup([assertion], new Conditions([condition]));
  }

  public static createAssertionAndConditions(assertion: IAssert, conditions: Array<ICondition>): IAssertGroup {
    return new AssertGroup([assertion], new Conditions(conditions));
  }

  public static createAssertionsAndCondition(assertions: Array<IAssert>, condition: ICondition): IAssertGroup {
    return new AssertGroup(assertions, new Conditions([condition]));
  }

  public static createAssertionsAndConditions(assertions: Array<IAssert>, conditions: Array<ICondition>): IAssertGroup {
    return new AssertGroup(assertions, new Conditions(conditions));
  }

  public addAssertion(assertion: IAssert): void {
    this.items.push(assertion);
  }

  public addCondition(condition: ICondition): void {
    this.conditions.addCondition(condition);
  }
  //
  // optional conditions,
  //  if provided then the assertions will only be evaluated if
  //  the optional conditions are true.
  //
  //  if the provided conditions are FALSE, then
  //   the assertions will be ignored and true returned
  //
  private constructor(assertions?: Array<IAssert>, conditions?: IConditions) {
    this.items = assertions || new Array<IAssert>();
    this.conditions = conditions || new Conditions([]);
  }

  // Run all the assertions
  //
  // updateValidationState = update the validation state, if the assertion is just being
  //                         used to check a condition the assertions are evaluated
  //                         but results are not stored against a filed
  //
  evaluate(form: FormInstance<IFormSchema>, field: FormField, transactionId: string, updateValidationState = true): boolean {
    //
    // if this field has already been validated for this transaction, return
    //  the validation state directly
    //
    if (field.validation.transactionId === transactionId && updateValidationState === true) {
      return field.validation.isValid;
    }

    var isValid = true;

    //
    // if conditional validation, check the conditions before evaluating
    //
    if (this.conditions.items.length > 0) {
      if (this.conditions.doConditionsPass(form, field.rowId, transactionId) === false) {
        // if conditions do not evaluate, this assertion group
        // should not be processed and true returned
        return true;
      }
    }

    //
    // trim text before evaluating
    //
    var text = field.value;
    if (field.schemaField.fieldType === EnumFieldType.string) {
      text = (text as string).trim();
    }

    //
    // loop though all assertions checks
    //
    this.items.forEach((assertion) => {
      var result = assertion.isValid(form, field, text);
      if (result.pass === false) {
        isValid = false;
        if (updateValidationState) {
          field.validation.addMessage(EnumMessageType.realtime, result.message);
        }
      }
    });

    return isValid;
  }

  clone(deep?: boolean): IAssertGroup {
    throw new Error("Method not implemented.");
  }
}
