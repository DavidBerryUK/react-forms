import IRule from '../../interfaces/IRule';
import RuleBase from '../../models/RuleBase';
import IFormField from '../../interfaces/IFormField';
import IFormInstance from '../../interfaces/IFormInstance';
import IFormSchema from '../../interfaces/IFormSchema';
import IRuleResponse from '../../interfaces/IRuleResponse';

export default class RuleInteger extends RuleBase implements IRule {
	isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IRuleResponse {
		if (this.isValueEmpty(value)) {
			return this.pass();
		}

		const number = Number(value);
		if (!value || value.trim().length === 0 || isNaN(number) || !Number.isInteger(number)) {
			return this.fail('must be a whole number');
		}

		return this.pass();
	}
}
