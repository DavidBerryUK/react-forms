import FieldBuilder from "../forms/syntaxSugar/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

export default class VehicleFormSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    regNo: FieldBuilder.string("Registration").mandatory().shouldHaveLengthMax(25).build(),
    companyName: FieldBuilder.string("Company Name").build(),
    depotId: FieldBuilder.number().mandatory(),
    depotName: FieldBuilder.string("Depot Name").build(),
    make: FieldBuilder.string("Make").build(),
    makeId: FieldBuilder.number().build(),
    model: FieldBuilder.string("Model").shouldHaveLengthMax(128).build(),
    type: FieldBuilder.string("Type").build(),
    isCvRental: FieldBuilder.boolean("Is CV Rental").build(),
    fleetNo: FieldBuilder.string("Fleet No").shouldHaveLengthMax(15).build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}
