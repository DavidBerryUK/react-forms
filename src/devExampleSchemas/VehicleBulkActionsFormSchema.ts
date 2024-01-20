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
    this.fields.customerId.when(this.fields.actionChangeCustomer.state().ifIsTrue()).mandatory();
    this.fields.depotId.when(this.fields.actionChangeCustomer.state().ifIsTrue()).mandatory();
  }

  // add [When] to field
  // add [state()] to field

  // add evaluatesTo() to return a condition, first for single rule, then for multiple rules

  // add [useValidation]
  // extract chainable validation to base class so can be inherited

  // private addCustomerConditionalFields() {
  //   //
  //   // condition to see if Customer Action is being used
  //   //
  //   const isActionCustomerChange = Condition.create(this.fields.actionChangeCustomer, new RuleIsTrue());

  //   //
  //   // if the action is being used, then both CustomerId and DepotId are mandatory
  //   //
  //   const ruleGroupCustomerMandatory = RuleGroup.createRuleAndCondition(new RuleAssertIsMandatory(), isActionCustomerChange);
  //   const ruleGroupDepotMandatory = RuleGroup.createRuleAndCondition(new RuleAssertIsMandatory(), isActionCustomerChange);
  //   this.fields.customerId.appendRules(ruleGroupCustomerMandatory);
  //   this.fields.depotId.appendRules(ruleGroupDepotMandatory);
  // }
}
