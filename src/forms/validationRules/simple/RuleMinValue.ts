import IRule from '../../interfaces/IRule';
import RuleBase from '../../models/RuleBase';
import IFormField from '../../interfaces/IFormField';
import IFormInstance from '../../interfaces/IFormInstance';
import IFormSchema from '../../interfaces/IFormSchema';
import IRuleResponse from '../../interfaces/IRuleResponse';

export default class RuleMinValue extends RuleBase implements IRule {
	private readonly minValue: number;

	constructor(minValue: number, customMessage?: string) {
		super(customMessage);
		this.minValue = minValue;
	}

	isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IRuleResponse {
		if (this.isValueEmpty(value)) {
			return this.pass();
		}

		var number = Number(value);

		if (isNaN(number)) {
			return this.fail('must be a valid number');
		}

		if (number < this.minValue) {
			return this.fail(`must be equal or greater than ${this.minValue}`);
		}

		return this.pass();
	}
}
