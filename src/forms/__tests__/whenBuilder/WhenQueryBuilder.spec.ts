import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";
import QueryBuilder from "../../syntaxSugar/QueryBuilder";
import AssertValueIsTrue from "../../assertions/AssertValueIsTrue";
import AssertIsPopulated from "../../assertions/AssertIsPopulated";
import AssertLengthMax from "../../assertions/AssertLengthMax";
import AssertContainsUpperCase from "../../assertions/AssertContainsUpperCase";

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
    var queryBuilder = new QueryBuilder(fieldProvideName).ifIsTrue();
    //
    // ASSERT
    //

    expect(queryBuilder.conditions.length).toBe(1);

    const condition = queryBuilder.conditions[0];

    expect(condition?.schemaField).toBe(fieldProvideName);
    expect(condition?.ruleGroup.items.length).toBe(1);
    expect(condition?.ruleGroup.items[0]).toBeInstanceOf(AssertValueIsTrue);
  });

  test("test adding multiple assertion", () => {
    //
    // Arrange
    //
    var fieldName = FieldBuilder.string().build();

    //
    // test condition, if populated, or greater > 100 chars, or ifContains between 1 and 99 upper case chars
    //
    var queryBuilder = new QueryBuilder(fieldName).ifIsPopulated().ifLengthGreaterOrEqual(100).ifContainsUpperCase(1, 99);
    //
    // ASSERT
    //

    expect(queryBuilder.conditions?.length).toBe(1);
    const condition = queryBuilder.conditions[0];
    expect(condition?.schemaField).toBe(fieldName);

    //
    // expect 3 rules
    //
    expect(condition?.ruleGroup.items.length).toBe(3);
    expect(condition?.ruleGroup.items[0]).toBeInstanceOf(AssertIsPopulated);
    expect(condition?.ruleGroup.items[1]).toBeInstanceOf(AssertLengthMax);
    expect(condition?.ruleGroup.items[2]).toBeInstanceOf(AssertContainsUpperCase);
  });
});
