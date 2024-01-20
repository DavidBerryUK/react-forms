import ConditionalValidationBuilder from "../../syntaxSugar/ConditionalValidationBuilder";
import EnumFieldType from "../../enums/EnumFieldType";
import IRuleGroup from "../rules/IRuleGroup";
import IRuleGroups from "../rules/IRuleGroups";
import ISchemaFieldRelationships from "../schema/ISchemaFieldRelationships";
import QueryBuilderString from "../../syntaxSugar/queryBuilders/QueryBuilderString";
import QueryBuilderBoolean from "../../syntaxSugar/queryBuilders/QueryBuilderBoolean";
import QueryBuilderDate from "../../syntaxSugar/queryBuilders/QueryBuilderDate";
import QueryBuilderNumber from "../../syntaxSugar/queryBuilders/QueryBuilderNumber";

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
  when(state: QueryBuilderString | QueryBuilderBoolean | QueryBuilderDate | QueryBuilderNumber): ConditionalValidationBuilder;

  //
  // used to specify conditions related to realtime state
  //
  state(): QueryBuilderString | QueryBuilderBoolean | QueryBuilderDate | QueryBuilderNumber;
}
