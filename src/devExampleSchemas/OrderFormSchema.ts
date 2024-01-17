import FieldBuilder from "../forms/syntaxSugar/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

export default class OrderFormSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    purOrderRef: FieldBuilder.number().build(),
    agent: FieldBuilder.string("Service Agent").build(),
    customerName: FieldBuilder.string("Customer Name").build(),
    description: FieldBuilder.string("Description").build(),
    jobDepot: FieldBuilder.string("Job Depot").build(),
    orderDepot: FieldBuilder.string("Order Depot").build(),
    orderDepotId: FieldBuilder.number("Order Depot").mandatory(),
    orderStatus: FieldBuilder.string("Order Status").build(),
    regNo: FieldBuilder.string("Reg No").build(),
    vehicleId: FieldBuilder.number("vehicleId").build(),
    startDate: FieldBuilder.string("Start Date").date().build(),
    startRef: FieldBuilder.string("Start Ref").build(),
    agentOriginal: FieldBuilder.string("Original Service Agent").build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}
