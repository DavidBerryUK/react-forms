import FieldBuilder from "../forms/syntaxSugar/fieldBuilders/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/form/IFormSchema";

export default class CustomerPriceFormSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    partsMarkupPercent: FieldBuilder.number("Parts Markup Percentage").shouldBeDecimal().shouldHaveValueMin(0).build(),
    labourMarkupPercent: FieldBuilder.number("Labour Markup Percentage").shouldBeDecimal().shouldHaveValueMin(0).build(),
    labourRateAmt: FieldBuilder.number("Labour Rate Amount").shouldBeDecimal().shouldHaveValueMin(0).build(),
    maxLabourRateAmt: FieldBuilder.number("Maximum Labour Rate Amount").shouldBeDecimal().shouldHaveValueMin(0).build(),
    dateCreated: FieldBuilder.date().
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}
