import { QueryBuilderTypes } from "../types/BuilderTypes";
import ConditionalValidationBuilderNumber from "../syntaxSugar/conditionalValidationBuilders/ConditionalValidationBuilderNumber";
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
  private static readonly fieldType = EnumFieldType.number;

  //
  // convenience creators for different combinations
  // of fields with single or multiple validation rules
  // in combination with none, single or multiple conditions
  //
  public static create(id: string, caption: string): SchemaFieldNumber {
    return new SchemaFieldNumber(id, caption, SchemaFieldNumber.fieldType);
  }

  public static createWithRule(id: string, caption: string, rule: IRule): SchemaFieldNumber {
    return new SchemaFieldNumber(id, caption, SchemaFieldNumber.fieldType, RuleGroup.create(rule));
  }

  public static createWithRuleGroup(id: string, caption: string, ruleGroup: IRuleGroup): SchemaFieldNumber {
    return new SchemaFieldNumber(id, caption, SchemaFieldNumber.fieldType, ruleGroup);
  }

  public static createWithRuleAndCondition(id: string, caption: string, rule: IRule, condition: ICondition): SchemaFieldNumber {
    return new SchemaFieldNumber(id, caption, SchemaFieldNumber.fieldType, RuleGroup.createRuleAndCondition(rule, condition));
  }

  public static createWithRuleAndConditions(id: string, caption: string, rule: IRule, condition: Array<ICondition>): SchemaFieldNumber {
    return new SchemaFieldNumber(id, caption, SchemaFieldNumber.fieldType, RuleGroup.createRuleAndConditions(rule, condition));
  }

  public static createWithRulesAndCondition(id: string, caption: string, rules: Array<IRule>, condition: ICondition): SchemaFieldNumber {
    return new SchemaFieldNumber(id, caption, SchemaFieldNumber.fieldType, RuleGroup.createRulesAndCondition(rules, condition));
  }

  public static createWithRulesAndConditions(id: string, caption: string, rules: Array<IRule>, conditions: Array<ICondition>): SchemaFieldNumber {
    return new SchemaFieldNumber(id, caption, SchemaFieldNumber.fieldType, RuleGroup.createRulesAndConditions(rules, conditions));
  }

  public static createWithRules(id: string, caption: string, rules: Array<IRule>): SchemaFieldNumber {
    if (rules.length === 0) {
      return new SchemaFieldNumber(id, caption, SchemaFieldNumber.fieldType);
    }
    return new SchemaFieldNumber(id, caption, SchemaFieldNumber.fieldType, RuleGroup.createRules(rules));
  }

  public static createWithRuleGroups(id: string, caption: string, ruleGroups: Array<IRuleGroup>) {
    const field = new SchemaFieldNumber(id, caption, SchemaFieldNumber.fieldType);
    ruleGroups.forEach((group) => {
      field.appendRules(group);
    });
    return field;
  }

  when(state: QueryBuilderTypes): ConditionalValidationBuilderNumber {
    return new ConditionalValidationBuilderNumber(this, state);
  }

  state(): QueryBuilderNumber {
    return new QueryBuilderNumber(this);
  }
}
