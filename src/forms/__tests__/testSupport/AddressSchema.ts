import AssertIsMandatory from "../../assertions/AssertIsMandatory";
import AssertLengthMax from "../../assertions/AssertLengthMax";
import AssertPostCodeUK from "../../assertions/AssertPostCodeUk";
import enumFieldType from "../../enums/EnumFieldType";
import FormSchemaBase from "../../models/FormSchemaBase";
import IFormSchema from "../../interfaces/form/IFormSchema";
import SchemaFieldString from "../../schemaField/SchemaFieldString";

class Fields {
  company = SchemaFieldString.createWithRule("company", "Company", enumFieldType.string, new AssertLengthMax(100));
  building = SchemaFieldString.createWithRule("building", "Building", enumFieldType.string, new AssertLengthMax(100));
  street = SchemaFieldString.createWithRules("street", "Street", enumFieldType.string, [new AssertIsMandatory(), new AssertLengthMax(100)]);
  locality = SchemaFieldString.createWithRule("locality", "Locality", enumFieldType.string, new AssertLengthMax(100));
  town = SchemaFieldString.createWithRules("town", "Town", enumFieldType.string, [new AssertIsMandatory(), new AssertLengthMax(100)]);
  postCode = SchemaFieldString.createWithRules("postCode", "Postcode", enumFieldType.string, [new AssertIsMandatory(), new AssertPostCodeUK()]);
}

export default class AddressSchema extends FormSchemaBase implements IFormSchema {
  fields = new Fields();

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}
