import Builder from "../forms/models/Builder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

class Fields {
  purOrderRef = Builder.number("Pur Order Ref").toField();
  description = Builder.caption("Description").toField();
  finDesignation = Builder.caption("Fin Designation").toField();
  PartsCost = Builder.number("Part Costs").toField();
  labourCosts = Builder.number("Labour Costs").toField();
  Total = Builder.number("Total");
}

export default class PurchaseOrderLabourLineSchema extends FormSchemaBase implements IFormSchema {
  fields = new Fields();

  constructor() {
    super();
    this.parse(this.fields);
  }
}
