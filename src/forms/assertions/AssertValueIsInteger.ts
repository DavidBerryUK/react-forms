import IFormField from "../interfaces/form/IFormField";
import IFormInstance from "../interfaces/form/IFormInstance";
import IFormSchema from "../interfaces/form/IFormSchema";
import IAssert from "../interfaces/assertions/IAssert";
import IAssertResponse from "../interfaces/assertions/IAssertResponse";
import AssertBase from "./base/AssertBase";

export default class AssertValueIsInteger extends AssertBase implements IAssert {
  isValid(form: IFormInstance<IFormSchema>, field: IFormField, value: string): IAssertResponse {
    if (this.isValueEmpty(value)) {
      return this.pass();
    }

    const number = Number(value);
    if (!value || value.trim().length === 0 || isNaN(number) || !Number.isInteger(number)) {
      return this.fail("must be a whole number");
    }

    return this.pass();
  }
}
