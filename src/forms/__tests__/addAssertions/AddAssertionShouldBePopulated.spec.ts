import AssertIsPopulated from "../../assertions/AssertIsPopulated";
import FieldBuilder from "../../syntaxSugar/FieldBuilder";

describe("Field Builder - Add Assertion - ", () => {
  test("Assertion - shouldBePopulated", () => {
    // ACT
    //
    var field = FieldBuilder.string().shouldBePopulated().build();

    //
    // ASSERT
    //
    const item = field.ruleGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertIsPopulated);
  });
});
