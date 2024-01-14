import IFormField from '../../interfaces/IFormField';
import IFormInstance from '../../interfaces/IFormInstance';
import IFormSchema from '../../interfaces/IFormSchema';
import IRule from '../../interfaces/IRule';
import IRuleResponse from '../../interfaces/IRuleResponse';
import RuleBase from '../../models/RuleBase';

//
// similar to Mandatory, but is used when creating conditional validation.
//   the rule returns true is the field is populated
//
//
export default class RuleConditionIsPopulated extends RuleBase implements IRule {
	isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IRuleResponse {
		if (this.isValueEmpty(value)) {
			return this.fail(`must be populated`);
		}
		return this.pass();
	}
}
