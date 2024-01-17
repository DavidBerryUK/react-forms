import AssertValueIsTime from "../../../assertions/AssertValueIsTime";
import FieldBuilder from "../../FieldBuilder";

describe("Field Builder - Add Assertion - ", () => {
  test("Assertion - shouldBeTimeLocal", () => {
    // ACT
    //
    var field = FieldBuilder.string().shouldBeTimeLocal().build();

    //
    // ASSERT
    //
    const item = field.ruleGroups.groups[0].items[0];
    expect(item).toBeInstanceOf(AssertValueIsTime);
  });
});
