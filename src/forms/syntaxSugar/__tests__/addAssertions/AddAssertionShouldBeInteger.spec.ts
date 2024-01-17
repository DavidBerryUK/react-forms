import AssertValueIsInteger from "../../../assertions/AssertValueIsInteger";
import FieldBuilder from "../../FieldBuilder";

describe("Field Builder - Add Assertion - ", () => {
  test("Assertion - shouldBeInteger", () => {
    // ACT
    //
    var field = FieldBuilder.string().shouldBeInteger().build();

    //
    // ASSERT
    //
    const item = field.ruleGroups.groups[0].items[0];
    expect(item).toBeInstanceOf(AssertValueIsInteger);
  });
});
