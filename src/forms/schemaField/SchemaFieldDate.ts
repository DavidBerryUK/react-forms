import { QueryBuilderTypes } from "../types/BuilderTypes";
import AssertGroup from "../assert/AssertGroup";
import ConditionalValidationBuilderDate from "../syntaxSugar/conditionalValidationBuilders/ConditionalValidationBuilderDate";
import EnumFieldType from "../enums/EnumFieldType";
import IAssert from "../interfaces/assertions/IAssert";
import IAssertGroup from "../interfaces/assertions/IAssertGroup";
import ICondition from "../interfaces/condition/ICondition";
import ISchemaField from "../interfaces/schemaField/ISchemaField";
import QueryBuilderDate from "../syntaxSugar/queryBuilders/QueryBuilderDate";
import SchemaFieldBase from "./SchemaFieldBase";
//
// define a field in the form dataset
//
export default class SchemaFieldDate extends SchemaFieldBase implements ISchemaField {
  readonly type: string = "SchemaFieldDate";
  private static readonly fieldType = EnumFieldType.date;

  //
  // convenience creators for different combinations
  // of fields with single or multiple validation assertions
  // in combination with none, single or multiple conditions
  //
  public static create(id: string, caption: string, fieldType: EnumFieldType): SchemaFieldDate {
    return new SchemaFieldDate(id, caption, SchemaFieldDate.fieldType);
  }

  public static createWithAssertion(id: string, caption: string, assertion: IAssert): SchemaFieldDate {
    return new SchemaFieldDate(id, caption, SchemaFieldDate.fieldType, AssertGroup.create(assertion));
  }

  public static createWithAssertionGroup(id: string, caption: string, assertionGroup: IAssertGroup): SchemaFieldDate {
    return new SchemaFieldDate(id, caption, SchemaFieldDate.fieldType, assertionGroup);
  }

  public static createWithAssertionAndCondition(id: string, caption: string, assertion: IAssert, condition: ICondition): SchemaFieldDate {
    return new SchemaFieldDate(id, caption, SchemaFieldDate.fieldType, AssertGroup.createAssertionAndCondition(assertion, condition));
  }

  public static createWithAssertionAndConditions(id: string, caption: string, assertion: IAssert, condition: Array<ICondition>): SchemaFieldDate {
    return new SchemaFieldDate(id, caption, SchemaFieldDate.fieldType, AssertGroup.createAssertionAndConditions(assertion, condition));
  }

  public static createWithAssertionsAndCondition(id: string, caption: string, assertions: Array<IAssert>, condition: ICondition): SchemaFieldDate {
    return new SchemaFieldDate(id, caption, SchemaFieldDate.fieldType, AssertGroup.createAssertionsAndCondition(assertions, condition));
  }

  public static createWithAssertionsAndConditions(
    id: string,
    caption: string,
    assertions: Array<IAssert>,
    conditions: Array<ICondition>
  ): SchemaFieldDate {
    return new SchemaFieldDate(id, caption, SchemaFieldDate.fieldType, AssertGroup.createAssertionsAndConditions(assertions, conditions));
  }

  public static createWithAssertions(id: string, caption: string, assertions: Array<IAssert>): SchemaFieldDate {
    if (assertions.length === 0) {
      return new SchemaFieldDate(id, caption, SchemaFieldDate.fieldType);
    }
    return new SchemaFieldDate(id, caption, SchemaFieldDate.fieldType, AssertGroup.createAssertions(assertions));
  }

  public static createWithAssertionGroups(id: string, caption: string, assertionGroups: Array<IAssertGroup>) {
    const field = new SchemaFieldDate(id, caption, SchemaFieldDate.fieldType);
    assertionGroups.forEach((group) => {
      field.appendAssertionGroup(group);
    });
    return field;
  }

  when(state: QueryBuilderTypes): ConditionalValidationBuilderDate {
    return new ConditionalValidationBuilderDate(this, state);
  }

  state(): QueryBuilderDate {
    return new QueryBuilderDate(this);
  }
}
