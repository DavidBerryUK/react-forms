import AssertValueIsNonZero from "../../assertions/AssertValueIsNonZero";
import FieldBuilder from "../../syntaxSugar/FieldBuilder";

describe("Field Builder - Add Assertion - ", () => {
  test("Assertion - shouldBeNoneZero", () => {
    // ACT
    //
    var field = FieldBuilder.string().shouldBeNoneZero().build();

    //
    // ASSERT
    //
    const item = field.ruleGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertValueIsNonZero);
  });
});
