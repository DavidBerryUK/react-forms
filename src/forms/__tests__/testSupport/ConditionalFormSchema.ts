import AssertIsEqualTo from "../../rules/AssertIsEqualTo";
import AssertIsMandatory from "../../rules/AssertIsMandatory";
import AssertLengthMax from "../../rules/AssertLengthMax";
import AssertLengthMin from "../../rules/AssertLengthMin";
import AssertValueIsDecimal from "../../rules/AssertValueIsDecimal";
import AssertValueIsInteger from "../../rules/AssertValueIsInteger";
import Condition from "../../models/Condition";
import enumFieldType from "../../enums/EnumFieldType";
import FormSchemaBase from "../../models/FormSchemaBase";
import IFormSchema from "../../interfaces/IFormSchema";
import RuleGroup from "../../models/RuleGroup";
import SchemaField from "../../models/SchemaField";

//
// Define fields on the form.
// name     = same name as the field on the API Model
// caption  = name used on UI Captions and validation messages
//
class Fields {
  dataType = SchemaField.create("dataType", "Data Type", enumFieldType.string);
  value = SchemaField.create("value", "Data Value", enumFieldType.string);
}

export default class ConditionalFormSchema extends FormSchemaBase implements IFormSchema {
  fields = new Fields();

  constructor() {
    super();
    this.createConditionalSchemaFieldValue();
    this.registerFieldsWithSchema();
  }

  private registerFieldsWithSchema() {
    this.fieldCollection.addOrUpdateRange([this.fields.dataType, this.fields.value]);
  }

  private createConditionalSchemaFieldValue() {
    //
    // define conditions which must be met before rules will be evaluated
    //
    const isDataTypeString = Condition.create(this.fields.dataType, new AssertIsEqualTo("string", true));
    const isDataTypeInteger = Condition.create(this.fields.dataType, new AssertIsEqualTo("integer", true));
    const isDataTypeDecimal = Condition.create(this.fields.dataType, new AssertIsEqualTo("decimal", true));

    // create rules with above conditions
    //  and apply to value field
    this.fields.value.clearRules();
    this.fields.value.appendRules(
      RuleGroup.createRulesAndCondition([new AssertIsMandatory(), new AssertLengthMin(20), new AssertLengthMax(50)], isDataTypeString)
    );
    this.fields.value.appendRules(RuleGroup.createRulesAndCondition([new AssertIsMandatory(), new AssertValueIsInteger()], isDataTypeInteger));
    this.fields.value.appendRules(RuleGroup.createRulesAndCondition([new AssertIsMandatory(), new AssertValueIsDecimal()], isDataTypeDecimal));
  }
}
