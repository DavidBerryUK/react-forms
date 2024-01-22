import FieldBuilder from "../forms/syntaxSugar/fieldBuilders/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/form/IFormSchema";

export default class MealFormSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    forename: FieldBuilder.string("Forename").mandatory().maxLength(200).build(),
    surname: FieldBuilder.string("Surname").mandatory().maxLength(200).build(),
    dietryRequirementsFlag: FieldBuilder.boolean("Any special dietary requirements?").build(),
    dietryRequirementsNotes: FieldBuilder.string("Dietry Notes").build(),
    option: FieldBuilder.number().valueBetween(1, 4).build(),
    option1Text: FieldBuilder.string().build(),
    option2Text: FieldBuilder.string().build(),
    option3Text: FieldBuilder.string().build(),
    option4Text: FieldBuilder.string().build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
    //
    // Conditional Validation
    //
    this.fields.dietryRequirementsNotes.when(this.fields.dietryRequirementsFlag.state().true()).lengthBetween(10, 1000).mandatory();
    //
    // Option text cross validation
    //
    this.fields.option1Text.when(this.fields.option.state().equals(1)).mandatory().maxLength(500);
    this.fields.option2Text.when(this.fields.option.state().equals(2)).mandatory().maxLength(500);
    this.fields.option3Text.when(this.fields.option.state().equals(3)).mandatory().maxLength(500);
    this.fields.option4Text.when(this.fields.option.state().equals(4)).mandatory().maxLength(500);
  }
}
