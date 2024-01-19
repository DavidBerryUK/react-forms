import AssertContainsLowerCase from "../../assertions/AssertContainsLowerCase";
import FieldBuilder from "../../syntaxSugar/FieldBuilder";

describe("Field Builder - Add Assertion - shouldContainLowerCase", () => {
  test("Assertion - shouldContainLowerCase", () => {
    // ACT
    //
    var field = FieldBuilder.string().shouldContainLowerCase(1, 2).build();

    //
    // ASSERT
    //
    const item = field.ruleGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertContainsLowerCase);
  });
});
