import Builder from "../forms/models/Builder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

//
// Define fields on the form.
// name     = same name as the field on the API Model
// caption  = name used on UI Captions and validation messages
//
class Fields {
  code = Builder.caption("Part Code").mandatory().lengthMax(50).toField();
  description = Builder.caption("Description").mandatory().lengthMax(200).toField();
  manufacturer = Builder.caption("Manufacturer").mandatory().lengthMax(50).toField();
  cost = Builder.number("Cost").mandatory().valueMin(0);
  exemptFromPriceRules = Builder.boolean("Exempt From Price Rules").toField();
}

export default class PartFormSchema extends FormSchemaBase implements IFormSchema {
  fields = new Fields();

  constructor() {
    super();
    this.parse(this.fields);
  }
}
