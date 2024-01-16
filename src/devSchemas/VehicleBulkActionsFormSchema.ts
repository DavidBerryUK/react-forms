import Builder from "../forms/models/Builder";
import Condition from "../forms/models/Condition";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";
import RuleGroup from "../forms/models/RuleGroup";
import RuleIsTrue from "../forms/validationRules/simple/RuleIsTrue";
import RuleMandatory from "../forms/validationRules/simple/RuleMandatory";

//
// Define fields on the form.
// name     = same name as the field on the API Model
// caption  = name used on UI Captions and validation messages
//
class Fields {
  actionChangeCustomer = Builder.boolean("Change Customer").toField();
  actionChangeRental = Builder.boolean("Change Rental").toField();
  customerId = Builder.number("Customer").toField();
  depotId = Builder.caption("Depot").toField();
  IsCvRental = Builder.boolean("Is CV Rental").toField();
}

export default class VehicleBulkActionsFormSchema extends FormSchemaBase implements IFormSchema {
  fields = new Fields();

  constructor() {
    super();
    this.parse(this.fields);
    this.addCustomerConditionalFields();
  }

  private addCustomerConditionalFields() {
    //
    // condition to see if Customer Action is being used
    //
    const isActionCustomerChange = Condition.create(this.fields.actionChangeCustomer, new RuleIsTrue());

    //
    // if the action is being used, then both CustomerId and DepotId are mandatory
    //
    const ruleGroupCustomerMandatory = RuleGroup.createRuleAndCondition(new RuleMandatory(), isActionCustomerChange);
    const ruleGroupDepotMandatory = RuleGroup.createRuleAndCondition(new RuleMandatory(), isActionCustomerChange);
    this.fields.customerId.appendRules(ruleGroupCustomerMandatory);
    this.fields.depotId.appendRules(ruleGroupDepotMandatory);
  }
}
