import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";
import AssertValueIsTrue from "../../assertions/boolean/AssertValueIsTrue";
import AssertIsPopulated from "../../assertions/generic/AssertIsPopulated";
import AssertLengthMax from "../../assertions/string/AssertLengthMax";
import AssertContainsUpperCase from "../../assertions/string/AssertContainsUpperCase";
import QueryBuilderBoolean from "../../syntaxSugar/queryBuilders/QueryBuilderBoolean";
import QueryBuilderString from "../../syntaxSugar/queryBuilders/QueryBuilderString";

//
// the Query builder is return from the "ISchemaField.State()" and is an input into the "when" statement.
//
// example
// this.fields.dietryRequirementsNotes.when(this.fields.dietryRequirementsFlag.state().ifIsTrue()).shouldHaveLengthBetween(10, 1000).mandatory();
//                                          <------ testing this part -------------------------->|
//
describe("When Query Builder", () => {
  test("test adding single assertion", () => {
    //
    // Arrange
    //
    var fieldProvideName = FieldBuilder.boolean().build();

    //
    //
    //
    var queryBuilder = new QueryBuilderBoolean(fieldProvideName).true();
    //
    // ASSERT
    //

    expect(queryBuilder.conditions.length).toBe(1);

    const condition = queryBuilder.conditions[0];

    expect(condition?.schemaField).toBe(fieldProvideName);
    expect(condition?.assertionGroup.items.length).toBe(1);
    expect(condition?.assertionGroup.items[0]).toBeInstanceOf(AssertValueIsTrue);
  });

  test("test adding multiple assertion", () => {
    //
    // Arrange
    //
    var fieldName = FieldBuilder.string().build();

    //
    // test condition, if populated, or greater > 100 chars, or ifContains between 1 and 99 upper case chars
    //
    var queryBuilder = new QueryBuilderString(fieldName).ifIsPopulated().ifGreaterOrEqual(100).ifContainsUpperCase(1, 99);
    //
    // ASSERT
    //

    expect(queryBuilder.conditions?.length).toBe(1);
    const condition = queryBuilder.conditions[0];
    expect(condition?.schemaField).toBe(fieldName);

    //
    // expect 3 assertions
    //
    expect(condition?.assertionGroup.items.length).toBe(3);
    expect(condition?.assertionGroup.items[0]).toBeInstanceOf(AssertIsPopulated);
    expect(condition?.assertionGroup.items[1]).toBeInstanceOf(AssertLengthMax);
    expect(condition?.assertionGroup.items[2]).toBeInstanceOf(AssertContainsUpperCase);
  });
});
