import FieldBuilder from "../forms/syntaxSugar/fieldBuilders/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/form/IFormSchema";

export default class OrderLineSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    name: FieldBuilder.string("Name").mandatory().maxLength(100).build(),
    itemCost: FieldBuilder.number("Cost").decimal().positive().build(),
    quantity: FieldBuilder.number("Quantity").integer().positive().build(),
    labourCost: FieldBuilder.number("Total Labour").decimal().build(),
    total: FieldBuilder.number("Total ").build(),
  };
  constructor() {
    super();
    this.parseFields(this.fields);
  }
}
