import IRule from '../../interfaces/IRule';
import RuleBase from '../../models/RuleBase';
import IFormField from '../../interfaces/IFormField';
import IFormInstance from '../../interfaces/IFormInstance';
import IFormSchema from '../../interfaces/IFormSchema';
import IRuleResponse from '../../interfaces/IRuleResponse';

export default class RuleNoWhiteSpace extends RuleBase implements IRule {

	private message: string;

	constructor(customMessage?: string) {
		super(customMessage);

		this.message = this.customMessage ?? 'cannot contain spaces';
	}

	isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IRuleResponse {
		if (this.isValueEmpty(value)) {
			return this.fail(this.message);
		}

		const cleanedValue = value!.replace(/\s+/g, '');

		if (cleanedValue !== value) {
			return this.fail(this.message);
		}

		return this.pass();
	}
}
