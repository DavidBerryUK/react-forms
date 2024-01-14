import IRule from '../../interfaces/IRule';
import RuleBase from '../../models/RuleBase';
import IFormField from '../../interfaces/IFormField';
import IFormInstance from '../../interfaces/IFormInstance';
import IFormSchema from '../../interfaces/IFormSchema';
import IRuleResponse from '../../interfaces/IRuleResponse';

//
// will validate either integers or decimal, if you require
// further checks on types, then include RuleDecimal or RuleInteger
// in the rules collection
//
export default class RuleValueBetween extends RuleBase implements IRule {
	private readonly minValue: number;
	private readonly maxValue: number;

	constructor(minValue: number, maxValue: number, customMessage?: string) {
		super(customMessage);
		this.minValue = minValue;
		this.maxValue = maxValue;
	}

	isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IRuleResponse {
		if (this.isValueEmpty(value)) {
			return this.pass();
		}

		const number = Number(value);

		if (isNaN(number)) {
			return this.fail('must be a valid number');
		}

		if (number < this.minValue || number > this.maxValue) {
			return this.fail(`must be between ${this.minValue} and ${this.maxValue}`);
		}

		return this.pass();
	}
}
