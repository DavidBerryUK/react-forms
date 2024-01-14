import { enumFieldType } from "../../enums/EnumFieldType";
import FormSchemaBase from "../../models/FormSchemaBase";
import IFormSchema from "../../interfaces/IFormSchema";
import RuleMandatory from "../../validationRules/simple/RuleMandatory";
import RuleMaxLength from "../../validationRules/simple/RuleMaxLength";
import RuleUkPostCode from "../../validationRules/simple/RuleUkPostCode";
import SchemaField from "../../models/SchemaField";


class Fields {
  company = SchemaField.createWithRule("company", "Company", enumFieldType.string, new RuleMaxLength(100));
  building = SchemaField.createWithRule("building", "Building", enumFieldType.string, new RuleMaxLength(100));
  street = SchemaField.createWithRules("street", "Street", enumFieldType.string, [new RuleMandatory(), new RuleMaxLength(100)]);
  locality = SchemaField.createWithRule("locality", "Locality", enumFieldType.string, new RuleMaxLength(100));
  town = SchemaField.createWithRules("town", "Town", enumFieldType.string, [new RuleMandatory(), new RuleMaxLength(100)]);
  postCode = SchemaField.createWithRules("postCode", "Postcode", enumFieldType.string, [new RuleMandatory(), new RuleUkPostCode()]);
}

export default class AddressSchema extends FormSchemaBase implements IFormSchema {
  fields = new Fields();

  constructor() {
    super();
    this.parse(this.fields);
  }
}
