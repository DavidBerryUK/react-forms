import AssertValueIsPositive from "../../assertions/AssertValueIsPositive";
import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";

describe("Field Builder - Add Assertion - shouldBePositive", () => {
  test("Assertion - shouldBePositive", () => {
    // ACT
    //
    var field = FieldBuilder.number().shouldBePositive(false).build();

    //
    // ASSERT
    //
    const item = field.ruleGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertValueIsPositive);
  });
});
