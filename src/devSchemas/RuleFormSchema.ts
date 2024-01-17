import FieldBuilder from "../forms/syntaxSugar/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

export default class RuleFormSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    name: FieldBuilder.caption("Rule Name").mandatory().shouldHaveLengthMax(200).toField(),
    active: FieldBuilder.boolean("active").toField(),
    labourMarkupPercent: FieldBuilder.number("Labour Markup Percentage").shouldeBeDecimal().shouldHaveValueMin(0).toField(),
    labourRateAmt: FieldBuilder.number("Labour Rate Amount").shouldeBeDecimal().shouldHaveValueMin(0).toField(),
    maxLabourRateAmt: FieldBuilder.number("Maximum Labour Rate Amount").shouldeBeDecimal().shouldHaveValueMin(0).toField(),
    partsMarkupPercent: FieldBuilder.number("Parts Markup Percentage").shouldeBeDecimal().shouldHaveValueMin(0).toField(),
    priority: FieldBuilder.number("Priority").shouldBeInteger().shouldHaveValueMin(0).toField(),
    ruleHireTypeId: FieldBuilder.number("CVRental Rule").toField(),
    ruleJobTypeId: FieldBuilder.number("Job type").toField(),
    ruleTimeId: FieldBuilder.number("Rule Time").toField(),
    ruleTypeId: FieldBuilder.number("Rule Type").toField(),
  };

  constructor() {
    super();
    this.parse(this.fields);

    this.fields.labourRateAmt
      .when(this.fields.labourMarkupPercent.state().shouldBePopulated())
      .shouldBeEmpty("is not allowed when Labour Markup Percentate is entered");

    this.fields.labourMarkupPercent
      .when(this.fields.labourRateAmt.state().shouldBePopulated())
      .shouldBeEmpty("is not allowed when Labour Rate Amount is entered");
  }

  // private addConditionalLabourRateAmountValidationRule() {
  //   const field = this.fields.labourRateAmt;

  //   //
  //   // Labour Rate amount can not be populated if Labour Markup Percent has been entered
  //   //
  //   const isPercentageIsPopulated = Condition.create(this.fields.labourMarkupPercent, new AssertIsPopulated());
  //   const ruleNotAllowedIfPercentagePopulated = RuleGroup.createRuleAndCondition(
  //     new AssertIsEmpty("is not allowed when Labour Markup Percentate is entered"),
  //     isPercentageIsPopulated
  //   );
  //   field.appendRules(ruleNotAllowedIfPercentagePopulated);
  // }

  // private addConditionalLabourMarkUpPercentageValidationRule() {
  //   const field = this.fields.labourMarkupPercent;
  //   //
  //   // Labour Markup Percent amount can not be populated if Labour Rate has been entered
  //   //
  //   const isLabourRateIsPopulated = Condition.create(this.fields.labourRateAmt, new AssertIsPopulated());
  //   const ruleNotAllowedIfLabourRatePopulated = RuleGroup.createRuleAndCondition(
  //     new AssertIsEmpty("is not allowed when Labour Rate Amount is entered"),
  //     isLabourRateIsPopulated
  //   );
  //   field.appendRules(ruleNotAllowedIfLabourRatePopulated);
  // }
}
