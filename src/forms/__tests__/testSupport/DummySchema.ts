import EnumFieldType from "../../enums/EnumFieldType";
import FormSchemaBase from "../../models/FormSchemaBase";
import IFormSchema from "../../interfaces/form/IFormSchema";
import SchemaFieldString from "../../schemaField/SchemaFieldString";

class Fields {
  dummyField = SchemaFieldString.create("dummy", "Dummy Field", EnumFieldType.string);
}

export default class DummySchema extends FormSchemaBase implements IFormSchema {
  fields = new Fields();
  constructor() {
    super();
    this.parseFields(this.fields);
  }
}
