import { enumFieldType } from "../../enums/EnumFieldType";
import Condition from "../../models/Condition";
import FormSchemaBase from "../../models/FormSchemaBase";
import IFormSchema from "../../interfaces/IFormSchema";
import RuleDecimal from "../../validationRules/simple/RuleDecimal";
import RuleEquals from "../../validationRules/simple/RuleEquals";
import RuleGroup from "../../models/RuleGroup";
import RuleInteger from "../../validationRules/simple/RuleInteger";
import RuleMandatory from "../../validationRules/simple/RuleMandatory";
import RuleMaxLength from "../../validationRules/simple/RuleMaxLength";
import RuleMinLength from "../../validationRules/simple/RuleMinLength";
import SchemaField from "../../models/SchemaField";

//
// Define fields on the form.
// name     = same name as the field on the API Model
// caption  = name used on UI Captions and validation messages
//
class Fields {
	dataType = SchemaField.create('dataType', 'Data Type',enumFieldType.string);
	value = SchemaField.create('value', 'Data Value',enumFieldType.string);
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
		const isDataTypeString = Condition.create(this.fields.dataType, new RuleEquals('string', true));
		const isDataTypeInteger = Condition.create(this.fields.dataType, new RuleEquals('integer', true));
		const isDataTypeDecimal = Condition.create(this.fields.dataType, new RuleEquals('decimal', true));

		// create rules with above conditions
		//  and apply to value field
		this.fields.value.clearRules();
		this.fields.value.appendRules(RuleGroup.createRulesAndCondition([new RuleMandatory(), new RuleMinLength(20), new RuleMaxLength(50)], isDataTypeString));
		this.fields.value.appendRules(RuleGroup.createRulesAndCondition([new RuleMandatory(), new RuleInteger()], isDataTypeInteger));
		this.fields.value.appendRules(RuleGroup.createRulesAndCondition([new RuleMandatory(), new RuleDecimal()], isDataTypeDecimal));
	}
}
