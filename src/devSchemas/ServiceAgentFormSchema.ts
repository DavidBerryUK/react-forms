import FieldBuilder from "../forms/syntaxSugar/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

export default class ServiceAgentFormSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    address1: FieldBuilder.caption("Address 1").toField(),
    address2: FieldBuilder.caption("Address 2").toField(),
    address3: FieldBuilder.caption("Address 3").toField(),
    address4: FieldBuilder.caption("Address 4").toField(),
    companyName: FieldBuilder.caption("Company Name").toField(),
    notes: FieldBuilder.caption("Notes").toField(),
    postCode: FieldBuilder.caption("Post Code").toField(),
    telphone: FieldBuilder.caption("Telephone").toField(),
    faxNo: FieldBuilder.caption("Fax No").toField(),
    emailAddress: FieldBuilder.caption("Email Address").toField(),
    sageRefNo: FieldBuilder.caption("Sage Ref No").mandatory().shouldHaveNoWhiteSpaces().shouldHaveLengthMax(15).toField(),
  };

  constructor() {
    super();
    this.parse(this.fields);
  }
}
