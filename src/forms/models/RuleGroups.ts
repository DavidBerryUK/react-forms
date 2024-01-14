import { nanoid } from 'nanoid';
import FormFieldValidationState from './FormFieldValidationState';
import IFormField from "../interfaces/IFormField";
import IFormInstance from '../interfaces/IFormInstance';
import IFormSchema from '../interfaces/IFormSchema';
import IRuleGroup from '../interfaces/IRuleGroup';
import IRuleGroups from '../interfaces/IRuleGroups';
import ISchemaField from '../interfaces/ISchemaField';

export default class RuleGroups implements IRuleGroups {
	groups: Array<IRuleGroup>;

	constructor(groups?: Array<IRuleGroup>) {
		this.groups = groups || new Array<IRuleGroup>();
	}

	clone(deep?: boolean): IRuleGroups {
		throw new Error('Method not implemented.');
	}

	add(rules: IRuleGroup) {
		if (rules === null || rules === undefined) {
			console.error('RuleGroup::Attempting to add null/undefined rule to rule groups');
		}
		this.groups.push(rules);
	}

	setSchemaField(schemaField: ISchemaField) {
		this.groups.forEach((group) => {
			group.schemaField = schemaField;
		});
	}

	evaluateRules(form: IFormInstance<IFormSchema>, field: IFormField, transactionId?: string) {
		if (transactionId === undefined || transactionId === null || transactionId === '') {
			transactionId = nanoid();
		}

		// reset validation
		field.validation = new FormFieldValidationState(field.schemaField.caption);

		// perform validation
		this.groups.forEach((group) => {
			group.evaluate(form, field, transactionId!);
		});

		// mark that this field have been validated in the forms current state
		field.validation.transactionId = transactionId;

		// check related fields
		//
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
