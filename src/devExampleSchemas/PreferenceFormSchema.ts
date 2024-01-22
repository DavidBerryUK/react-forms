import AssertIsEqualTo from "../forms/assertions/AssertIsEqualTo";
import AssertIsMandatory from "../forms/assertions/AssertIsMandatory";
import AssertLengthMax from "../forms/assertions/AssertLengthMax";
import AssertValueIsDecimal from "../forms/assertions/AssertValueIsDecimal";
import AssertValueIsInteger from "../forms/assertions/AssertValueIsInteger";
import AssertValueIsTrue from "../forms/assertions/AssertValueIsTrue";
import Condition from "../forms/models/Condition";
import FieldBuilder from "../forms/syntaxSugar/fieldBuilders/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/form/IFormSchema";
import AssertGroup from "../forms/assert/AssertGroup";

//
// Define fields on the form.
// name     = same name as the field on the API Model
// caption  = name used on UI Captions and validation messages
//

export default class PreferenceFormSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    isActive: FieldBuilder.boolean("Is Active").build(),
    clrType: FieldBuilder.string("Data Type").build(),
    value: FieldBuilder.string("Value").build(),
  };

  constructor() {
    super();
    this.addConditionalValidationToValueField();
    this.parseFields(this.fields);
  }

  private addConditionalValidationToValueField() {
    const valueField = this.fields.value;

    // define conditions which must be met before assertions will be evaluated
    // (clrType contains the data type of the value field)
    const isDataTypeString = Condition.create(this.fields.clrType, new AssertIsEqualTo("string", true));
    const isDataTypeInteger = Condition.create(this.fields.clrType, new AssertIsEqualTo("integer", true));
    const isDataTypeDecimal = Condition.create(this.fields.clrType, new AssertIsEqualTo("decimal", true));

    const isActive = Condition.create(this.fields.isActive, new AssertValueIsTrue());

    // create assertions with above conditions
    //  and apply to value field
    valueField.clearAssertions();
    valueField.appendAssertionGroup(AssertGroup.createAssertionAndCondition(new AssertLengthMax(200), isDataTypeString));
    valueField.appendAssertionGroup(AssertGroup.createAssertionAndCondition(new AssertValueIsInteger(), isDataTypeInteger));
    valueField.appendAssertionGroup(AssertGroup.createAssertionAndCondition(new AssertValueIsDecimal(), isDataTypeDecimal));

    //
    // when active and field is a string or a number then field is mandatory
    //
    valueField.appendAssertionGroup(
      AssertGroup.createAssertionAndConditions(new AssertIsMandatory("is mandatory when preference is Active"), [isActive, isDataTypeString])
    );
    valueField.appendAssertionGroup(
      AssertGroup.createAssertionAndConditions(new AssertIsMandatory("is mandatory when preference is Active"), [isActive, isDataTypeInteger])
    );
    valueField.appendAssertionGroup(
      AssertGroup.createAssertionAndConditions(new AssertIsMandatory("is mandatory when preference is Active"), [isActive, isDataTypeDecimal])
    );
  }
}
