import Builder from "../forms/models/Builder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

//
// Define fields on the form.
// name     = same name as the field on the API Model
// caption  = name used on UI Captions and validation messages
//

class Fields {
  partsMarkupPercent = Builder.number("Parts Markup Percentage").isDecimal().valueMin(0);
  labourMarkupPercent = Builder.number("Labour Markup Percentage").isDecimal().valueMin(0);
  labourRateAmt = Builder.number("Labour Rate Amount").isDecimal().valueMin(0);
  maxLabourRateAmt = Builder.number("Maximum Labour Rate Amount").isDecimal().valueMin(0);
}

export default class CustomerPriceFormSchema extends FormSchemaBase implements IFormSchema {
  fields = new Fields();

  constructor() {
    super();
    this.parse(this.fields);
  }
}
