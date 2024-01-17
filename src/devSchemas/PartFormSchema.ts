import FieldBuilder from "../forms/syntaxSugar/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

export default class PartFormSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    code: FieldBuilder.caption("Part Code").mandatory().shouldHaveLengthMax(50).toField(),
    description: FieldBuilder.caption("Description").mandatory().shouldHaveLengthMax(200).toField(),
    manufacturer: FieldBuilder.caption("Manufacturer").mandatory().shouldHaveLengthMax(50).toField(),
    cost: FieldBuilder.number("Cost").mandatory().shouldHaveValueMin(0),
    exemptFromPriceRules: FieldBuilder.boolean("Exempt From Price Rules").toField(),
  };

  constructor() {
    super();
    this.parse(this.fields);
  }
}
