import AssertContainsSymbols from "../../assertions/AssertContainsSymbols";
import FieldBuilder from "../../syntaxSugar/FieldBuilder";

describe("Field Builder - Add Assertion - shouldContainSymbols", () => {
  test("Assertion - shouldContainSymbols", () => {
    // ACT
    //
    var field = FieldBuilder.string().shouldContainSymbols(1, 2).build();

    //
    // ASSERT
    //
    const item = field.ruleGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertContainsSymbols);
  });
});
