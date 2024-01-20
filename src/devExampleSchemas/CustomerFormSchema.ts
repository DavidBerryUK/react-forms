import FieldBuilder from "../forms/syntaxSugar/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/form/IFormSchema";

export default class CustomerFormSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    address1: FieldBuilder.string("Address 1").build(),
    address2: FieldBuilder.string("Address 2").build(),
    address3: FieldBuilder.string("Address 3").build(),
    address4: FieldBuilder.string("Address 4").build(),
    companyName: FieldBuilder.string("Company Name").build(),
    note: FieldBuilder.string("Note").build(),
    postCode: FieldBuilder.string("Post Code").shouldBePostCodeUK().build(),
    telephone: FieldBuilder.string("Telephone").build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}
