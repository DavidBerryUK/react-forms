// test then the when statement applies the condition to the ISchemeField correctly
//
// example
// this.fields.dietryRequirementsNotes.when(this.fields.dietryRequirementsFlag.state().ifIsTrue()).shouldHaveLengthBetween(10, 1000).mandatory();
//                                     <--> testing this part

import FieldBuilder from "../../syntaxSugar/FieldBuilder";

import AssertIsPopulated from "../../assertions/AssertIsPopulated";
import AssertLengthMax from "../../assertions/AssertLengthMax";
import AssertContainsUpperCase from "../../assertions/AssertContainsUpperCase";
import exp from "constants";
import { fi } from "date-fns/locale";
import AssertLengthMin from "../../assertions/AssertLengthMin";

//
describe("When parameter hander", () => {
  test("test simple when clause", () => {
    //
    // Arrange
    //
    var fieldName = FieldBuilder.id("Name").caption("Full Name").string().build();

    //
    // act
    //
    fieldName.when(fieldName.state().ifIsPopulated().ifLengthGreaterOrEqual(100).ifContainsUpperCase(1, 99)).shouldHaveLengthMin(10);

    expect(fieldName.ruleGroups.count()).toBe(1);

    const group = fieldName.ruleGroups.items[0];
    const conditionRules = group.conditions.items[0].ruleGroup.items;

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
    // test condition rules
    //
    expect(conditionRules.length).toBe(3);
    expect(conditionRules[0]).toBeInstanceOf(AssertIsPopulated);
    expect(conditionRules[1]).toBeInstanceOf(AssertLengthMax);
    expect(conditionRules[2]).toBeInstanceOf(AssertContainsUpperCase);
  });
});
