import Builder from "../forms/models/Builder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

//
// Define fields on the form.
// name     = same name as the field on the API Model
// caption  = name used on UI Captions and validation messages
//
class Fields {
  vehicleId = Builder.number("Vehicle Id").mandatory().toField();
  customerId = Builder.number("Customer Id").mandatory().toField();
  depotId = Builder.caption("Depot").mandatory();
  transferDate = Builder.date("Transfer Date").mandatory();
}

export default class VehicleTransferFormSchema extends FormSchemaBase implements IFormSchema {
  fields = new Fields();

  constructor() {
    super();
    this.parse(this.fields);
  }
}
