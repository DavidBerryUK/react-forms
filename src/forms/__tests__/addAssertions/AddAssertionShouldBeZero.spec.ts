import AssertValueIsZero from "../../assertions/number/AssertValueIsZero";
import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";

describe("Field Builder - Add Assertion - shouldBeZero", () => {
  test("Assertion - shouldBeZero", () => {
    // ACT
    //
    var field = FieldBuilder.number().zero().build();

    //
    // ASSERT
    //
    const item = field.assertGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertValueIsZero);
  });
});
