import { QueryBuilderTypes } from "../types/BuilderTypes";
import ConditionalValidationBuilderBoolean from "../syntaxSugar/conditionalValidationBuilders/ConditionalValidationBuilderBoolean";
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
  private static readonly fieldType = EnumFieldType.boolean;

  //
  // convenience creators for different combinations
  // of fields with single or multiple validation rules
  // in combination with none, single or multiple conditions
  //
  public static create(id: string, caption: string): SchemaFieldBoolean {
    return new SchemaFieldBoolean(id, caption, SchemaFieldBoolean.fieldType);
  }

  public static createWithRule(id: string, caption: string, rule: IRule): SchemaFieldBoolean {
    return new SchemaFieldBoolean(id, caption, SchemaFieldBoolean.fieldType, RuleGroup.create(rule));
  }

  public static createWithRuleGroup(id: string, caption: string, ruleGroup: IRuleGroup): SchemaFieldBoolean {
    return new SchemaFieldBoolean(id, caption, SchemaFieldBoolean.fieldType, ruleGroup);
  }

  public static createWithRuleAndCondition(id: string, caption: string, rule: IRule, condition: ICondition): SchemaFieldBoolean {
    return new SchemaFieldBoolean(id, caption, SchemaFieldBoolean.fieldType, RuleGroup.createRuleAndCondition(rule, condition));
  }

  public static createWithRuleAndConditions(id: string, caption: string, rule: IRule, condition: Array<ICondition>): SchemaFieldBoolean {
    return new SchemaFieldBoolean(id, caption, SchemaFieldBoolean.fieldType, RuleGroup.createRuleAndConditions(rule, condition));
  }

  public static createWithRulesAndCondition(id: string, caption: string, rules: Array<IRule>, condition: ICondition): SchemaFieldBoolean {
    return new SchemaFieldBoolean(id, caption, SchemaFieldBoolean.fieldType, RuleGroup.createRulesAndCondition(rules, condition));
  }

  public static createWithRulesAndConditions(id: string, caption: string, rules: Array<IRule>, conditions: Array<ICondition>): SchemaFieldBoolean {
    return new SchemaFieldBoolean(id, caption, SchemaFieldBoolean.fieldType, RuleGroup.createRulesAndConditions(rules, conditions));
  }

  public static createWithRules(id: string, caption: string, rules: Array<IRule>): SchemaFieldBoolean {
    if (rules.length === 0) {
      return new SchemaFieldBoolean(id, caption, SchemaFieldBoolean.fieldType);
    }
    return new SchemaFieldBoolean(id, caption, SchemaFieldBoolean.fieldType, RuleGroup.createRules(rules));
  }

  public static createWithRuleGroups(id: string, caption: string, ruleGroups: Array<IRuleGroup>) {
    const field = new SchemaFieldBoolean(id, caption, SchemaFieldBoolean.fieldType);
    ruleGroups.forEach((group) => {
      field.appendRules(group);
    });
    return field;
  }

  //
  // used to build up conditional validation in the following format
  // this.fields.dietryRequirementsNotes.when(this.fields.dietryRequirementsFlag.state().ifIsTrue()).shouldHaveLengthBetween(10, 1000).mandatory();
  //
  // the conditional rules are not applied until the first conditional validation is provided, this is done
  // by the conditionalValidationBuilder
  when(state: QueryBuilderTypes): ConditionalValidationBuilderBoolean {
    return new ConditionalValidationBuilderBoolean(this, state);
  }

  state(): QueryBuilderBoolean {
    return new QueryBuilderBoolean(this);
  }
}
