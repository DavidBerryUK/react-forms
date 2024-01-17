import FieldBuilder from "../forms/syntaxSugar/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

export default class VehicleFormSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    regNo: FieldBuilder.caption("Registration").mandatory().shouldHaveLengthMax(25).build(),
    companyName: FieldBuilder.caption("Company Name").build(),
    depotId: FieldBuilder.number().mandatory(),
    depotName: FieldBuilder.caption("Depot Name").build(),
    make: FieldBuilder.caption("Make").build(),
    makeId: FieldBuilder.number().build(),
    model: FieldBuilder.caption("Model").shouldHaveLengthMax(128).build(),
    type: FieldBuilder.caption("Type").build(),
    isCvRental: FieldBuilder.boolean("Is CV Rental").build(),
    fleetNo: FieldBuilder.caption("Fleet No").shouldHaveLengthMax(15).build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}
