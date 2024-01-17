import FieldBuilder from "../forms/syntaxSugar/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

export default class PurchaseOrderLabourLineSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    purOrderRef: FieldBuilder.number("Pur Order Ref").toField(),
    description: FieldBuilder.caption("Description").toField(),
    finDesignation: FieldBuilder.caption("Fin Designation").toField(),
    PartsCost: FieldBuilder.number("Part Costs").toField(),
    labourCosts: FieldBuilder.number("Labour Costs").toField(),
    Total: FieldBuilder.number("Total"),
  };

  constructor() {
    super();
    this.parse(this.fields);
  }
}
