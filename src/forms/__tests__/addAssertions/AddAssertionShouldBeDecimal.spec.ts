import AssertValueIsDecimal from "../../assertions/number/AssertValueIsDecimal";
import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";

describe("Field Builder - Add Assertion - ", () => {
  test("Assertion - shouldBeDecimal", () => {
    // ACT
    //
    var field = FieldBuilder.number().shouldBeDecimal().build();

    //
    // ASSERT
    //
    const item = field.assertGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertValueIsDecimal);
  });
});
