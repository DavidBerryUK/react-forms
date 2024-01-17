import FieldBuilder from "../forms/syntaxSugar/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

export default class MealFormSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    forename: FieldBuilder.caption("Forename").mandatory().shouldHaveLengthMax(200).build(),
    surname: FieldBuilder.caption("Surname").mandatory().shouldHaveLengthMax(200).build(),
    dietryRequirementsFlag: FieldBuilder.boolean("Any special dietary requirements?").build(),
    dietryRequirementsNotes: FieldBuilder.caption("Surname").build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
    //
    // Conditional Validation
    //
    this.fields.dietryRequirementsNotes.when(this.fields.dietryRequirementsFlag.state().ifIsTrue()).shouldHaveLengthBetween(10, 1000).mandatory();
  }
}
