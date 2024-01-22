import AssertValueIsNonZero from "../../assertions/number/AssertValueIsNonZero";
import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";

describe("Field Builder - Add Assertion - ", () => {
  test("Assertion - shouldBeNoneZero", () => {
    // ACT
    //
    var field = FieldBuilder.number().shouldBeNoneZero().build();

    //
    // ASSERT
    //
    const item = field.assertGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertValueIsNonZero);
  });
});
