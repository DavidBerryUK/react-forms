import ConditionalValidationBuilder from "../syntaxSugar/ConditionalValidationBuilder";
import EnumFieldType from "../enums/EnumFieldType";
import IRuleGroup from "./IRuleGroup";
import IRuleGroups from "./IRuleGroups";
import ISchemaFieldRelationships from "./ISchemaFieldRelationships";
import QueryBuilder from "../syntaxSugar/QueryBuilder";

export default interface ISchemaField {
  readonly type: string;
  readonly name: string;
  readonly caption: string;
  readonly readOnly: boolean;
  readonly fieldType: EnumFieldType;
  readonly relatedFields: ISchemaFieldRelationships;
  ruleGroups: IRuleGroups;
  appendRules(rules: IRuleGroup): void;
  clearRules(): void;
  clone(deep?: boolean): ISchemaField;
  keyEquals(field: ISchemaField): boolean;
  setRules(rules: IRuleGroup): void;
  setDisabled(isDisabled: boolean): void;
  //
  // specify conditional validation / cross valdation
  //
  when(state: QueryBuilder): ConditionalValidationBuilder;

  //
  // used to specify conditions related to realtime state
  //
  state(): QueryBuilder;
}
