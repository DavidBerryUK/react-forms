import AssertContainsLowerCase from "../../../assertions/AssertContainsLowerCase";
import FieldBuilder from "../../FieldBuilder";

describe("Field Builder - Add Assertion - shouldContainLowerCase", () => {
  test("Assertion - shouldContainLowerCase", () => {
    // ACT
    //
    var field = FieldBuilder.string().shouldContainLowerCase(1, 2).build();

    //
    // ASSERT
    //
    const item = field.ruleGroups.groups[0].items[0];
    expect(item).toBeInstanceOf(AssertContainsLowerCase);
  });
});
