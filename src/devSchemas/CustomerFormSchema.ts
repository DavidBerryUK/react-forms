import FieldBuilder from "../forms/syntaxSugar/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

export default class CustomerFormSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    address1: FieldBuilder.caption("Address 1").toField(),
    address2: FieldBuilder.caption("Address 2").toField(),
    address3: FieldBuilder.caption("Address 3").toField(),
    address4: FieldBuilder.caption("Address 4").toField(),
    companyName: FieldBuilder.caption("Company Name").toField(),
    note: FieldBuilder.caption("Note").toField(),
    postCode: FieldBuilder.caption("Post Code").shouldBeUkPostCode().toField(),
    telephone: FieldBuilder.caption("Telephone").toField(),
  };

  constructor() {
    super();
    this.parse(this.fields);
  }
}
