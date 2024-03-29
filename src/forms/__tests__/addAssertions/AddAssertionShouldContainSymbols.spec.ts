import AssertContainsSymbols from "../../assertions/string/AssertContainsSymbols";
import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";

describe("Field Builder - Add Assertion - shouldContainSymbols", () => {
  test("Assertion - shouldContainSymbols", () => {
    // ACT
    //
    var field = FieldBuilder.string().containSymbols(1, 2).build();

    //
    // ASSERT
    //
    const item = field.assertGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertContainsSymbols);
  });
});
