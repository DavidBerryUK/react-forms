import EnumFieldType from "../enums/EnumFieldType";
import ICondition from "../interfaces/condition/ICondition";
import IRule from "../interfaces/rules/IRule";
import IRuleGroup from "../interfaces/rules/IRuleGroup";
import ISchemaField from "../interfaces/schemaField/ISchemaField";
import QueryBuilderDate from "../syntaxSugar/queryBuilders/QueryBuilderDate";
import RuleGroup from "../models/RuleGroup";
import SchemaFieldBase from "./SchemaFieldBase";
//
// define a field in the form dataset
//
export default class SchemaFieldDate extends SchemaFieldBase implements ISchemaField {
  readonly type: string = "SchemaFieldDate";
  private static readonly fieldType = EnumFieldType.date;

  //
  // convenience creators for different combinations
  // of fields with single or multiple validation rules
  // in combination with none, single or multiple conditions
  //
  public static create(id: string, caption: string, fieldType: EnumFieldType): SchemaFieldDate {
    return new SchemaFieldDate(id, caption, SchemaFieldDate.fieldType);
  }

  public static createWithRule(id: string, caption: string, rule: IRule): SchemaFieldDate {
    return new SchemaFieldDate(id, caption, SchemaFieldDate.fieldType, RuleGroup.create(rule));
  }

  public static createWithRuleGroup(id: string, caption: string, ruleGroup: IRuleGroup): SchemaFieldDate {
    return new SchemaFieldDate(id, caption, SchemaFieldDate.fieldType, ruleGroup);
  }

  public static createWithRuleAndCondition(id: string, caption: string, rule: IRule, condition: ICondition): SchemaFieldDate {
    return new SchemaFieldDate(id, caption, SchemaFieldDate.fieldType, RuleGroup.createRuleAndCondition(rule, condition));
  }

  public static createWithRuleAndConditions(id: string, caption: string, rule: IRule, condition: Array<ICondition>): SchemaFieldDate {
    return new SchemaFieldDate(id, caption, SchemaFieldDate.fieldType, RuleGroup.createRuleAndConditions(rule, condition));
  }

  public static createWithRulesAndCondition(id: string, caption: string, rules: Array<IRule>, condition: ICondition): SchemaFieldDate {
    return new SchemaFieldDate(id, caption, SchemaFieldDate.fieldType, RuleGroup.createRulesAndCondition(rules, condition));
  }

  public static createWithRulesAndConditions(id: string, caption: string, rules: Array<IRule>, conditions: Array<ICondition>): SchemaFieldDate {
    return new SchemaFieldDate(id, caption, SchemaFieldDate.fieldType, RuleGroup.createRulesAndConditions(rules, conditions));
  }

  public static createWithRules(id: string, caption: string, rules: Array<IRule>): SchemaFieldDate {
    if (rules.length === 0) {
      return new SchemaFieldDate(id, caption, SchemaFieldDate.fieldType);
    }
    return new SchemaFieldDate(id, caption, SchemaFieldDate.fieldType, RuleGroup.createRules(rules));
  }

  public static createWithRuleGroups(id: string, caption: string, ruleGroups: Array<IRuleGroup>) {
    const field = new SchemaFieldDate(id, caption, SchemaFieldDate.fieldType);
    ruleGroups.forEach((group) => {
      field.appendRules(group);
    });
    return field;
  }

  state(): QueryBuilderDate {
    return new QueryBuilderDate(this);
  }
}
