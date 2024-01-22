import IFormField from "../interfaces/form/IFormField";
import IFormInstance from "../interfaces/form/IFormInstance";
import IFormSchema from "../interfaces/form/IFormSchema";
import IAssert from "../interfaces/assertions/IAssert";
import IAssertResponse from "../interfaces/assertions/IAssertResponse";
import AssertBase from "./base/AssertBase";

//
// similar to Mandatory, but is used when creating conditional validation.
//   the assertion returns true is the field is populated
//
export default class AssertIsPopulated extends AssertBase implements IAssert {
  isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IAssertResponse {
    if (this.isValueEmpty(value)) {
      return this.fail(`must be populated`);
    }
    return this.pass();
  }
}
