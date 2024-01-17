import FieldBuilder from "../forms/syntaxSugar/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

export default class OrderValueSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    totalParts: FieldBuilder.number("Total Parts").toField(),
    totalLabour: FieldBuilder.number("Total Labour").toField(),
    total: FieldBuilder.number("total ").toField(),
  };
  constructor() {
    super();
    this.parse(this.fields);
  }
}
