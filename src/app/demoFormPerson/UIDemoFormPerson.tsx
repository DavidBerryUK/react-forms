import { useState } from "react";
import FieldBuilder from "../../forms/syntaxSugar/fieldBuilders/FieldBuilder";
import FormInstance from "../../forms/models/FormInstance";
import FormSchemaBase from "../../forms/models/FormSchemaBase";
import IFormInstance from "../../forms/interfaces/form/IFormInstance";
import IFormSchema from "../../forms/interfaces/form/IFormSchema";
import UIFormString from "../../formUI/inputsForms/UIFormString";

const UIDemoFormPerson = () => {
  const [form, setForm] = useState(new FormInstance(new PersonSchema()));

  const handleUpdateEvent = (form: IFormInstance<PersonSchema>) => {
    setForm(form);
  };

  const handleValidationEvent = () => {
    setForm(form.validateAll());
  };

  const { forename, surname, homePhoneNo, mobileNo } = form.fieldSchema.fields;

  return (
    <div>
      <UIFormString form={form} field={forename} onUpdate={handleUpdateEvent} />
      <UIFormString form={form} field={surname} onUpdate={handleUpdateEvent} />
      <UIFormString form={form} field={homePhoneNo} onUpdate={handleUpdateEvent} />
      <UIFormString form={form} field={mobileNo} onUpdate={handleUpdateEvent} />
      <button onClick={handleValidationEvent}>validate</button>
    </div>
  );
};

export default UIDemoFormPerson;
//
// Define Form Schema
//
class PersonSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    forename: FieldBuilder.string("Forename").mandatory().shouldHaveLengthMax(50).build(),
    surname: FieldBuilder.string("Surname").mandatory().shouldHaveLengthMax(50).build(),
    homePhoneNo: FieldBuilder.string("Home Phone No").shouldHaveLengthMax(20).build(),
    mobileNo: FieldBuilder.string("Mobile Number").shouldHaveLengthMax(20).build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
    //
    // Cross Validation
    //
    const { homePhoneNo, mobileNo } = this.fields;
    homePhoneNo.when(mobileNo.state().ifIsPopulated()).shouldBeEmpty("must be blank when Mobile Number is entered");
    mobileNo.when(homePhoneNo.state().ifIsPopulated()).shouldBeEmpty("must be blank when Home Phone No is entered");
  }
}
