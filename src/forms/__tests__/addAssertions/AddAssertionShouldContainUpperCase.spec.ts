import AssertContainsUpperCase from "../../assertions/AssertContainsUpperCase";
import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";

describe("Field Builder - Add Assertion - shouldContainUpperCase", () => {
  test("Assertion - shouldContainUpperCase", () => {
    // ACT
    //
    var field = FieldBuilder.string().shouldContainUpperCase(1, 2).build();

    //
    // ASSERT
    //
    const item = field.assertGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertContainsUpperCase);
  });
});
