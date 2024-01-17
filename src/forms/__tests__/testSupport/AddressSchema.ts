import AssertIsMandatory from "../../assertions/AssertIsMandatory";
import AssertLengthMax from "../../assertions/AssertLengthMax";
import AssertPostCodeUK from "../../assertions/AssertPostCodeUk";
import enumFieldType from "../../enums/EnumFieldType";
import FormSchemaBase from "../../models/FormSchemaBase";
import IFormSchema from "../../interfaces/IFormSchema";
import SchemaField from "../../models/SchemaField";

class Fields {
  company = SchemaField.createWithRule("company", "Company", enumFieldType.string, new AssertLengthMax(100));
  building = SchemaField.createWithRule("building", "Building", enumFieldType.string, new AssertLengthMax(100));
  street = SchemaField.createWithRules("street", "Street", enumFieldType.string, [new AssertIsMandatory(), new AssertLengthMax(100)]);
  locality = SchemaField.createWithRule("locality", "Locality", enumFieldType.string, new AssertLengthMax(100));
  town = SchemaField.createWithRules("town", "Town", enumFieldType.string, [new AssertIsMandatory(), new AssertLengthMax(100)]);
  postCode = SchemaField.createWithRules("postCode", "Postcode", enumFieldType.string, [new AssertIsMandatory(), new AssertPostCodeUK()]);
}

export default class AddressSchema extends FormSchemaBase implements IFormSchema {
  fields = new Fields();

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}
