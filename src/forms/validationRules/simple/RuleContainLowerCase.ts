import IRule from '../../interfaces/IRule';
import RuleBaseContain from '../../models/RuleBaseContain';

export default class RuleContainLowerCase extends RuleBaseContain implements IRule {
	static readonly validChars = 'abcdefghijklmnopqrstuvwxyx';
	static readonly plural = 'lowercase characters';
	static readonly singular = 'lowercase character';

	constructor(minCount: number, maxCount: number, customMessage?: string) {
		super(minCount, maxCount, RuleContainLowerCase.singular, RuleContainLowerCase.plural, RuleContainLowerCase.validChars, customMessage);
	}
}
