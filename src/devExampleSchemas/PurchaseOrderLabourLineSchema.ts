import FieldBuilder from "../forms/syntaxSugar/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/form/IFormSchema";

export default class PurchaseOrderLabourLineSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    purOrderRef: FieldBuilder.number("Pur Order Ref").build(),
    description: FieldBuilder.string("Description").build(),
    finDesignation: FieldBuilder.string("Fin Designation").build(),
    PartsCost: FieldBuilder.number("Part Costs").build(),
    labourCosts: FieldBuilder.number("Labour Costs").build(),
    Total: FieldBuilder.number("Total"),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}
