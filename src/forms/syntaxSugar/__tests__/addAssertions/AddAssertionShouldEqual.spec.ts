import AssertIsEqualTo from "../../../assertions/AssertIsEqualTo";
import FieldBuilder from "../../FieldBuilder";

describe("Field Builder - Add Assertion - shouldEqual", () => {
  test("Assertion - shouldEqual", () => {
    // ACT
    //
    var field = FieldBuilder.string().shouldEqual("23", false).build();

    //
    // ASSERT
    //
    const item = field.ruleGroups.groups[0].items[0];
    expect(item).toBeInstanceOf(AssertIsEqualTo);
  });
});
