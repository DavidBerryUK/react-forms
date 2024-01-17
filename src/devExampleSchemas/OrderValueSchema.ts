import FieldBuilder from "../forms/syntaxSugar/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

export default class OrderValueSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    totalParts: FieldBuilder.number("Total Parts").build(),
    totalLabour: FieldBuilder.number("Total Labour").build(),
    total: FieldBuilder.number("total ").build(),
  };
  constructor() {
    super();
    this.parseFields(this.fields);
  }
}
