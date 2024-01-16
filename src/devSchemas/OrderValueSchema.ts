import Builder from "../forms/models/Builder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

class Fields {
  // order total values (populated from order lintes)
  totalParts = Builder.number("Total Parts").toField();
  totalLabour = Builder.number("Total Labour").toField();
  total = Builder.number("total ").toField();
}

export default class OrderValueSchema extends FormSchemaBase implements IFormSchema {
  fields = new Fields();

  constructor() {
    super();
    this.parse(this.fields);
  }
}
