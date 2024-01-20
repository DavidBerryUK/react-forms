import IFormSchema from "../forms/interfaces/form/IFormSchema";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import FieldBuilder from "../forms/syntaxSugar/FieldBuilder";

export default class SchemaAddress extends FormSchemaBase implements IFormSchema {
  fields = {
    addressLine1: FieldBuilder.string("Address Line 1").shouldHaveLengthBetween(20, 100).mandatory().build(),
    addressLine2: FieldBuilder.string("Address Line 2").shouldHaveLengthBetween(20, 100).build(),
    addressLine3: FieldBuilder.string("Address Line 3").shouldHaveLengthBetween(20, 100).build(),
    addressLine4: FieldBuilder.string("Address Line 4").shouldHaveLengthBetween(20, 100).build(),
    postCode: FieldBuilder.string("Post Code").shouldBePostCodeUK().build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}
