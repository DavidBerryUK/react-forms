import { QueryBuilderTypes } from "../types/BuilderTypes";
import AssertGroup from "../assert/AssertGroup";
import ConditionalValidationBuilderString from "../syntaxSugar/conditionalValidationBuilders/ConditionalValidationBuilderString";
import EnumFieldType from "../enums/EnumFieldType";
import IAssert from "../interfaces/assertions/IAssert";
import IAssertGroup from "../interfaces/assertions/IAssertGroup";
import ICondition from "../interfaces/condition/ICondition";
import ISchemaField from "../interfaces/schemaField/ISchemaField";
import QueryBuilderString from "../syntaxSugar/queryBuilders/QueryBuilderString";
import SchemaFieldBase from "./SchemaFieldBase";
//
// define a field in the form dataset
//
export default class SchemaFieldString extends SchemaFieldBase implements ISchemaField {
  readonly type: string = "SchemaFieldString";
  private static readonly fieldType = EnumFieldType.string;

  //
  // convenience creators for different combinations
  // of fields with single or multiple validation assertions
  // in combination with none, single or multiple conditions
  //
  public static create(id: string, caption: string): SchemaFieldString {
    return new SchemaFieldString(id, caption, SchemaFieldString.fieldType);
  }

  public static createWithAssertion(id: string, caption: string, assertion: IAssert): SchemaFieldString {
    return new SchemaFieldString(id, caption, SchemaFieldString.fieldType, AssertGroup.create(assertion));
  }

  public static createWithAssertionGroup(id: string, caption: string, assertionGroup: IAssertGroup): SchemaFieldString {
    return new SchemaFieldString(id, caption, SchemaFieldString.fieldType, assertionGroup);
  }

  public static createWithAssertionAndCondition(id: string, caption: string, assertion: IAssert, condition: ICondition): SchemaFieldString {
    return new SchemaFieldString(id, caption, SchemaFieldString.fieldType, AssertGroup.createAssertionAndCondition(assertion, condition));
  }

  public static createWithAssertionAndConditions(id: string, caption: string, assertion: IAssert, condition: Array<ICondition>): SchemaFieldString {
    return new SchemaFieldString(id, caption, SchemaFieldString.fieldType, AssertGroup.createAssertionAndConditions(assertion, condition));
  }

  public static createWithAssertionsAndCondition(id: string, caption: string, assertions: Array<IAssert>, condition: ICondition): SchemaFieldString {
    return new SchemaFieldString(id, caption, SchemaFieldString.fieldType, AssertGroup.createAssertionsAndCondition(assertions, condition));
  }

  public static createWithAssertionsAndConditions(
    id: string,
    caption: string,
    assertions: Array<IAssert>,
    conditions: Array<ICondition>
  ): SchemaFieldString {
    return new SchemaFieldString(id, caption, SchemaFieldString.fieldType, AssertGroup.createAssertionsAndConditions(assertions, conditions));
  }

  public static createWithAssertions(id: string, caption: string, assertions: Array<IAssert>): SchemaFieldString {
    if (assertions.length === 0) {
      return new SchemaFieldString(id, caption, SchemaFieldString.fieldType);
    }
    return new SchemaFieldString(id, caption, SchemaFieldString.fieldType, AssertGroup.createAssertions(assertions));
  }

  public static createWithAssertionGroups(id: string, caption: string, assertionGroups: Array<IAssertGroup>) {
    const field = new SchemaFieldString(id, caption, SchemaFieldString.fieldType);
    assertionGroups.forEach((group) => {
      field.appendAssertionGroup(group);
    });
    return field;
  }

  when(state: QueryBuilderTypes): ConditionalValidationBuilderString {
    return new ConditionalValidationBuilderString(this, state);
  }

  state(): QueryBuilderString {
    return new QueryBuilderString(this);
  }
}
