import IRule from '../../interfaces/IRule';
import RuleBase from '../../models/RuleBase';
import IFormField from '../../interfaces/IFormField';
import IFormInstance from '../../interfaces/IFormInstance';
import IFormSchema from '../../interfaces/IFormSchema';
import IRuleResponse from '../../interfaces/IRuleResponse';

export default class RuleEquals extends RuleBase implements IRule {
	private readonly constant: string;
	private readonly caseInsensitive: boolean;

	constructor(constant: string, caseInsensitive: boolean, customMessage?: string) {
		super(customMessage);
		this.constant = constant;
		this.caseInsensitive = caseInsensitive;

		if (caseInsensitive) {
			this.constant = this.constant.toLocaleLowerCase();
		}
	}

	isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IRuleResponse {
		if (this.isValueEmpty(value)) {
			return this.pass();
		}

		if (this.caseInsensitive === true) {
			if (value.toLocaleLowerCase() === this.constant) {
				return this.pass();
			}
		}

		if (this.caseInsensitive === false) {
			if (value === this.constant) {
				return this.pass();
			}
		}

		return this.fail(`must be equal to '${this.constant}'`);
	}
}
