import Builder from "../forms/models/Builder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

//
// Define fields on the form.
// name     = same name as the field on the API Model
// caption  = name used on UI Captions and validation messages
//

class Fields {
  address1 = Builder.caption("Address 1").toField();
  address2 = Builder.caption("Address 2").toField();
  address3 = Builder.caption("Address 3").toField();
  address4 = Builder.caption("Address 4").toField();
  companyName = Builder.caption("Company Name").toField();
  note = Builder.caption("Note").toField();
  postCode = Builder.caption("Post Code").isUkPostCode().toField();
  telephone = Builder.caption("Telephone").toField();
}

export default class CustomerFormSchema extends FormSchemaBase implements IFormSchema {
  fields = new Fields();

  constructor() {
    super();
    this.parse(this.fields);
  }
}
