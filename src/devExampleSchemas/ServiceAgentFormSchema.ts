import FieldBuilder from "../forms/syntaxSugar/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

export default class ServiceAgentFormSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    address1: FieldBuilder.caption("Address 1").build(),
    address2: FieldBuilder.caption("Address 2").build(),
    address3: FieldBuilder.caption("Address 3").build(),
    address4: FieldBuilder.caption("Address 4").build(),
    companyName: FieldBuilder.caption("Company Name").build(),
    notes: FieldBuilder.caption("Notes").build(),
    postCode: FieldBuilder.caption("Post Code").build(),
    telphone: FieldBuilder.caption("Telephone").build(),
    faxNo: FieldBuilder.caption("Fax No").build(),
    emailAddress: FieldBuilder.caption("Email Address").build(),
    sageRefNo: FieldBuilder.caption("Sage Ref No").mandatory().shouldHaveNoWhiteSpaces().shouldHaveLengthMax(15).build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}
