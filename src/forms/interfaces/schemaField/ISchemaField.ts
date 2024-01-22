import { ConditionalBuilderTypes, QueryBuilderTypes } from "../../types/BuilderTypes";
import EnumFieldType from "../../enums/EnumFieldType";
import IAssertGroup from "../assertions/IAssertGroup";
import IAssertGroups from "../assertions/IAssertGroups";
import ISchemaFieldRelationships from "../schema/ISchemaFieldRelationships";

export default interface ISchemaField {
  readonly type: string;
  readonly id: string;
  readonly caption: string;
  readonly readOnly: boolean;
  readonly fieldType: EnumFieldType;
  readonly relatedFields: ISchemaFieldRelationships;
  assertGroups: IAssertGroups;
  appendAssertionGroup(assertionGroup: IAssertGroup): void;
  clearAssertions(): void;
  clone(deep?: boolean): ISchemaField;
  keyEquals(field: ISchemaField): boolean;
  setAssertions(assertions: IAssertGroup): void;
  setDisabled(isDisabled: boolean): void;
  hasId(): boolean;
  //
  // specify conditional validation / cross valdation
  //
  when(state: QueryBuilderTypes): ConditionalBuilderTypes;

  //
  // used to specify conditions related to realtime state
  //
  state(): QueryBuilderTypes;
}
