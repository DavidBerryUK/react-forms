import { format, isAfter } from 'date-fns';
import IRule from '../../interfaces/IRule';
import IFormField from '../../interfaces/IFormField';
import IFormInstance from '../../interfaces/IFormInstance';
import IFormSchema from '../../interfaces/IFormSchema';
import IRuleResponse from '../../interfaces/IRuleResponse';
import RuleBaseDateTime from '../../models/RuleBaseDateTime';
import DateParseResponse from '../../models/DateParseResponse';

//
// works with date or date time, or times
//
export default class RuleMinDate extends RuleBaseDateTime implements IRule {
	private readonly minDate: DateParseResponse;
	private readonly constantMinDate: string;

	constructor(minDate: string, customMessage?: string) {
		super(['dd/MM/yyyy', 'yyyy-MM-dd', 'dd/MM/yyyy HH:mm', 'yyyy-MM-dd HH:mm', 'HH:mm'], customMessage);
		this.constantMinDate = minDate;
		this.minDate = this.parseMultipleFormats(minDate);
	}

	isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IRuleResponse {
		if (this.isValueEmpty(value)) {
			return this.pass();
		}

		//
		// validate constant min date,
		//
		if (!this.minDate.success) {
			return this.fail(`MinDate validation rule has invalid constant date of ${this.constantMinDate}`);
		}

		//
		// parse and validate input date / time
		//
		let inputDate = this.parseMultipleFormats(value);
		if (!inputDate.success) {
			return this.fail(this.formatErrorMessage());
		}

		if (isAfter(this.minDate.result!, inputDate.result!)) {
			return this.fail(`must not be a date before ${format(this.minDate.result!, inputDate.matchingFormat!)}`);
		}

		return this.pass();
	}
}
