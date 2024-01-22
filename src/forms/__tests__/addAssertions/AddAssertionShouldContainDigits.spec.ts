import AssertContainsDigits from "../../assertions/string/AssertContainsDigits";
import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";

describe("Field Builder - Add Assertion - shouldContainDigits", () => {
  test("Assertion - shouldContainDigits", () => {
    // ACT
    //
    var field = FieldBuilder.string().containDigits(1, 2).build();

    //
    // ASSERT
    //
    const item = field.assertGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertContainsDigits);
  });
});
