import AssertGroup from "../assert/AssertGroup";
import IAssert from "../interfaces/assertions/IAssert";
import IAssertGroup from "../interfaces/assertions/IAssertGroup";
import ICondition from "../interfaces/condition/ICondition";
import IFormInstance from "../interfaces/form/IFormInstance";
import IFormSchema from "../interfaces/form/IFormSchema";
import ISchemaField from "../interfaces/schemaField/ISchemaField";

//
// class provides option of making rule evaluation for a field
//  dependent upon specific conditions being met.
//

export default class Condition implements ICondition {
  readonly schemaField: ISchemaField;
  readonly assertionGroup: IAssertGroup;

  static create(schemaField: ISchemaField, assert: IAssert) {
    return new Condition(schemaField, AssertGroup.create(assert));
  }

  static createWithAssertions(schemaField: ISchemaField, assertions: Array<IAssert>) {
    return new Condition(schemaField, AssertGroup.createAssertions(assertions));
  }

  static createWithAssertionGroup(schemaField: ISchemaField, assertGroup: AssertGroup) {
    return new Condition(schemaField, assertGroup);
  }

  private constructor(schemaField: ISchemaField, assertions: IAssertGroup) {
    assertions.schemaField = schemaField;
    this.schemaField = schemaField;
    this.assertionGroup = assertions;
  }

  addAssert(assertion: IAssert) {
    this.assertionGroup.addAssertion(assertion);
  }

  //
  // determine if conditions specified pass
  //
  doesConditionPass(form: IFormInstance<IFormSchema>, rowId: string | number | null | undefined, transactionId: string): boolean {
    const field = form.getField(this.schemaField, rowId);

    if (field === undefined) {
      return false;
    }

    const isValid = this.assertionGroup.evaluate(form, field, transactionId, false);
    return isValid;
  }
}
