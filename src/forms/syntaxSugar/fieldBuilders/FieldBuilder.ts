import EnumFieldType from "../../enums/EnumFieldType";
import ISchemaField from "../../interfaces/schemaField/ISchemaField";
import SchemaField from "../../models/SchemaField";
import FieldBuilderString from "./FieldBuilderString";
import FieldBuilderNumber from "./FieldBuilderNumber";
import FieldBuilderBoolean from "./FieldBuilderBoolean";
import FieldBuilderDate from "./FieldBuilderDate";

export default class FieldBuilder {
  private _fieldType: EnumFieldType;
  private _caption: string;
  private _id: string;

  constructor() {
    this._id = "";
    this._caption = "";
    this._fieldType = EnumFieldType.string;
  }

  /****************************/
  /* TYPE - one is mandatory  */
  /****************************/
  static string(caption?: string): FieldBuilderString {
    var builder = new FieldBuilderString();
    if (caption !== undefined && caption !== null) {
      builder.caption(caption);
    }
    return builder;
  }

  static number(caption?: string): FieldBuilderNumber {
    var builder = new FieldBuilderNumber();
    if (caption !== undefined && caption !== null) {
      builder.caption(caption);
    }
    return builder;
  }

  static boolean(caption?: string): FieldBuilderBoolean {
    var builder = new FieldBuilderBoolean();
    if (caption !== undefined && caption !== null) {
      builder.caption(caption);
    }
    return builder;
  }

  static date(caption?: string): FieldBuilderDate {
    var builder = new FieldBuilderDate();
    if (caption !== undefined && caption !== null) {
      builder.caption(caption);
    }
    return builder;
  }

  /****************************/
  /* Finish Off               */
  /****************************/
  build(): ISchemaField {
    return SchemaField.create(this._id, this._caption, this._fieldType);
  }
}
