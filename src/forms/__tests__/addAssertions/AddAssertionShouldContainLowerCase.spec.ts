import AssertContainsLowerCase from "../../assertions/string/AssertContainsLowerCase";
import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";

describe("Field Builder - Add Assertion - shouldContainLowerCase", () => {
  test("Assertion - shouldContainLowerCase", () => {
    // ACT
    //
    var field = FieldBuilder.string().containLowerCase(1, 2).build();

    //
    // ASSERT
    //
    const item = field.assertGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertContainsLowerCase);
  });
});
