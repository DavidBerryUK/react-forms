import FieldBuilder from "../forms/syntaxSugar/FieldBuilder";
import FormSchemaBase from "../forms/models/FormSchemaBase";
import IFormSchema from "../forms/interfaces/IFormSchema";

export default class MealFormSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    forename: FieldBuilder.caption("Forename").mandatory().shouldHaveLengthMax(200).toField(),
    surname: FieldBuilder.caption("Surname").mandatory().shouldHaveLengthMax(200).toField(),
    dietryRequirementsFlag: FieldBuilder.boolean("Any special dietary requirements?").toField(),
    dietryRequirementsNotes: FieldBuilder.caption("Surname").toField(),
  };

  constructor() {
    super();
    this.parse(this.fields);

    this.fields.dietryRequirementsNotes.when(this.fields.dietryRequirementsFlag.state().shouldBeTrue()).mandatory().shouldHaveLengthBetween(10, 1000);
  }
}
