import IRule from '../../interfaces/IRule';
import RuleBaseDateTime from '../../models/RuleBaseDateTime';

export class RuleDateTimeLocal extends RuleBaseDateTime implements IRule {
	constructor(customMessage?: string) {
		super(['dd/MM/yyyy HH:mm', 'yyyy-MM-dd HH:mm'], customMessage);
	}
}
