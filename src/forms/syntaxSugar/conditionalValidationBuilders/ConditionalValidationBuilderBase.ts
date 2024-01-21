import IRule from "../../interfaces/rules/IRule";
import IRuleGroup from "../../interfaces/rules/IRuleGroup";
import ISchemaField from "../../interfaces/schemaField/ISchemaField";
import QueryBuilderBoolean from "../queryBuilders/QueryBuilderBoolean";
import QueryBuilderDate from "../queryBuilders/QueryBuilderDate";
import QueryBuilderNumber from "../queryBuilders/QueryBuilderNumber";
import QueryBuilderString from "../queryBuilders/QueryBuilderString";
import RuleGroup from "../../models/RuleGroup";

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
  private _ruleGroup: IRuleGroup | undefined;

  constructor(schemaField: ISchemaField, queryBuilder: QueryBuilderString | QueryBuilderBoolean | QueryBuilderDate | QueryBuilderNumber) {
    this._schemaField = schemaField;
    this._queryBuilder = queryBuilder;
    this._ruleGroup = undefined;
  }

  protected _newAssertionCallback(assertion: IRule): void {
    //
    // create new rule group if required
    //
    if (this._ruleGroup === undefined) {
      this._ruleGroup = RuleGroup.createRuleAndConditions(assertion, this._queryBuilder.conditions);
      this._ruleGroup.schemaField = this._schemaField;
      this._schemaField.appendRules(this._ruleGroup);

      // console.log(this._ruleGroup);
      // console.log(this._schemaField);

      return;
    }

    //
    // or just add to the existing rule group
    //
    this._ruleGroup.addRule(assertion);
  }

  /****************************/
  /* Add Rules                */
  /****************************/
  addAssert(rule: IRule): T {
    this._newAssertionCallback(rule);
    return this as any as T;
  }

  addAssertions(rules: Array<IRule>): T {
    rules.forEach((rule) => this._newAssertionCallback(rule));
    return this as any as T;
  }
}
