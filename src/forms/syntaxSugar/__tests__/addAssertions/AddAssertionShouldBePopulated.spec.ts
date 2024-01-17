import AssertIsPopulated from "../../../assertions/AssertIsPopulated";
import FieldBuilder from "../../FieldBuilder";

describe("Field Builder - Add Assertion - ", () => {
  test("Assertion - shouldBePopulated", () => {
    // ACT
    //
    var field = FieldBuilder.string().shouldBePopulated().build();

    //
    // ASSERT
    //
    const item = field.ruleGroups.groups[0].items[0];
    expect(item).toBeInstanceOf(AssertIsPopulated);
  });
});
