import AssertGroup from "../../assert/AssertGroup";
import IAssert from "../../interfaces/assertions/IAssert";
import IAssertGroup from "../../interfaces/assertions/IAssertGroup";
import ISchemaField from "../../interfaces/schemaField/ISchemaField";
import QueryBuilderBoolean from "../queryBuilders/QueryBuilderBoolean";
import QueryBuilderDate from "../queryBuilders/QueryBuilderDate";
import QueryBuilderNumber from "../queryBuilders/QueryBuilderNumber";
import QueryBuilderString from "../queryBuilders/QueryBuilderString";

//
// used to build up conditional validation in the following format
// this.fields.dietryRequirementsNotes.when(this.fields.dietryRequirementsFlag.state().ifIsTrue()).shouldHaveLengthBetween(10, 1000).mandatory();
//                                                                                                |<------------------------------------------->|
// an instance of [ConditionalValidationBuilder] is return when the when statement,
//  the schemaField and output from the parameters of the when statement as passed into this
//
//  it is then the resposibility of this class to manipulate the schemafield (dietryRequirementsNotes) to apply
//  the conditional validation
//
export default class ConditionalValidationBuilderBase<T extends ConditionalValidationBuilderBase<T>> {
  private _schemaField: ISchemaField;
  private _queryBuilder: QueryBuilderString | QueryBuilderBoolean | QueryBuilderDate | QueryBuilderNumber;
  private _assertionGroup: IAssertGroup | undefined;

  constructor(schemaField: ISchemaField, queryBuilder: QueryBuilderString | QueryBuilderBoolean | QueryBuilderDate | QueryBuilderNumber) {
    this._schemaField = schemaField;
    this._queryBuilder = queryBuilder;
    this._assertionGroup = undefined;
  }

  protected add(assertion: IAssert): void {
    //
    // create new rule group if required
    //
    if (this._assertionGroup === undefined) {
      this._assertionGroup = AssertGroup.createAssertionAndConditions(assertion, this._queryBuilder.conditions);
      this._assertionGroup.schemaField = this._schemaField;
      this._schemaField.appendAssertionGroup(this._assertionGroup);

      // console.log(this._ruleGroup);
      // console.log(this._schemaField);

      return;
    }

    //
    // or just add to the existing rule group
    //
    this._assertionGroup.addAssertion(assertion);
  }

  /****************************/
  /* Assertions               */
  /****************************/
  addAssert(assertion: IAssert): T {
    this.add(assertion);
    return this as any as T;
  }

  addAssertions(assertions: Array<IAssert>): T {
    assertions.forEach((assertion) => this.add(assertion));
    return this as any as T;
  }
}
