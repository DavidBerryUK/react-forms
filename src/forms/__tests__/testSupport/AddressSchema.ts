import AssertIsMandatory from "../../assertions/AssertIsMandatory";
import AssertLengthMax from "../../assertions/AssertLengthMax";
import AssertPostCodeUK from "../../assertions/AssertPostCodeUk";
import FormSchemaBase from "../../models/FormSchemaBase";
import IFormSchema from "../../interfaces/form/IFormSchema";
import SchemaFieldString from "../../schemaField/SchemaFieldString";

class Fields {
  company = SchemaFieldString.createWithAssertion("company", "Company", new AssertLengthMax(100));
  building = SchemaFieldString.createWithAssertion("building", "Building", new AssertLengthMax(100));
  street = SchemaFieldString.createWithAssertions("street", "Street", [new AssertIsMandatory(), new AssertLengthMax(100)]);
  locality = SchemaFieldString.createWithAssertion("locality", "Locality", new AssertLengthMax(100));
  town = SchemaFieldString.createWithAssertions("town", "Town", [new AssertIsMandatory(), new AssertLengthMax(100)]);
  postCode = SchemaFieldString.createWithAssertions("postCode", "Postcode", [new AssertIsMandatory(), new AssertPostCodeUK()]);
}

export default class AddressSchema extends FormSchemaBase implements IFormSchema {
  fields = new Fields();

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}
