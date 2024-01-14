import { enumFieldType } from "../enums/EnumFieldType";
import IRuleGroup from "./IRuleGroup";
import IRuleGroups from "./IRuleGroups";
import ISchemaFieldRelationships from "./ISchemaFieldRelationships";

export default interface ISchemaField {
	readonly type: string;
	readonly name: string;
	readonly caption: string;
	readonly readOnly: boolean;
	readonly fieldType: enumFieldType;
	readonly relatedFields: ISchemaFieldRelationships;
	ruleGroups: IRuleGroups;
	appendRules(rules: IRuleGroup): void;
	clearRules(): void;
	clone(deep?: boolean): ISchemaField;
	keyEquals(field: ISchemaField): boolean;
	setRules(rules: IRuleGroup): void;
	setDisabled(isDisabled: boolean): void;
}
