import AssertValueIsDecimal from "../../assertions/AssertValueIsDecimal";
import FieldBuilder from "../../syntaxSugar/FieldBuilder";

describe("Field Builder - Add Assertion - ", () => {
  test("Assertion - shouldBeDecimal", () => {
    // ACT
    //
    var field = FieldBuilder.date().shouldBeDecimal().build();

    //
    // ASSERT
    //
    const item = field.ruleGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertValueIsDecimal);
  });
});
