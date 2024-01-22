import IFormField from "../interfaces/form/IFormField";
import IFormInstance from "../interfaces/form/IFormInstance";
import IFormSchema from "../interfaces/form/IFormSchema";
import IAssert from "../interfaces/assertions/IAssert";
import IAssertResponse from "../interfaces/assertions/IAssertResponse";
import AssertBase from "./base/AssertBase";
import StringUtility from "../../formUI/utility/StringUtility";

export default class AssertValueIsFalse extends AssertBase implements IAssert {
  isValid(form: IFormInstance<IFormSchema> | null, field: IFormField | null, value: string): IAssertResponse {
    if (this.isValueEmpty(value)) {
      return this.pass();
    }

    if (StringUtility.stringToIsFalse(value)) {
      return this.pass();
    }

    return this.fail(`must be false`);
  }
}
