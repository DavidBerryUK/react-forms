import EnumFieldType from "../enums/EnumFieldType";
import ICondition from "../interfaces/ICondition";
import IRule from "../interfaces/IRule";
import IRuleGroup from "../interfaces/IRuleGroup";
import IRuleGroups from "../interfaces/IRuleGroups";
import ISchemaField from "../interfaces/ISchemaField";
import RuleGroup from "./RuleGroup";
import RuleGroups from "./RuleGroups";
import SchemaFieldRelationships from "./SchemaFieldRelationships";
//
// define a field in the form dataset
//
export default class SchemaField implements ISchemaField {
  readonly type: string = "SchemaField";

  // key field name - must be same at on the API Model
  readonly name: string;

  // Display version of the field, used in UI for control captions
  // and validation messages
  readonly caption: string;

  //  for readonly views or where only sub-set of fields are editable
  readOnly: boolean;

  // Validation Rules
  ruleGroups: IRuleGroups;
  readonly fieldType: EnumFieldType;
  readonly relatedFields: SchemaFieldRelationships;

  //
  // convenience creators for different combinations
  // of fields with single or multiple validation rules
  // in combination with none, single or multiple conditions
  //
  public static create(name: string, caption: string, fieldType: EnumFieldType): ISchemaField {
    return new SchemaField(name, caption, fieldType);
  }

  public static createWithRule(name: string, caption: string, fieldType: EnumFieldType, rule: IRule): ISchemaField {
    return new SchemaField(name, caption, fieldType, RuleGroup.create(rule));
  }

  public static createWithRuleGroup(name: string, caption: string, fieldType: EnumFieldType, ruleGroup: IRuleGroup): ISchemaField {
    return new SchemaField(name, caption, fieldType, ruleGroup);
  }

  public static createWithRuleAndCondition(
    name: string,
    caption: string,
    fieldType: EnumFieldType,
    rule: IRule,
    condition: ICondition
  ): ISchemaField {
    return new SchemaField(name, caption, fieldType, RuleGroup.createRuleAndCondition(rule, condition));
  }

  public static createWithRuleAndConditions(
    name: string,
    caption: string,
    fieldType: EnumFieldType,
    rule: IRule,
    condition: Array<ICondition>
  ): ISchemaField {
    return new SchemaField(name, caption, fieldType, RuleGroup.createRuleAndConditions(rule, condition));
  }

  public static createWithRulesAndCondition(
    name: string,
    caption: string,
    fieldType: EnumFieldType,
    rules: Array<IRule>,
    condition: ICondition
  ): ISchemaField {
    return new SchemaField(name, caption, fieldType, RuleGroup.createRulesAndCondition(rules, condition));
  }

  public static createWithRulesAndConditions(
    name: string,
    caption: string,
    fieldType: EnumFieldType,
    rules: Array<IRule>,
    conditions: Array<ICondition>
  ): ISchemaField {
    return new SchemaField(name, caption, fieldType, RuleGroup.createRulesAndConditions(rules, conditions));
  }

  public static createWithRules(name: string, caption: string, fieldType: EnumFieldType, rules: Array<IRule>): ISchemaField {
    return new SchemaField(name, caption, fieldType, RuleGroup.createRules(rules));
  }

  public static createWithRuleGroups(name: string, caption: string, fieldType: EnumFieldType, ruleGroups: Array<IRuleGroup>) {
    const field = new SchemaField(name, caption, fieldType);
    ruleGroups.forEach((group) => {
      field.appendRules(group);
    });
    return field;
  }

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
    return this.name === field.name;
  }

  private constructor(
    name: string,
    caption: string,
    fieldType: EnumFieldType,
    ruleGroup?: IRuleGroup | undefined | null,
    ruleGroups?: IRuleGroups | undefined | null
  ) {
    this.name = name;
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

  clone(deep?: boolean): ISchemaField {
    throw new Error("Method not implemented.");
  }

  static isSchemaField(obj: any): boolean {
    if (obj === undefined || obj === null) {
      return false;
    }

    if (typeof obj !== "object") {
      return false;
    }

    if ("type" in obj === false) {
      return false;
    }
    return obj.type === "SchemaField";
  }
}
