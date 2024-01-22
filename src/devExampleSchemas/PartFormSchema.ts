import FieldBuilder from "../forms/syntaxSugar/fieldBuilders/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/form/IFormSchema";

export default class PartFormSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    code: FieldBuilder.string("Part Code").mandatory().maxLength(50).build(),
    description: FieldBuilder.string("Description").mandatory().maxLength(200).build(),
    manufacturer: FieldBuilder.string("Manufacturer").mandatory().maxLength(50).build(),
    cost: FieldBuilder.number("Cost").mandatory().min(0),
    exemptFromPriceRules: FieldBuilder.boolean("Exempt From Price Rules").build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}
