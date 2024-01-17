import FieldBuilder from "../forms/syntaxSugar/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

export default class VehicleFormSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    regNo: FieldBuilder.caption("Registration").mandatory().shouldHaveLengthMax(25).toField(),
    companyName: FieldBuilder.caption("Company Name").toField(),
    depotId: FieldBuilder.number().mandatory(),
    depotName: FieldBuilder.caption("Depot Name").toField(),
    make: FieldBuilder.caption("Make").toField(),
    makeId: FieldBuilder.number().toField(),
    model: FieldBuilder.caption("Model").shouldHaveLengthMax(128).toField(),
    type: FieldBuilder.caption("Type").toField(),
    isCvRental: FieldBuilder.boolean("Is CV Rental").toField(),
    fleetNo: FieldBuilder.caption("Fleet No").shouldHaveLengthMax(15).toField(),
  };

  constructor() {
    super();
    this.parse(this.fields);
  }
}
