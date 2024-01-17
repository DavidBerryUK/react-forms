import AssertValueIsDateLocal from "../../../assertions/AssertValueIsDateLocal";
import FieldBuilder from "../../FieldBuilder";

describe("Field Builder - Assertion - shouldBeDateLocal", () => {
  test("build", () => {
    // ACT
    //
    var field = FieldBuilder.string().shouldBeDateLocal().build();

    //
    // ASSERT
    //
    const item = field.ruleGroups.groups[0].items[0];
    expect(item).toBeInstanceOf(AssertValueIsDateLocal);
  });
});
