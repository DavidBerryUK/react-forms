import IFormSchema from "../interfaces/form/IFormSchema";
import ISchemaField from "../interfaces/schemaField/ISchemaField";
import SchemaFieldBase from "../schemaField/SchemaFieldBase";
import SchemaFieldCollection from "./SchemaFieldCollection";

export default class FormSchemaBase implements IFormSchema {
  fieldCollection: SchemaFieldCollection;

  constructor() {
    this.fieldCollection = new SchemaFieldCollection();
  }

  parseFields(fields: any) {
    if (fields === undefined || fields === null || typeof fields !== "object") {
      return;
    }

    const keys = Object.keys(fields);
    keys.forEach((key) => {
      const property = Reflect.get(fields, key);

      if (SchemaFieldBase.isSchemaField(property)) {
        if (!property.hasId()) {
          property.id = key;
        }

        this.fieldCollection.addOrUpdate(property);
      }
    });
  }

  addField(field: ISchemaField) {
    if (field.hasId() === false) {
      throw new Error("The field must have an id");
    }

    this.fieldCollection.addOrUpdate(field);
  }
}
