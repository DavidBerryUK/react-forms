import { ConditionalBuilderTypes, QueryBuilderTypes } from "../types/BuilderTypes";
import AssertGroups from "../assert/AssertGroups";
import EnumFieldType from "../enums/EnumFieldType";
import IAssertGroup from "../interfaces/assertions/IAssertGroup";
import IAssertGroups from "../interfaces/assertions/IAssertGroups";
import ISchemaField from "../interfaces/schemaField/ISchemaField";
import SchemaFieldRelationships from "../models/SchemaFieldRelationships";

//
// define a field in the form dataset
//
export default abstract class SchemaFieldBase implements ISchemaField {
  readonly type: string = "SchemaField";

  // key field name - must be same at on the API Model
  readonly id: string;

  // Display version of the field, used in UI for control captions
  // and validation messages
  readonly caption: string;

  //  for readonly views or where only sub-set of fields are editable
  readOnly: boolean;

  // Validation assertions
  assertGroups: IAssertGroups;
  readonly fieldType: EnumFieldType;
  readonly relatedFields: SchemaFieldRelationships;

  // clear all assertions
  clearAssertions() {
    this.assertGroups = new AssertGroups();
  }

  // set asserts, clears existing assertions
  setAssertions(assertionGroup: IAssertGroup) {
    assertionGroup.schemaField = this;
    this.assertGroups = new AssertGroups();
    this.assertGroups.add(assertionGroup);
  }

  // append to existing assertions
  appendAssertionGroup(assertionGroup: IAssertGroup) {
    assertionGroup.schemaField = this;
    this.assertGroups.add(assertionGroup);
    this.relatedFields.processAssertionGroupsForRelatedFields();
  }

  // update readonly state
  setDisabled(isDisabled: boolean) {
    this.readOnly = isDisabled;
  }

  //
  // !!!compare on name only!!!
  //

  keyEquals(field: ISchemaField) {
    return this.id === field.id;
  }

  constructor(
    id: string,
    caption: string,
    fieldType: EnumFieldType,
    assertionGroup?: IAssertGroup | undefined | null,
    assertionGroups?: IAssertGroups | undefined | null
  ) {
    this.id = id;
    this.caption = caption;
    this.readOnly = false;
    this.fieldType = fieldType;
    this.assertGroups = assertionGroups || new AssertGroups();
    this.assertGroups.setSchemaField(this);
    this.relatedFields = new SchemaFieldRelationships(this);
    if (assertionGroup !== undefined && assertionGroup !== null) {
      this.assertGroups.add(assertionGroup);
    }

    this.relatedFields.processAssertionGroupsForRelatedFields();
  }

  hasId(): boolean {
    if (this.id === undefined || this.id === null || this.id.trim().length === 0) {
      return false;
    }
    return true;
  }

  abstract when(state: QueryBuilderTypes): ConditionalBuilderTypes;
  abstract state(): QueryBuilderTypes;

  clone(deep?: boolean): ISchemaField {
    throw new Error("Method not implemented.");
  }

  static isSchemaField(obj: any): boolean {
    // Check if the object is undefined or null
    if (obj === undefined || obj === null) {
      return false;
    }

    // Check if the object is of type 'object'
    if (typeof obj !== "object") {
      return false;
    }

    // Check if the object has a property named 'type'
    if (!("type" in obj)) {
      return false;
    }

    // Check if the value of the 'type' property starts with 'SchemaField'
    return obj.type.startsWith("SchemaField");
  }
}
