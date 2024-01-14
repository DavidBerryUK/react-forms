import ICondition from "../interfaces/ICondition";
import IFormInstance from "../interfaces/IFormInstance";
import IFormSchema from "../interfaces/IFormSchema";
import IRule from "../interfaces/IRule";
import IRuleGroup from "../interfaces/IRuleGroup";
import ISchemaField from "../interfaces/ISchemaField";
import RuleGroup from "./RuleGroup";

//
// class provides option of making rule evaluation for a field
//  dependent upon specific conditions being met.
//

export default class Condition implements ICondition {
	readonly schemaField: ISchemaField;
	readonly rules: IRuleGroup;

	static create(schemaField: ISchemaField, rule: IRule) {
		return new Condition(schemaField, RuleGroup.create(rule));
	}

	static createWithRules(schemaField: ISchemaField, rules: Array<IRule>) {
		return new Condition(schemaField, RuleGroup.createRules(rules));
	}

	static createWithRuleGroup(schemaField: ISchemaField, ruleGroup: RuleGroup) {
		return new Condition(schemaField, ruleGroup);
	}

	private constructor(schemaField: ISchemaField, rules: IRuleGroup) {
		rules.schemaField = schemaField;
		this.schemaField = schemaField;
		this.rules = rules;
	}

	//
	// determine if conditions specified pass
	//
	doesConditionPass(form: IFormInstance<IFormSchema>, rowId: string | number | null | undefined, transactionId: string): boolean {
		const field = form.getField(this.schemaField, rowId);

		if (field === undefined) {
			return false;
		}

		const isValid = this.rules.evaluate(form, field, transactionId, false);
		return isValid;
	}
}
