import EnumFieldType from "../enums/EnumFieldType";
import ConditionBuilder from "../syntaxSugar/ConditionBuilder";
import FieldBuilder from "../syntaxSugar/FieldBuilder";
import IRuleGroup from "./IRuleGroup";
import IRuleGroups from "./IRuleGroups";
import ISchemaFieldRelationships from "./ISchemaFieldRelationships";

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
  when(state: FieldBuilder): FieldBuilder;
  state(): FieldBuilder;
}
