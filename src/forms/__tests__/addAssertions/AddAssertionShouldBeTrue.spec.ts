import AssertValueIsTrue from "../../assertions/AssertValueIsTrue";
import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";

describe("Field Builder - Add Assertion - shouldBeTrue", () => {
  test("Assertion - shouldBeTrue", () => {
    // ACT
    //
    var field = FieldBuilder.boolean().shouldBeTrue().build();

    //
    // ASSERT
    //
    const item = field.assertGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertValueIsTrue);
  });
});
