import Conditions from "./Conditions";
import EnumFieldType from "../enums/EnumFieldType";
import EnumMessageType from "../enums/EnumMessageType";
import FormField from "../interfaces/IFormField";
import FormInstance from "./FormInstance";
import ICondition from "../interfaces/ICondition";
import IConditions from "../interfaces/IConditions";
import IFormSchema from "../interfaces/IFormSchema";
import IRule from "../interfaces/IRule";
import IRuleGroup from "../interfaces/IRuleGroup";
import ISchemaField from "../interfaces/ISchemaField";

export default class RuleGroup implements IRuleGroup {
  //
  // Rules to evaluate to determine if a field is valid
  //
  schemaField: ISchemaField | undefined;
  items: Array<IRule>;
  conditions: IConditions;

  public static create(rule: IRule): IRuleGroup {
    return new RuleGroup([rule]);
  }

  public static createRules(rules: Array<IRule>): IRuleGroup {
    return new RuleGroup(rules);
  }

  public static createRuleAndCondition(rule: IRule, condition: ICondition): IRuleGroup {
    return new RuleGroup([rule], new Conditions([condition]));
  }

  public static createRuleAndConditions(rule: IRule, conditions: Array<ICondition>): IRuleGroup {
    return new RuleGroup([rule], new Conditions(conditions));
  }

  public static createRulesAndCondition(rules: Array<IRule>, condition: ICondition): IRuleGroup {
    return new RuleGroup(rules, new Conditions([condition]));
  }

  public static createRulesAndConditions(rules: Array<IRule>, conditions: Array<ICondition>): IRuleGroup {
    return new RuleGroup(rules, new Conditions(conditions));
  }

  //
  // optional conditions,
  //  if provided then the rules will only be evaluated if
  //  the optional conditions are true.
  //
  //  if the provided conditions are FALSE, then
  //   the rules will be ignored and true returned
  //
  private constructor(rules?: Array<IRule>, conditions?: IConditions) {
    this.items = rules || new Array<IRule>();
    this.conditions = conditions || new Conditions([]);
  }

  // Run all the rules
  //
  // updateValidationState = update the validation state, if the rule is just being
  //                         used to check a condition the rules are evaluated
  //                         but results are not stored against a filed
  //
  evaluate(form: FormInstance<IFormSchema>, field: FormField, transactionId: string, updateValidationState = true): boolean {
    if (field.validation.transactionId && updateValidationState === true) {
      return field.validation.isValid;
    }

    var isValid = true;

    if (this.conditions.items.length > 0) {
      if (this.conditions.doConditionsPass(form, field.rowId, transactionId) === false) {
        // if conditions do not evaluate, this rule group
        // should not be processed and true returned
        return true;
      }
    }

    // trim text before evaluating
    var text = field.value;
    if (field.schemaField.fieldType === EnumFieldType.string) {
      text = (text as string).trim();
    }
    // loop though all rules
    //
    this.items.forEach((rule) => {
      var result = rule.isValid(form, field, text);
      if (result.pass === false) {
        isValid = false;
        if (updateValidationState) {
          field.validation.addMessage(EnumMessageType.realtime, result.message);
        }
      }
    });

    return isValid;
  }

  clone(deep?: boolean): IRuleGroup {
    throw new Error("Method not implemented.");
  }
}
