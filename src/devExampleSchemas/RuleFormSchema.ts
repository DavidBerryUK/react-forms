import FieldBuilder from "../forms/syntaxSugar/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

export default class RuleFormSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    name: FieldBuilder.caption("Rule Name").mandatory().shouldHaveLengthMax(200).build(),
    active: FieldBuilder.boolean("active").build(),
    labourMarkupPercent: FieldBuilder.number("Labour Markup Percentage").shouldBeDecimal().shouldHaveValueMin(0).build(),
    labourRateAmt: FieldBuilder.number("Labour Rate Amount").shouldBeDecimal().shouldHaveValueMin(0).build(),
    maxLabourRateAmt: FieldBuilder.number("Maximum Labour Rate Amount").shouldBeDecimal().shouldHaveValueMin(0).build(),
    partsMarkupPercent: FieldBuilder.number("Parts Markup Percentage").shouldBeDecimal().shouldHaveValueMin(0).build(),
    priority: FieldBuilder.number("Priority").shouldBeInteger().shouldHaveValueMin(0).build(),
    ruleHireTypeId: FieldBuilder.number("CVRental Rule").build(),
    ruleJobTypeId: FieldBuilder.number("Job type").build(),
    ruleTimeId: FieldBuilder.number("Rule Time").build(),
    ruleTypeId: FieldBuilder.number("Rule Type").build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);

    this.fields.labourRateAmt
      .when(this.fields.labourMarkupPercent.state().ifIsPopulated())
      .shouldBeEmpty("is not allowed when Labour Markup Percentate is entered");

    this.fields.labourMarkupPercent
      .when(this.fields.labourRateAmt.state().ifIsPopulated())
      .shouldBeEmpty("is not allowed when Labour Rate Amount is entered");
  }
}
