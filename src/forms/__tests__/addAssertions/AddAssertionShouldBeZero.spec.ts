import AssertValueIsZero from "../../assertions/AssertValueIsZero";
import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";

describe("Field Builder - Add Assertion - shouldBeZero", () => {
  test("Assertion - shouldBeZero", () => {
    // ACT
    //
    var field = FieldBuilder.number().shouldBeZero().build();

    //
    // ASSERT
    //
    const item = field.ruleGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertValueIsZero);
  });
});
