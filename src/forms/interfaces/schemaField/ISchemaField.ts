import { QueryBuilderTypes } from "../../syntaxSugar/queryBuilders/QueryBuilderTypes";
import ConditionalValidationBuilder from "../../syntaxSugar/ConditionalValidationBuilder";
import EnumFieldType from "../../enums/EnumFieldType";
import IRuleGroup from "../rules/IRuleGroup";
import IRuleGroups from "../rules/IRuleGroups";
import ISchemaFieldRelationships from "../schema/ISchemaFieldRelationships";

export default interface ISchemaField {
  readonly type: string;
  readonly id: string;
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
  hasId(): boolean;
  //
  // specify conditional validation / cross valdation
  //
  when(state: QueryBuilderTypes): ConditionalValidationBuilder;

  //
  // used to specify conditions related to realtime state
  //
  state(): QueryBuilderTypes;
}
