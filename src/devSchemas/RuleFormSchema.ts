import Builder from "../forms/models/Builder";
import Condition from "../forms/models/Condition";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";
import RuleConditionIsPopulated from "../forms/validationRules/simple/RuleConditionIsPopulated";
import RuleEmpty from "../forms/validationRules/simple/RuleEmpty";
import RuleGroup from "../forms/models/RuleGroup";
//
// Define fields on the form.
// name     = same name as the field on the API Model
// caption  = name used on UI Captions and validation messages
//
class Fields {
  name = Builder.caption("Rule Name").mandatory().lengthMax(200).toField();
  active = Builder.boolean("active").toField();
  labourMarkupPercent = Builder.number("Labour Markup Percentage").isDecimal().valueMin(0).toField();
  labourRateAmt = Builder.number("Labour Rate Amount").isDecimal().valueMin(0).toField();
  maxLabourRateAmt = Builder.number("Maximum Labour Rate Amount").isDecimal().valueMin(0).toField();
  partsMarkupPercent = Builder.number("Parts Markup Percentage").isDecimal().valueMin(0).toField();
  priority = Builder.number("Priority").isInteger().valueMin(0).toField();
  ruleHireTypeId = Builder.number("CVRental Rule").toField();
  ruleJobTypeId = Builder.number("Job type").toField();
  ruleTimeId = Builder.number("Rule Time").toField();
  ruleTypeId = Builder.number("Rule Type").toField();
}

export default class RuleFormSchema extends FormSchemaBase implements IFormSchema {
  fields = new Fields();

  constructor() {
    super();
    this.addConditionalLabourRateAmountValidationRule();
    this.addConditionalLabourMarkUpPercentageValidationRule();
    this.parse(this.fields);
  }

  private addConditionalLabourRateAmountValidationRule() {
    const field = this.fields.labourRateAmt;

    //
    // Labour Rate amount can not be populated if Labour Markup Percent has been entered
    //
    const isPercentageIsPopulated = Condition.create(this.fields.labourMarkupPercent, new RuleConditionIsPopulated());
    const ruleNotAllowedIfPercentagePopulated = RuleGroup.createRuleAndCondition(
      new RuleEmpty("is not allowed when Labour Markup Percentate is entered"),
      isPercentageIsPopulated
    );
    field.appendRules(ruleNotAllowedIfPercentagePopulated);
  }

  private addConditionalLabourMarkUpPercentageValidationRule() {
    const field = this.fields.labourMarkupPercent;
    //
    // Labour Markup Percent amount can not be populated if Labour Rate has been entered
    //
    const isLabourRateIsPopulated = Condition.create(this.fields.labourRateAmt, new RuleConditionIsPopulated());
    const ruleNotAllowedIfLabourRatePopulated = RuleGroup.createRuleAndCondition(
      new RuleEmpty("is not allowed when Labour Rate Amount is entered"),
      isLabourRateIsPopulated
    );
    field.appendRules(ruleNotAllowedIfLabourRatePopulated);
  }
}
