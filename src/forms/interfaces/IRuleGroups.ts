import IFormField from './IFormField';
import IFormInstance from './IFormInstance';
import IFormSchema from './IFormSchema';
import IRuleGroup from './IRuleGroup';
import ISchemaField from './ISchemaField';

export default interface IRuleGroups {
	groups: Array<IRuleGroup>;
	add(rules: IRuleGroup): void;
	clone(deep?: boolean): IRuleGroups;
	evaluateRules(form: IFormInstance<IFormSchema>, field: IFormField, transactionId?: string): void;
	setSchemaField(schemaField: ISchemaField): void;
}
