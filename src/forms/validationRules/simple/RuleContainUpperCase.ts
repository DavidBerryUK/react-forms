import IRule from '../../interfaces/IRule';
import RuleBaseContain from '../../models/RuleBaseContain';

export default class RuleContainUpperCase extends RuleBaseContain implements IRule {
	static readonly validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYX';
	static readonly plural = 'uppercase characters';
	static readonly singular = 'uppercase character';

	constructor(minCount: number, maxCount: number, customMessage?: string) {
		super(minCount, maxCount, RuleContainUpperCase.singular, RuleContainUpperCase.plural, RuleContainUpperCase.validChars, customMessage);
	}
}
