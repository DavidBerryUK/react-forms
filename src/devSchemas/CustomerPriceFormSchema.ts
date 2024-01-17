import FieldBuilder from "../forms/syntaxSugar/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

export default class CustomerPriceFormSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    partsMarkupPercent: FieldBuilder.number("Parts Markup Percentage").shouldeBeDecimal().shouldHaveValueMin(0),
    labourMarkupPercent: FieldBuilder.number("Labour Markup Percentage").shouldeBeDecimal().shouldHaveValueMin(0),
    labourRateAmt: FieldBuilder.number("Labour Rate Amount").shouldeBeDecimal().shouldHaveValueMin(0),
    maxLabourRateAmt: FieldBuilder.number("Maximum Labour Rate Amount").shouldeBeDecimal().shouldHaveValueMin(0),
  };

  constructor() {
    super();
    this.parse(this.fields);
  }
}
