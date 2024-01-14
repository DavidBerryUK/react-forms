import IRule from '../../interfaces/IRule';
import RuleBase from '../../models/RuleBase';
import IFormField from '../../interfaces/IFormField';
import IFormInstance from '../../interfaces/IFormInstance';
import IFormSchema from '../../interfaces/IFormSchema';
import IRuleResponse from '../../interfaces/IRuleResponse';
import StringUtility from '../../utility/StringUtility';

export default class RuleIsFalse extends RuleBase implements IRule {
	isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IRuleResponse {
		if (this.isValueEmpty(value)) {
			return this.pass();
		}

		if (StringUtility.stringToIsFalse(value)) {
			return this.pass();
		}

		return this.fail(`must be false`);
	}
}
