import AssertValueIsTrue from "../../assertions/boolean/AssertValueIsTrue";
import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";

describe("Field Builder - Add Assertion - shouldBeTrue", () => {
  test("Assertion - shouldBeTrue", () => {
    // ACT
    //
    var field = FieldBuilder.boolean().true().build();

    //
    // ASSERT
    //
    const item = field.assertGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertValueIsTrue);
  });
});
