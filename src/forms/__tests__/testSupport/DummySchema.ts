import { enumFieldType } from "../../enums/EnumFieldType";
import FormSchemaBase from "../../models/FormSchemaBase";
import IFormSchema from "../../interfaces/IFormSchema";
import SchemaField from "../../models/SchemaField";

class Fields {
  dummyField = SchemaField.create("dummy", "Dummy Field", enumFieldType.string);
}

export default class DummySchema extends FormSchemaBase implements IFormSchema {
  fields = new Fields();
  constructor() {
    super();
    this.parse(this.fields);
  }
}
