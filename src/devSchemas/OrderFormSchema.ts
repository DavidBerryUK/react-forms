import FieldBuilder from "../forms/syntaxSugar/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

export default class OrderFormSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    purOrderRef: FieldBuilder.number().toField(),
    agent: FieldBuilder.caption("Service Agent").toField(),
    customerName: FieldBuilder.caption("Customer Name").toField(),
    description: FieldBuilder.caption("Description").toField(),
    jobDepot: FieldBuilder.caption("Job Depot").toField(),
    orderDepot: FieldBuilder.caption("Order Depot").toField(),
    orderDepotId: FieldBuilder.number("Order Depot").mandatory(),
    orderStatus: FieldBuilder.caption("Order Status").toField(),
    regNo: FieldBuilder.caption("Reg No").toField(),
    vehicleId: FieldBuilder.number("vehicleId").toField(),
    startDate: FieldBuilder.caption("Start Date").date().toField(),
    startRef: FieldBuilder.caption("Start Ref").toField(),
    agentOriginal: FieldBuilder.caption("Original Service Agent").toField(),
  };

  constructor() {
    super();
    this.parse(this.fields);
  }
}
