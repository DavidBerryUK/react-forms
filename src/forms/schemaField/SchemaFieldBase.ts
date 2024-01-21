import { ConditionalBuilderTypes, QueryBuilderTypes } from "../types/BuilderTypes";
import EnumFieldType from "../enums/EnumFieldType";
import IRuleGroup from "../interfaces/rules/IRuleGroup";
import IRuleGroups from "../interfaces/rules/IRuleGroups";
import ISchemaField from "../interfaces/schemaField/ISchemaField";
import RuleGroups from "../models/RuleGroups";
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

  // Validation Rules
  ruleGroups: IRuleGroups;
  readonly fieldType: EnumFieldType;
  readonly relatedFields: SchemaFieldRelationships;

  // clear all rules
  clearRules() {
    this.ruleGroups = new RuleGroups();
  }

  // set rules, clears existing rules
  setRules(rules: IRuleGroup) {
    rules.schemaField = this;
    this.ruleGroups = new RuleGroups();
    this.ruleGroups.add(rules);
  }

  // append to existing rules
  appendRules(rules: IRuleGroup) {
    rules.schemaField = this;
    this.ruleGroups.add(rules);
    this.relatedFields.processRuleGroupsForRelatedFields();
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
    ruleGroup?: IRuleGroup | undefined | null,
    ruleGroups?: IRuleGroups | undefined | null
  ) {
    this.id = id;
    this.caption = caption;
    this.readOnly = false;
    this.fieldType = fieldType;
    this.ruleGroups = ruleGroups || new RuleGroups();
    this.ruleGroups.setSchemaField(this);
    this.relatedFields = new SchemaFieldRelationships(this);
    if (ruleGroup !== undefined && ruleGroup !== null) {
      this.ruleGroups.add(ruleGroup);
    }

    this.relatedFields.processRuleGroupsForRelatedFields();
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
