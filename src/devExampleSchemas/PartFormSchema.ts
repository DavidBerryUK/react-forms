import FieldBuilder from "../forms/syntaxSugar/fieldBuilders/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/form/IFormSchema";

export default class PartFormSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    code: FieldBuilder.string("Part Code").mandatory().shouldHaveLengthMax(50).build(),
    description: FieldBuilder.string("Description").mandatory().shouldHaveLengthMax(200).build(),
    manufacturer: FieldBuilder.string("Manufacturer").mandatory().shouldHaveLengthMax(50).build(),
    cost: FieldBuilder.number("Cost").mandatory().shouldHaveValueMin(0),
    exemptFromPriceRules: FieldBuilder.boolean("Exempt From Price Rules").build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}
