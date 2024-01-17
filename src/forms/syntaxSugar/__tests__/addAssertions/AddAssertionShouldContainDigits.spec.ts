import AssertContainsDigits from "../../../assertions/AssertContainsDigits";
import FieldBuilder from "../../FieldBuilder";

describe("Field Builder - Add Assertion - shouldContainDigits", () => {
  test("Assertion - shouldContainDigits", () => {
    // ACT
    //
    var field = FieldBuilder.string().shouldContainDigits(1, 2).build();

    //
    // ASSERT
    //
    const item = field.ruleGroups.groups[0].items[0];
    expect(item).toBeInstanceOf(AssertContainsDigits);
  });
});
