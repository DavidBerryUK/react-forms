import AssertValueIsZero from "../../../assertions/AssertValueIsZero";
import FieldBuilder from "../../FieldBuilder";

describe("Field Builder - Add Assertion - shouldBeZero", () => {
  test("Assertion - shouldBeZero", () => {
    // ACT
    //
    var field = FieldBuilder.string().shouldBeZero().build();

    //
    // ASSERT
    //
    const item = field.ruleGroups.groups[0].items[0];
    expect(item).toBeInstanceOf(AssertValueIsZero);
  });
});
