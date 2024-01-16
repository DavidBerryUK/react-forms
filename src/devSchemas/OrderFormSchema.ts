import Builder from "../forms/models/Builder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

//
// Define fields on the form.
// name     = same name as the field on the API Model
// caption  = name used on UI Captions and validation messages
//
export class Fields {
  purOrderRef = Builder.number("Pur Order Ref").toField();
  agent = Builder.caption("Service Agent").toField();
  customerName = Builder.caption("Customer Name").toField();
  description = Builder.caption("Description").toField();
  jobDepot = Builder.caption("Job Depot").toField();
  orderDepot = Builder.caption("Order Depot").toField();
  orderDepotId = Builder.number("Order Depot").mandatory();
  orderStatus = Builder.caption("Order Status").toField();
  regNo = Builder.caption("Reg No").toField();
  vehicleId = Builder.number("vehicleId").toField();
  startDate = Builder.caption("Start Date").date().toField();
  startRef = Builder.caption("Start Ref").toField();
  agentOriginal = Builder.caption("Original Service Agent").toField();
}

export default class OrderFormSchema extends FormSchemaBase implements IFormSchema {
  fields = new Fields();

  constructor() {
    super();
    this.parse(this.fields);
  }
}
