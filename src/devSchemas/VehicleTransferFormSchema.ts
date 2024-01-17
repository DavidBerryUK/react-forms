import FieldBuilder from "../forms/syntaxSugar/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

export default class VehicleTransferFormSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    vehicleId: FieldBuilder.number("Vehicle Id").mandatory().toField(),
    customerId: FieldBuilder.number("Customer Id").mandatory().toField(),
    depotId: FieldBuilder.caption("Depot").mandatory(),
    transferDate: FieldBuilder.date("Transfer Date").mandatory(),
  };

  constructor() {
    super();
    this.parse(this.fields);
  }
}
