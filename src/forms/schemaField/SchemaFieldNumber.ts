import { QueryBuilderTypes } from "../types/BuilderTypes";
import AssertGroup from "../assert/AssertGroup";
import ConditionalValidationBuilderNumber from "../syntaxSugar/conditionalValidationBuilders/ConditionalValidationBuilderNumber";
import EnumFieldType from "../enums/EnumFieldType";
import IAssert from "../interfaces/assertions/IAssert";
import IAssertGroup from "../interfaces/assertions/IAssertGroup";
import ICondition from "../interfaces/condition/ICondition";
import ISchemaField from "../interfaces/schemaField/ISchemaField";
import QueryBuilderNumber from "../syntaxSugar/queryBuilders/QueryBuilderNumber";
import SchemaFieldBase from "./SchemaFieldBase";
//
// define a field in the form dataset
//
export default class SchemaFieldNumber extends SchemaFieldBase implements ISchemaField {
  readonly type: string = "SchemaFieldNumber";
  private static readonly fieldType = EnumFieldType.number;

  //
  // convenience creators for different combinations
  // of fields with single or multiple validation assertions
  // in combination with none, single or multiple conditions
  //
  public static create(id: string, caption: string): SchemaFieldNumber {
    return new SchemaFieldNumber(id, caption, SchemaFieldNumber.fieldType);
  }

  public static createWithAssertion(id: string, caption: string, assertion: IAssert): SchemaFieldNumber {
    return new SchemaFieldNumber(id, caption, SchemaFieldNumber.fieldType, AssertGroup.create(assertion));
  }

  public static createWithAssertionGroup(id: string, caption: string, assertionGroup: IAssertGroup): SchemaFieldNumber {
    return new SchemaFieldNumber(id, caption, SchemaFieldNumber.fieldType, assertionGroup);
  }

  public static createWithAssertionAndCondition(id: string, caption: string, assertion: IAssert, condition: ICondition): SchemaFieldNumber {
    return new SchemaFieldNumber(id, caption, SchemaFieldNumber.fieldType, AssertGroup.createAssertionAndCondition(assertion, condition));
  }

  public static createWithAssertionAndConditions(id: string, caption: string, assertion: IAssert, condition: Array<ICondition>): SchemaFieldNumber {
    return new SchemaFieldNumber(id, caption, SchemaFieldNumber.fieldType, AssertGroup.createAssertionAndConditions(assertion, condition));
  }

  public static createWithAssertionsAndCondition(id: string, caption: string, assertions: Array<IAssert>, condition: ICondition): SchemaFieldNumber {
    return new SchemaFieldNumber(id, caption, SchemaFieldNumber.fieldType, AssertGroup.createAssertionsAndCondition(assertions, condition));
  }

  public static createWithAssertionsAndConditions(
    id: string,
    caption: string,
    assertions: Array<IAssert>,
    conditions: Array<ICondition>
  ): SchemaFieldNumber {
    return new SchemaFieldNumber(id, caption, SchemaFieldNumber.fieldType, AssertGroup.createAssertionsAndConditions(assertions, conditions));
  }

  public static createWithAssertions(id: string, caption: string, assertions: Array<IAssert>): SchemaFieldNumber {
    if (assertions.length === 0) {
      return new SchemaFieldNumber(id, caption, SchemaFieldNumber.fieldType);
    }
    return new SchemaFieldNumber(id, caption, SchemaFieldNumber.fieldType, AssertGroup.createAssertions(assertions));
  }

  public static createWithAssertionGroups(id: string, caption: string, assertionGroups: Array<IAssertGroup>) {
    const field = new SchemaFieldNumber(id, caption, SchemaFieldNumber.fieldType);
    assertionGroups.forEach((group) => {
      field.appendAssertionGroup(group);
    });
    return field;
  }

  when(state: QueryBuilderTypes): ConditionalValidationBuilderNumber {
    return new ConditionalValidationBuilderNumber(this, state);
  }

  state(): QueryBuilderNumber {
    return new QueryBuilderNumber(this);
  }
}
