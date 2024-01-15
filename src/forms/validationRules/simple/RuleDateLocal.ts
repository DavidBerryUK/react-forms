import IRule from '../../interfaces/IRule';
import RuleBaseDateTime from '../../models/RuleBaseDateTime';

//
// Note, uses base class for IsValid()
//
export class RuleDateLocal extends RuleBaseDateTime implements IRule {
	constructor(customMessage?: string) {
		super(['dd/MM/yyyy', 'yyyy-MM-dd'], customMessage);
	}
}