import FieldBuilder from "../forms/syntaxSugar/fieldBuilders/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/form/IFormSchema";

export default class MealFormSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    forename: FieldBuilder.string("Forename").mandatory().shouldHaveLengthMax(200).build(),
    surname: FieldBuilder.string("Surname").mandatory().shouldHaveLengthMax(200).build(),
    dietryRequirementsFlag: FieldBuilder.boolean("Any special dietary requirements?").build(),
    dietryRequirementsNotes: FieldBuilder.string("Dietry Notes").build(),
    option: FieldBuilder.number().shouldHaveValueBetween(1, 4).build(),
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
    this.fields.dietryRequirementsNotes.when(this.fields.dietryRequirementsFlag.state().ifIsTrue()).shouldHaveLengthBetween(10, 1000).mandatory();
    //
    // Option text cross validation
    //
    this.fields.option1Text.when(this.fields.option.state().ifIsEqual(1)).mandatory().shouldHaveLengthMax(500);
    this.fields.option2Text.when(this.fields.option.state().ifIsEqual(2)).mandatory().shouldHaveLengthMax(500);
    this.fields.option3Text.when(this.fields.option.state().ifIsEqual(3)).mandatory().shouldHaveLengthMax(500);
    this.fields.option4Text.when(this.fields.option.state().ifIsEqual(4)).mandatory().shouldHaveLengthMax(500);
  }
}
