import AssertValueIsTrue from "../../assertions/AssertValueIsTrue";
import FieldBuilder from "../../syntaxSugar/FieldBuilder";

describe("Field Builder - Add Assertion - shouldBeTrue", () => {
  test("Assertion - shouldBeTrue", () => {
    // ACT
    //
    var field = FieldBuilder.string().shouldBeTrue().build();

    //
    // ASSERT
    //
    const item = field.ruleGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertValueIsTrue);
  });
});
