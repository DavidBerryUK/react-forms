import { nanoid } from "nanoid";
import FormFieldValidationState from "../models/FormFieldValidationState";
import IAssertGroup from "../interfaces/assertions/IAssertGroup";
import IAssertGroups from "../interfaces/assertions/IAssertGroups";
import IFormField from "../interfaces/form/IFormField";
import IFormInstance from "../interfaces/form/IFormInstance";
import IFormSchema from "../interfaces/form/IFormSchema";
import ISchemaField from "../interfaces/schemaField/ISchemaField";

export default class AssertGroups implements IAssertGroups {
  items: Array<IAssertGroup>;

  constructor(groups?: Array<IAssertGroup>) {
    this.items = groups || new Array<IAssertGroup>();
  }

  count(): number {
    return this.items.length;
  }

  clone(deep?: boolean): IAssertGroups {
    throw new Error("Method not implemented.");
  }

  add(assertions: IAssertGroup) {
    if (assertions === null || assertions === undefined) {
      console.error("AssertionGroup::Attempting to add null/undefined assertion to assertion groups");
    }
    this.items.push(assertions);
  }

  setSchemaField(schemaField: ISchemaField) {
    this.items.forEach((group) => {
      group.schemaField = schemaField;
    });
  }

  evaluateAssertions(form: IFormInstance<IFormSchema>, field: IFormField, transactionId?: string) {
    if (transactionId === undefined || transactionId === null || transactionId === "") {
      transactionId = nanoid();
    }

    // reset validation
    field.validation = new FormFieldValidationState(field.schemaField.caption);

    // perform validation
    this.items.forEach((group) => {
      group.evaluate(form, field, transactionId!);
    });

    // mark that this field have been validated in the forms current state
    field.validation.transactionId = transactionId;

    // check related fields
    //
    // console.log(`      related field count:${field.schemaField.relatedFields.count}`);

    if (field.schemaField.relatedFields.count > 0) {
      field.schemaField.relatedFields.items.forEach((relatedField) => {
        const relatedFormField = form.getField(relatedField, field.rowId);
        if (relatedFormField !== undefined && relatedFormField !== null && relatedFormField.validation.transactionId !== transactionId) {
          relatedField.assertGroups.evaluateAssertions(form, relatedFormField, transactionId);
        }
      });
    }
  }
}
