import EnumFieldType from "../enums/EnumFieldType";
import ICondition from "../interfaces/condition/ICondition";
import IRule from "../interfaces/rules/IRule";
import IRuleGroup from "../interfaces/rules/IRuleGroup";
import ISchemaField from "../interfaces/schemaField/ISchemaField";
import QueryBuilderBoolean from "../syntaxSugar/queryBuilders/QueryBuilderBoolean";
import RuleGroup from "../models/RuleGroup";
import SchemaFieldBase from "./SchemaFieldBase";
//
// define a field in the form dataset
//
export default class SchemaFieldBoolean extends SchemaFieldBase implements ISchemaField {
  readonly type: string = "SchemaFieldBoolean";

  //
  // convenience creators for different combinations
  // of fields with single or multiple validation rules
  // in combination with none, single or multiple conditions
  //
  public static create(id: string, caption: string, fieldType: EnumFieldType): SchemaFieldBoolean {
    return new SchemaFieldBoolean(id, caption, fieldType);
  }

  public static createWithRule(id: string, caption: string, fieldType: EnumFieldType, rule: IRule): SchemaFieldBoolean {
    return new SchemaFieldBoolean(id, caption, fieldType, RuleGroup.create(rule));
  }

  public static createWithRuleGroup(id: string, caption: string, fieldType: EnumFieldType, ruleGroup: IRuleGroup): SchemaFieldBoolean {
    return new SchemaFieldBoolean(id, caption, fieldType, ruleGroup);
  }

  public static createWithRuleAndCondition(
    id: string,
    caption: string,
    fieldType: EnumFieldType,
    rule: IRule,
    condition: ICondition
  ): SchemaFieldBoolean {
    return new SchemaFieldBoolean(id, caption, fieldType, RuleGroup.createRuleAndCondition(rule, condition));
  }

  public static createWithRuleAndConditions(
    id: string,
    caption: string,
    fieldType: EnumFieldType,
    rule: IRule,
    condition: Array<ICondition>
  ): SchemaFieldBoolean {
    return new SchemaFieldBoolean(id, caption, fieldType, RuleGroup.createRuleAndConditions(rule, condition));
  }

  public static createWithRulesAndCondition(
    id: string,
    caption: string,
    fieldType: EnumFieldType,
    rules: Array<IRule>,
    condition: ICondition
  ): SchemaFieldBoolean {
    return new SchemaFieldBoolean(id, caption, fieldType, RuleGroup.createRulesAndCondition(rules, condition));
  }

  public static createWithRulesAndConditions(
    id: string,
    caption: string,
    fieldType: EnumFieldType,
    rules: Array<IRule>,
    conditions: Array<ICondition>
  ): SchemaFieldBoolean {
    return new SchemaFieldBoolean(id, caption, fieldType, RuleGroup.createRulesAndConditions(rules, conditions));
  }

  public static createWithRules(id: string, caption: string, fieldType: EnumFieldType, rules: Array<IRule>): SchemaFieldBoolean {
    if (rules.length === 0) {
      return new SchemaFieldBoolean(id, caption, fieldType);
    }
    return new SchemaFieldBoolean(id, caption, fieldType, RuleGroup.createRules(rules));
  }

  public static createWithRuleGroups(id: string, caption: string, fieldType: EnumFieldType, ruleGroups: Array<IRuleGroup>) {
    const field = new SchemaFieldBoolean(id, caption, fieldType);
    ruleGroups.forEach((group) => {
      field.appendRules(group);
    });
    return field;
  }

  state(): QueryBuilderBoolean {
    return new QueryBuilderBoolean(this);
  }
}
