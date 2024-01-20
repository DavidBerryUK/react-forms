import FieldBuilder from "../forms/syntaxSugar/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/form/IFormSchema";

export default class ServiceAgentFormSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    address1: FieldBuilder.string("Address 1").build(),
    address2: FieldBuilder.string("Address 2").build(),
    address3: FieldBuilder.string("Address 3").build(),
    address4: FieldBuilder.string("Address 4").build(),
    companyName: FieldBuilder.string("Company Name").build(),
    notes: FieldBuilder.string("Notes").build(),
    postCode: FieldBuilder.string("Post Code").build(),
    telphone: FieldBuilder.string("Telephone").build(),
    faxNo: FieldBuilder.string("Fax No").build(),
    emailAddress: FieldBuilder.string("Email Address").build(),
    sageRefNo: FieldBuilder.string("Sage Ref No").mandatory().shouldHaveNoWhiteSpaces().shouldHaveLengthMax(15).build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}
