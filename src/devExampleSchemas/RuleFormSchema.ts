import FieldBuilder from "../forms/syntaxSugar/fieldBuilders/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/form/IFormSchema";

export default class RuleFormSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    name: FieldBuilder.string("Rule Name").mandatory().maxLength(200).build(),
    active: FieldBuilder.boolean("active").build(),
    labourMarkupPercent: FieldBuilder.number("Labour Markup Percentage").decimal().min(0).build(),
    labourRateAmt: FieldBuilder.number("Labour Rate Amount").decimal().min(0).build(),
    maxLabourRateAmt: FieldBuilder.number("Maximum Labour Rate Amount").decimal().min(0).build(),
    partsMarkupPercent: FieldBuilder.number("Parts Markup Percentage").decimal().min(0).build(),
    priority: FieldBuilder.number("Priority").integer().min(0).build(),
    ruleHireTypeId: FieldBuilder.number("CVRental Rule").integer().build(),
    ruleJobTypeId: FieldBuilder.number("Job type").integer().build(),
    ruleTimeId: FieldBuilder.number("Rule Type").integer().build(),
    ruleTypeId: FieldBuilder.number("Rule Type").integer().build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);

    this.fields.labourRateAmt
      .when(this.fields.labourMarkupPercent.state().ifPopulated())
      .empty("is not allowed when Labour Markup Percentate is entered");

    this.fields.labourMarkupPercent.when(this.fields.labourRateAmt.state().ifPopulated()).empty("is not allowed when Labour Rate Amount is entered");
  }
}
