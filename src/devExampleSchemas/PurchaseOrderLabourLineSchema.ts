import FieldBuilder from "../forms/syntaxSugar/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

export default class PurchaseOrderLabourLineSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    purOrderRef: FieldBuilder.number("Pur Order Ref").build(),
    description: FieldBuilder.caption("Description").build(),
    finDesignation: FieldBuilder.caption("Fin Designation").build(),
    PartsCost: FieldBuilder.number("Part Costs").build(),
    labourCosts: FieldBuilder.number("Labour Costs").build(),
    Total: FieldBuilder.number("Total"),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}
