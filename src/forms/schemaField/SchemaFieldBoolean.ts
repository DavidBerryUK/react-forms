import { QueryBuilderTypes } from "../types/BuilderTypes";
import AssertGroup from "../assert/AssertGroup";
import ConditionalValidationBuilderBoolean from "../syntaxSugar/conditionalValidationBuilders/ConditionalValidationBuilderBoolean";
import EnumFieldType from "../enums/EnumFieldType";
import IAssert from "../interfaces/assertions/IAssert";
import IAssertGroup from "../interfaces/assertions/IAssertGroup";
import ICondition from "../interfaces/condition/ICondition";
import ISchemaField from "../interfaces/schemaField/ISchemaField";
import QueryBuilderBoolean from "../syntaxSugar/queryBuilders/QueryBuilderBoolean";
import SchemaFieldBase from "./SchemaFieldBase";
//
// define a field in the form dataset
//
export default class SchemaFieldBoolean extends SchemaFieldBase implements ISchemaField {
  readonly type: string = "SchemaFieldBoolean";
  private static readonly fieldType = EnumFieldType.boolean;

  //
  // convenience creators for different combinations
  // of fields with single or multiple validation assertions
  // in combination with none, single or multiple conditions
  //
  public static create(id: string, caption: string): SchemaFieldBoolean {
    return new SchemaFieldBoolean(id, caption, SchemaFieldBoolean.fieldType);
  }

  public static createWithAssertion(id: string, caption: string, assertion: IAssert): SchemaFieldBoolean {
    return new SchemaFieldBoolean(id, caption, SchemaFieldBoolean.fieldType, AssertGroup.create(assertion));
  }

  public static createWithAssertionGroup(id: string, caption: string, assertionGroup: IAssertGroup): SchemaFieldBoolean {
    return new SchemaFieldBoolean(id, caption, SchemaFieldBoolean.fieldType, assertionGroup);
  }

  public static createWithAssertionAndCondition(id: string, caption: string, assertion: IAssert, condition: ICondition): SchemaFieldBoolean {
    return new SchemaFieldBoolean(id, caption, SchemaFieldBoolean.fieldType, AssertGroup.createAssertionAndCondition(assertion, condition));
  }

  public static createWithAssertionAndConditions(id: string, caption: string, assertion: IAssert, condition: Array<ICondition>): SchemaFieldBoolean {
    return new SchemaFieldBoolean(id, caption, SchemaFieldBoolean.fieldType, AssertGroup.createAssertionAndConditions(assertion, condition));
  }

  public static createWithAssertionsAndCondition(id: string, caption: string, assertions: Array<IAssert>, condition: ICondition): SchemaFieldBoolean {
    return new SchemaFieldBoolean(id, caption, SchemaFieldBoolean.fieldType, AssertGroup.createAssertionsAndCondition(assertions, condition));
  }

  public static createWithAssertionsAndConditions(
    id: string,
    caption: string,
    assertions: Array<IAssert>,
    conditions: Array<ICondition>
  ): SchemaFieldBoolean {
    return new SchemaFieldBoolean(id, caption, SchemaFieldBoolean.fieldType, AssertGroup.createAssertionsAndConditions(assertions, conditions));
  }

  public static createWithAssertions(id: string, caption: string, assertions: Array<IAssert>): SchemaFieldBoolean {
    if (assertions.length === 0) {
      return new SchemaFieldBoolean(id, caption, SchemaFieldBoolean.fieldType);
    }
    return new SchemaFieldBoolean(id, caption, SchemaFieldBoolean.fieldType, AssertGroup.createAssertions(assertions));
  }

  public static createWithAssertionGroups(id: string, caption: string, assertionGroups: Array<IAssertGroup>) {
    const field = new SchemaFieldBoolean(id, caption, SchemaFieldBoolean.fieldType);
    assertionGroups.forEach((group) => {
      field.appendAssertionGroup(group);
    });
    return field;
  }

  //
  // used to build up conditional validation in the following format
  // this.fields.dietryRequirementsNotes.when(this.fields.dietryRequirementsFlag.state().ifIsTrue()).shouldHaveLengthBetween(10, 1000).mandatory();
  //
  // the conditional assertions are not applied until the first conditional validation is provided, this is done
  // by the conditionalValidationBuilder
  when(state: QueryBuilderTypes): ConditionalValidationBuilderBoolean {
    return new ConditionalValidationBuilderBoolean(this, state);
  }

  state(): QueryBuilderBoolean {
    return new QueryBuilderBoolean(this);
  }
}
