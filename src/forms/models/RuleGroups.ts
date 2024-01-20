import { nanoid } from "nanoid";
import FormFieldValidationState from "./FormFieldValidationState";
import IFormField from "../interfaces/form/IFormField";
import IFormInstance from "../interfaces/form/IFormInstance";
import IFormSchema from "../interfaces/form/IFormSchema";
import IRuleGroup from "../interfaces/rules/IRuleGroup";
import IRuleGroups from "../interfaces/rules/IRuleGroups";
import ISchemaField from "../interfaces/schemaField/ISchemaField";

export default class RuleGroups implements IRuleGroups {
  items: Array<IRuleGroup>;

  constructor(groups?: Array<IRuleGroup>) {
    this.items = groups || new Array<IRuleGroup>();
  }

  count(): number {
    return this.items.length;
  }

  clone(deep?: boolean): IRuleGroups {
    throw new Error("Method not implemented.");
  }

  add(rules: IRuleGroup) {
    if (rules === null || rules === undefined) {
      console.error("RuleGroup::Attempting to add null/undefined rule to rule groups");
    }
    this.items.push(rules);
  }

  setSchemaField(schemaField: ISchemaField) {
    this.items.forEach((group) => {
      group.schemaField = schemaField;
    });
  }

  evaluateRules(form: IFormInstance<IFormSchema>, field: IFormField, transactionId?: string) {
    // console.log(`RuleGroups::evaluateRules - for:${field.schemaField.id}-${field.schemaField.caption}`);

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
          relatedField.ruleGroups.evaluateRules(form, relatedFormField, transactionId);
        }
      });
    }
  }
}
