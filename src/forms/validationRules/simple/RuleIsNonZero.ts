import IRule from '../../interfaces/IRule';
import RuleBase from '../../models/RuleBase';
import IFormField from '../../interfaces/IFormField';
import IFormInstance from '../../interfaces/IFormInstance';
import IFormSchema from '../../interfaces/IFormSchema';
import IRuleResponse from '../../interfaces/IRuleResponse';

export default class RuleIsNonZero extends RuleBase implements IRule {
	isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IRuleResponse {
		if (this.isValueEmpty(value)) {
			return this.pass();
		}

		const number = Number(value);

		if (isNaN(number)) {
			return this.pass();
		}
		if (number !== 0) {
			return this.pass();
		}

		return this.fail(`must be none zero`);
	}
}
