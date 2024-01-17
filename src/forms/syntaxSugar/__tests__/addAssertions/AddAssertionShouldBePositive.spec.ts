import AssertValueIsPositive from "../../../assertions/AssertValueIsPositive";
import FieldBuilder from "../../FieldBuilder";

describe("Field Builder - Add Assertion - shouldBePositive", () => {
  test("Assertion - shouldBePositive", () => {
    // ACT
    //
    var field = FieldBuilder.string().shouldBePositive(false).build();

    //
    // ASSERT
    //
    const item = field.ruleGroups.groups[0].items[0];
    expect(item).toBeInstanceOf(AssertValueIsPositive);
  });
});
