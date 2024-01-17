import FieldBuilder from "../forms/syntaxSugar/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

export default class CustomerFormSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    address1: FieldBuilder.caption("Address 1").build(),
    address2: FieldBuilder.caption("Address 2").build(),
    address3: FieldBuilder.caption("Address 3").build(),
    address4: FieldBuilder.caption("Address 4").build(),
    companyName: FieldBuilder.caption("Company Name").build(),
    note: FieldBuilder.caption("Note").build(),
    postCode: FieldBuilder.caption("Post Code").shouldBeUkPostCode().build(),
    telephone: FieldBuilder.caption("Telephone").build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}
