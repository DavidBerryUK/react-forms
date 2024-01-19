import AssertValueIsZero from "../../assertions/AssertValueIsZero";
import FieldBuilder from "../../syntaxSugar/FieldBuilder";

describe("Field Builder - Add Assertion - shouldBeZero", () => {
  test("Assertion - shouldBeZero", () => {
    // ACT
    //
    var field = FieldBuilder.string().shouldBeZero().build();

    //
    // ASSERT
    //
    const item = field.ruleGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertValueIsZero);
  });
});
