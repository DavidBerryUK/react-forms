import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";
import FormInstance from "../../models/FormInstance";
import FormSchemaBase from "../../models/FormSchemaBase";
import IFormSchema from "../../interfaces/form/IFormSchema";

//
// note , these tests will not work until the cross validation syntax sugar correctly
// updates related fields
//
describe("Form Instances - Cross Validation", () => {
  test("Cross validation with failure ", () => {
    //
    // arrange
    //
    var form = new FormInstance(new PersonSchema());
    const { mobile: mobile, home: home } = form.fieldSchema.fields;

    //
    // ACT & ASSERT - set both, should fail
    //
    form.setValue(mobile, "0789 192929229");
    form.setValue(home, "0113 393939393");

    const homeRuntime = form.getField(home);
    const mobileRuntime = form.getField(mobile);

    //
    // this shold validate both mobile and home
    //
    mobile.ruleGroups.evaluateRules(form, mobileRuntime!);

    // console.log(homeRuntime);
    // console.log(mobileRuntime);

    expect(homeRuntime!.validation.isValid).toBeFalsy();
    expect(mobileRuntime!.validation.isValid).toBeFalsy();
  });

  test("Cross validation with 'ValidateALL' ", () => {
    //
    // arrange
    //
    var form = new FormInstance(new PersonSchema());
    const { mobile, home } = form.fieldSchema.fields;

    //
    // ACT & ASSERT - set both to empty string, all should be ok
    //
    form.setValue(mobile, "");
    form.setValue(home, "");
    form = form.validateAll();
    expect(form.isValid).toBeTruthy();

    //
    // ACT & ASSERT - set both to mobile only, all should be ok
    //
    form.setValue(mobile, "0789 192929229");
    form.setValue(home, "");
    form = form.validateAll();
    expect(form.isValid).toBeTruthy();

    //
    // ACT & ASSERT - set both to home only, all should be ok
    //
    form.setValue(mobile, "");
    form.setValue(home, "0113 393939393");
    form = form.validateAll();
    expect(form.isValid).toBeTruthy();

    //
    // ACT & ASSERT - set both, should fail
    //
    form.setValue(mobile, "0789 192929229");
    form.setValue(home, "0113 393939393");
    form = form.validateAll();
    expect(form.isValid).toBeFalsy();
  });

  test("Cross validation with update field only ", () => {
    //
    // arrange
    //
    var form = new FormInstance(new PersonSchema());
    const { mobile, home } = form.fieldSchema.fields;

    //
    // ACT & ASSERT - set both to empty string, all should be ok
    //
    form.setValue(mobile, "");
    form.setValue(home, "");

    mobile.ruleGroups.evaluateRules(form, form.getField(mobile)!);

    expect(form.getField(mobile)?.validation.isValid).toBeTruthy();
    expect(form.getField(home)?.validation.isValid).toBeTruthy();

    //
    // ACT & ASSERT - set both to mobile only, all should be ok
    //
    form.setValue(mobile, "0789 192929229");
    form.setValue(home, "");

    mobile.ruleGroups.evaluateRules(form, form.getField(mobile)!);

    expect(form.getField(mobile)?.validation.isValid).toBeTruthy();
    expect(form.getField(home)?.validation.isValid).toBeTruthy();

    //
    // ACT & ASSERT - set both to home only, all should be ok
    //
    form.setValue(mobile, "");
    form.setValue(home, "0113 393939393");

    mobile.ruleGroups.evaluateRules(form, form.getField(mobile)!);
    expect(form.getField(mobile)?.validation.isValid).toBeTruthy();
    expect(form.getField(home)?.validation.isValid).toBeTruthy();

    //
    // ACT & ASSERT - set both, should fail
    //
    form.setValue(mobile, "0789 192929229");
    form.setValue(home, "0113 393939393");
    mobile.ruleGroups.evaluateRules(form, form.getField(mobile)!);

    expect(form.getField(home)?.validation.isValid).toBeFalsy();
    expect(form.getField(mobile)?.validation.isValid).toBeFalsy();
  });
});

class PersonSchema extends FormSchemaBase implements IFormSchema {
  fields = {
    home: FieldBuilder.string("Home Phone No").shouldHaveLengthMax(20).build(),
    mobile: FieldBuilder.string("Mobile Number").shouldHaveLengthMax(20).build(),
  };

  constructor() {
    super();
    this.parseFields(this.fields);
    //
    // Cross Validation
    //
    const { home: home, mobile: mobile } = this.fields;
    home.when(mobile.state().ifIsPopulated()).shouldBeEmpty("must be blank when Mobile Number is entered");
    mobile.when(home.state().ifIsPopulated()).shouldBeEmpty("must be blank when Home Phone No is entered");
  }
}
