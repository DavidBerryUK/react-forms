import EnumFieldType from "../enums/EnumFieldType";
import ICondition from "../interfaces/condition/ICondition";
import IRule from "../interfaces/rules/IRule";
import IRuleGroup from "../interfaces/rules/IRuleGroup";
import ISchemaField from "../interfaces/schemaField/ISchemaField";
import QueryBuilderNumber from "../syntaxSugar/queryBuilders/QueryBuilderNumber";
import RuleGroup from "../models/RuleGroup";
import SchemaFieldBase from "./SchemaFieldBase";
//
// define a field in the form dataset
//
export default class SchemaFieldNumber extends SchemaFieldBase implements ISchemaField {
  readonly type: string = "SchemaFieldNumber";

  //
  // convenience creators for different combinations
  // of fields with single or multiple validation rules
  // in combination with none, single or multiple conditions
  //
  public static create(id: string, caption: string, fieldType: EnumFieldType): SchemaFieldNumber {
    return new SchemaFieldNumber(id, caption, fieldType);
  }

  public static createWithRule(id: string, caption: string, fieldType: EnumFieldType, rule: IRule): SchemaFieldNumber {
    return new SchemaFieldNumber(id, caption, fieldType, RuleGroup.create(rule));
  }

  public static createWithRuleGroup(id: string, caption: string, fieldType: EnumFieldType, ruleGroup: IRuleGroup): SchemaFieldNumber {
    return new SchemaFieldNumber(id, caption, fieldType, ruleGroup);
  }

  public static createWithRuleAndCondition(
    id: string,
    caption: string,
    fieldType: EnumFieldType,
    rule: IRule,
    condition: ICondition
  ): SchemaFieldNumber {
    return new SchemaFieldNumber(id, caption, fieldType, RuleGroup.createRuleAndCondition(rule, condition));
  }

  public static createWithRuleAndConditions(
    id: string,
    caption: string,
    fieldType: EnumFieldType,
    rule: IRule,
    condition: Array<ICondition>
  ): SchemaFieldNumber {
    return new SchemaFieldNumber(id, caption, fieldType, RuleGroup.createRuleAndConditions(rule, condition));
  }

  public static createWithRulesAndCondition(
    id: string,
    caption: string,
    fieldType: EnumFieldType,
    rules: Array<IRule>,
    condition: ICondition
  ): SchemaFieldNumber {
    return new SchemaFieldNumber(id, caption, fieldType, RuleGroup.createRulesAndCondition(rules, condition));
  }

  public static createWithRulesAndConditions(
    id: string,
    caption: string,
    fieldType: EnumFieldType,
    rules: Array<IRule>,
    conditions: Array<ICondition>
  ): SchemaFieldNumber {
    return new SchemaFieldNumber(id, caption, fieldType, RuleGroup.createRulesAndConditions(rules, conditions));
  }

  public static createWithRules(id: string, caption: string, fieldType: EnumFieldType, rules: Array<IRule>): SchemaFieldNumber {
    if (rules.length === 0) {
      return new SchemaFieldNumber(id, caption, fieldType);
    }
    return new SchemaFieldNumber(id, caption, fieldType, RuleGroup.createRules(rules));
  }

  public static createWithRuleGroups(id: string, caption: string, fieldType: EnumFieldType, ruleGroups: Array<IRuleGroup>) {
    const field = new SchemaFieldNumber(id, caption, fieldType);
    ruleGroups.forEach((group) => {
      field.appendRules(group);
    });
    return field;
  }

  state(): QueryBuilderNumber {
    return new QueryBuilderNumber(this);
  }
}
