import FieldBuilder from "../forms/syntaxSugar/fieldBuilders/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/form/IFormSchema";

export default class VehicleBulkActionsFormSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    actionChangeCustomer: FieldBuilder.boolean("Change Customer").build(),
    actionChangeRental: FieldBuilder.boolean("Change Rental").build(),
    customerId: FieldBuilder.number("Customer").build(),
    depotId: FieldBuilder.string("Depot").build(),
    IsCvRental: FieldBuilder.boolean("Is CV Rental").build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);

    // this.addCustomerConditionalFields();
    this.fields.customerId.when(this.fields.actionChangeCustomer.state().true()).mandatory();
    this.fields.depotId.when(this.fields.actionChangeCustomer.state().true()).mandatory();
  }
}
