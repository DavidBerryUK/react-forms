import AssertContainsUpperCase from "../../../assertions/AssertContainsUpperCase";
import FieldBuilder from "../../FieldBuilder";

describe("Field Builder - Add Assertion - shouldContainUpperCase", () => {
  test("Assertion - shouldContainUpperCase", () => {
    // ACT
    //
    var field = FieldBuilder.string().shouldContainUpperCase(1, 2).build();

    //
    // ASSERT
    //
    const item = field.ruleGroups.groups[0].items[0];
    expect(item).toBeInstanceOf(AssertContainsUpperCase);
  });
});
