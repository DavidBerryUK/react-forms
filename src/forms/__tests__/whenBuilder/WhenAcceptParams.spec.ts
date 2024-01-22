import AssertContainsUpperCase from "../../assertions/AssertContainsUpperCase";
import AssertIsPopulated from "../../assertions/AssertIsPopulated";
import AssertLengthMax from "../../assertions/AssertLengthMax";
import AssertLengthMin from "../../assertions/AssertLengthMin";
import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";

// test then the when statement applies the condition to the ISchemeField correctly
//
// example
// this.fields.dietryRequirementsNotes.when(this.fields.dietryRequirementsFlag.state().ifIsTrue()).shouldHaveLengthBetween(10, 1000).mandatory();
//                                     <--> testing this part
//
describe("When parameter hander", () => {
  test("test simple when clause", () => {
    //
    // Arrange
    //
    var fieldName = FieldBuilder.string("Full Name").id("Name").build();

    //
    // act
    //
    fieldName.when(fieldName.state().ifIsPopulated().ifLengthGreaterOrEqual(100).ifContainsUpperCase(1, 99)).shouldHaveLengthMin(10);

    expect(fieldName.assertGroups.count()).toBe(1);

    const group = fieldName.assertGroups.items[0];
    const conditionAssertions = group.conditions.items[0].assertionGroup.items;

    //
    // test assigned to correct field
    //
    expect(group.schemaField).toBe(fieldName);

    //
    // test optional validation added
    //
    expect(group.items.length).toBe(1);
    expect(group.items[0]).toBeInstanceOf(AssertLengthMin);

    //
    // test condition assertions
    //
    expect(conditionAssertions.length).toBe(3);
    expect(conditionAssertions[0]).toBeInstanceOf(AssertIsPopulated);
    expect(conditionAssertions[1]).toBeInstanceOf(AssertLengthMax);
    expect(conditionAssertions[2]).toBeInstanceOf(AssertContainsUpperCase);
  });
});
