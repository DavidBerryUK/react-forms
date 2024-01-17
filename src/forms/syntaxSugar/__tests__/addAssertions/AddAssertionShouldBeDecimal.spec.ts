import AssertValueIsDecimal from "../../../assertions/AssertValueIsDecimal";
import FieldBuilder from "../../FieldBuilder";

describe("Field Builder - Add Assertion - ", () => {
  test("Assertion - shouldBeDecimal", () => {
    // ACT
    //
    var field = FieldBuilder.date().shouldBeDecimal().build();

    //
    // ASSERT
    //
    const item = field.ruleGroups.groups[0].items[0];
    expect(item).toBeInstanceOf(AssertValueIsDecimal);
  });
});
