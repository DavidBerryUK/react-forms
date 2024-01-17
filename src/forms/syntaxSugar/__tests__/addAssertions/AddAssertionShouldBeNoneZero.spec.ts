import AssertValueIsNonZero from "../../../assertions/AssertValueIsNonZero";
import FieldBuilder from "../../FieldBuilder";

describe("Field Builder - Add Assertion - ", () => {
  test("Assertion - shouldBeNoneZero", () => {
    // ACT
    //
    var field = FieldBuilder.string().shouldBeNoneZero().build();

    //
    // ASSERT
    //
    const item = field.ruleGroups.groups[0].items[0];
    expect(item).toBeInstanceOf(AssertValueIsNonZero);
  });
});
