import AssertIsEmpty from "../../assertions/AssertIsEmpty";
import FieldBuilder from "../../syntaxSugar/FieldBuilder";

describe("Field Builder - Add Assertion - shouldBeEmpty", () => {
  test("Assertion - shouldBeEmpty", () => {
    // ACT
    //
    var field = FieldBuilder.string().shouldBeEmpty().build();

    //
    // ASSERT
    //
    const item = field.ruleGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertIsEmpty);
  });
});
