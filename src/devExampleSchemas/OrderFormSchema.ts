import FieldBuilder from "../forms/syntaxSugar/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

export default class OrderFormSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    purOrderRef: FieldBuilder.number().build(),
    agent: FieldBuilder.caption("Service Agent").build(),
    customerName: FieldBuilder.caption("Customer Name").build(),
    description: FieldBuilder.caption("Description").build(),
    jobDepot: FieldBuilder.caption("Job Depot").build(),
    orderDepot: FieldBuilder.caption("Order Depot").build(),
    orderDepotId: FieldBuilder.number("Order Depot").mandatory(),
    orderStatus: FieldBuilder.caption("Order Status").build(),
    regNo: FieldBuilder.caption("Reg No").build(),
    vehicleId: FieldBuilder.number("vehicleId").build(),
    startDate: FieldBuilder.caption("Start Date").date().build(),
    startRef: FieldBuilder.caption("Start Ref").build(),
    agentOriginal: FieldBuilder.caption("Original Service Agent").build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}
