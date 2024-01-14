import RuleBaseDateTime from '../../models/RuleBaseDateTime';

export class RuleTime extends RuleBaseDateTime {
	constructor(customMessage?: string) {
		super(['HH:mm'], customMessage);
	}
}
