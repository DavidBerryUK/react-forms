import AssertValueIsInteger from "../../assertions/number/AssertValueIsInteger";
import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";

describe("Field Builder - Add Assertion - ", () => {
  test("Assertion - shouldBeInteger", () => {
    // ACT
    //
    var field = FieldBuilder.number().integer().build();

    //
    // ASSERT
    //
    const item = field.assertGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertValueIsInteger);
  });
});
