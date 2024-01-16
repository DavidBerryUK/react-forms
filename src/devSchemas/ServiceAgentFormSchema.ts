import Builder from "../forms/models/Builder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

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
  notes = Builder.caption("Notes").toField();
  postCode = Builder.caption("Post Code").toField();
  telphone = Builder.caption("Telephone").toField();
  faxNo = Builder.caption("Fax No").toField();
  emailAddress = Builder.caption("Email Address").toField();
  sageRefNo = Builder.caption("Sage Ref No").mandatory().noWhiteSpace().lengthMax(15).toField();
}

export default class ServiceAgentFormSchema extends FormSchemaBase implements IFormSchema {
  fields = new Fields();

  constructor() {
    super();
    this.parse(this.fields);
  }
}
