import { useState } from "react";
import FieldBuilder from "../../forms/syntaxSugar/fieldBuilders/FieldBuilder";
import FormInstance from "../../forms/models/FormInstance";
import FormSchemaBase from "../../forms/models/FormSchemaBase";
import IFormInstance from "../../forms/interfaces/form/IFormInstance";
import IFormSchema from "../../forms/interfaces/form/IFormSchema";
import UIFormString from "../../formUI/inputsForms/UIFormString";

const UIDemoFormScoring = () => {
  const [form, setForm] = useState(new FormInstance(new PersonSchema()));

  const handleUpdateEvent = (form: IFormInstance<PersonSchema>) => {
    setForm(form);
  };

  const handleValidationEvent = () => {
    setForm(form.validateAll());
  };

  const { score, notes1, notes2, notes3, notes4 } = form.fieldSchema.fields;

  return (
    <div>
      <UIFormString form={form} field={score} onUpdate={handleUpdateEvent} />
      <UIFormString form={form} field={notes1} onUpdate={handleUpdateEvent} />
      <UIFormString form={form} field={notes2} onUpdate={handleUpdateEvent} />
      <UIFormString form={form} field={notes3} onUpdate={handleUpdateEvent} />
      <UIFormString form={form} field={notes4} onUpdate={handleUpdateEvent} />
      <button onClick={handleValidationEvent}>validate</button>
    </div>
  );
};

export default UIDemoFormScoring;
//
// Define Form Schema
//
class PersonSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    score: FieldBuilder.number("Score").mandatory().between(1, 4).build(),
    notes1: FieldBuilder.string("Notes 1").maxLength(20).build(),
    notes2: FieldBuilder.string("Notes 2").maxLength(20).build(),
    notes3: FieldBuilder.string("Notes 3").maxLength(20).build(),
    notes4: FieldBuilder.string("Notes 4").maxLength(20).build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
    //
    // Cross Validation
    //
    const { score, notes1, notes2, notes3, notes4 } = this.fields;
    notes1.when(score.state().equals(1)).mandatory("Notes must be entered when score is 1").minLength(10);
    notes2.when(score.state().equals(2)).mandatory("Notes must be entered when score is 2").minLength(20);
    notes3.when(score.state().equals(3)).mandatory("Notes must be entered when score is 3").minLength(30);
    notes4.when(score.state().equals(4)).mandatory("Notes must be entered when score is 4").minLength(40);
  }
}
