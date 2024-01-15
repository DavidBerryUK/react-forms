import IRule from '../../interfaces/IRule';
import RuleBaseContain from '../../models/RuleBaseContain';

export default class RuleContainSymbols extends RuleBaseContain implements IRule {
	static readonly validChars = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';
	static readonly plural = 'symbol characters';
	static readonly singular = 'symbol character';

	constructor(minCount: number, maxCount: number, customMessage?: string) {
		super(minCount, maxCount, RuleContainSymbols.singular, RuleContainSymbols.plural, RuleContainSymbols.validChars, customMessage);
	}
}
