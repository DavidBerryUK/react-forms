import IRule from '../../interfaces/IRule';
import RuleBaseContain from '../../models/RuleBaseContain';

export default class RuleContainDigits extends RuleBaseContain implements IRule {
	static readonly validChars = '0123456789';
	static readonly plural = 'digits';
	static readonly singular = 'digit';

	constructor(minCount: number, maxCount: number, customMessage?: string) {
		super(minCount, maxCount, RuleContainDigits.singular, RuleContainDigits.plural, RuleContainDigits.validChars, customMessage);
	}
}
