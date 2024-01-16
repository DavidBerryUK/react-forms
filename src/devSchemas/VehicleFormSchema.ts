import Builder from "../forms/models/Builder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

//
// Define fields on the form.
// name     = same name as the field on the API Model
// caption  = name used on UI Captions and validation messages
//
class Fields {
  regNo = Builder.caption("Registration").mandatory().lengthMax(25).toField();
  companyName = Builder.caption("Company Name").toField();
  depotId = Builder.number().mandatory();
  depotName = Builder.caption("Depot Name").toField();
  make = Builder.caption("Make").toField();
  makeId = Builder.number().toField();
  model = Builder.caption("Model").lengthMax(128).toField();
  type = Builder.caption("Type").toField();
  isCvRental = Builder.boolean("Is CV Rental").toField();
  fleetNo = Builder.caption("Fleet No").lengthMax(15).toField();
}

export default class VehicleFormSchema extends FormSchemaBase implements IFormSchema {
  fields = new Fields();

  constructor() {
    super();
    this.parse(this.fields);
  }
}
