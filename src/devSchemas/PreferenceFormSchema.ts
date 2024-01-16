import Builder from "../forms/models/Builder";
import Condition from "../forms/models/Condition";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";
import RuleDecimal from "../forms/validationRules/simple/RuleDecimal";
import RuleEquals from "../forms/validationRules/simple/RuleEquals";
import RuleGroup from "../forms/models/RuleGroup";
import RuleInteger from "../forms/validationRules/simple/RuleInteger";
import RuleIsTrue from "../forms/validationRules/simple/RuleIsTrue";
import RuleLengthMax from "../forms/validationRules/simple/RuleLengthMax";
import RuleMandatory from "../forms/validationRules/simple/RuleMandatory";

//
// Define fields on the form.
// name     = same name as the field on the API Model
// caption  = name used on UI Captions and validation messages
//
class Fields {
  isActive = Builder.boolean("Is Active").toField();
  clrType = Builder.caption("Data Type").toField();
  value = Builder.caption("Value").toField();
}

export default class PreferenceFormSchema extends FormSchemaBase implements IFormSchema {
  fields = new Fields();

  constructor() {
    super();
    this.addConditionalValidationToValueField();
    this.parse(this.fields);
  }

  private addConditionalValidationToValueField() {
    const valueField = this.fields.value;

    // define conditions which must be met before rules will be evaluated
    // (clrType contains the data type of the value field)
    const isDataTypeString = Condition.create(this.fields.clrType, new RuleEquals("string", true));
    const isDataTypeInteger = Condition.create(this.fields.clrType, new RuleEquals("integer", true));
    const isDataTypeDecimal = Condition.create(this.fields.clrType, new RuleEquals("decimal", true));

    const isActive = Condition.create(this.fields.isActive, new RuleIsTrue());

    // create rules with above conditions
    //  and apply to value field
    valueField.clearRules();
    valueField.appendRules(RuleGroup.createRuleAndCondition(new RuleLengthMax(200), isDataTypeString));
    valueField.appendRules(RuleGroup.createRuleAndCondition(new RuleInteger(), isDataTypeInteger));
    valueField.appendRules(RuleGroup.createRuleAndCondition(new RuleDecimal(), isDataTypeDecimal));

    //
    // when active and field is a string or a number then field is mandatory
    //
    valueField.appendRules(
      RuleGroup.createRuleAndConditions(new RuleMandatory("is mandatory when preference is Active"), [isActive, isDataTypeString])
    );
    valueField.appendRules(
      RuleGroup.createRuleAndConditions(new RuleMandatory("is mandatory when preference is Active"), [isActive, isDataTypeInteger])
    );
    valueField.appendRules(
      RuleGroup.createRuleAndConditions(new RuleMandatory("is mandatory when preference is Active"), [isActive, isDataTypeDecimal])
    );
  }
}
