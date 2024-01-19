import FieldBuilder from "../../syntaxSugar/FieldBuilder";
import FormSchemaBase from "../../models/FormSchemaBase";
import IFormSchema from "../../interfaces/IFormSchema";
import FormInstance from "../../models/FormInstance";

describe("FormInstanceSetAndGet.spec", () => {
  test("set and get field values one by one", () => {
    //
    // arrange
    //
    var person = new FormInstance(new PersonSchema());
    const { forename, surname, age, dob, hasDrivingLicence } = person.fieldSchema.fields;

    const testDOB = new Date(2000, 5, 19);

    //
    // ACT
    //
    person.setValue(forename, "Derrick");
    person.setValue(surname, "Keen");
    person.setValue(age, 25);
    person.setValue(dob, testDOB);
    person.setValue(hasDrivingLicence, true);

    var forenameValue = person.getValue(forename);
    var surnameValue = person.getValue(surname);
    var ageValue = person.getValueAsNumber(age);
    var dobValue = person.getValueAsDate(dob);
    var hasDrivingLicenceValue = person.getValueAsBoolean(hasDrivingLicence);

    //
    // ASSERT
    //
    expect(forenameValue).toBe("Derrick");
    expect(surnameValue).toBe("Keen");
    expect(ageValue).toBe(25);
    expect(dobValue).toBe(testDOB);
    expect(hasDrivingLicenceValue).toBe(true);
  });
});

export default class PersonSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    forename: FieldBuilder.string().build(),
    surname: FieldBuilder.string().build(),
    age: FieldBuilder.number().build(),
    dob: FieldBuilder.date().build(),
    hasDrivingLicence: FieldBuilder.date().build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
  }
}
