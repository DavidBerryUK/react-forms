import ICondition from "../interfaces/ICondition";
import IConditions from "../interfaces/IConditions";
import IFormSchema from "../interfaces/IFormSchema";
import FormInstance from "./FormInstance";

//
// class provides option of making rule evaluation for a field
//  dependent upon specific conditions being met.
//
export default class Conditions implements IConditions {
  items: Array<ICondition>;

  constructor(conditions: Array<ICondition>) {
    this.items = conditions;
  }
  count(): number {
    return this.items.length;
  }

  addCondition(condition: ICondition): void {
    this.items.push(condition);
  }

  //
  // determine if conditions specified pass
  //
  //   rowId is provided in realtime, if the form is made up of rows then
  //     the rowId will be provided
  //
  doConditionsPass(form: FormInstance<IFormSchema>, rowId: string | number | null | undefined, transactionId: string): boolean {
    for (let index = 0; index < this.items.length; index++) {
      const condition = this.items[index];
      if (condition.doesConditionPass(form, rowId, transactionId) === false) {
        return false;
      }
    }
    return true;
  }

  clone(): IConditions {
    return new Conditions(this.items);
  }
}
