import ISchemaField from './interfaces/ISchemaField';

export default interface ISchemaFieldRelationships {
	field: ISchemaField;
	items: Array<ISchemaField>;	
	get count(): number;	
	isJoinedTo(field: ISchemaField): boolean;	
	join(relatedField: ISchemaField) :void;	
	disconnect(relatedField: ISchemaField) :void;	
	processRuleGroupsForRelatedFields():void;
}
