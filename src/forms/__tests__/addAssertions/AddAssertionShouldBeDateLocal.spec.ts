import AssertValueIsDateLocal from "../../assertions/AssertValueIsDateLocal";
import FieldBuilder from "../../syntaxSugar/FieldBuilder";

describe("Field Builder - Assertion - shouldBeDateLocal", () => {
  test("build", () => {
    // ACT
    //
    var field = FieldBuilder.string().shouldBeDateLocal().build();

    //
    // ASSERT
    //
    const item = field.ruleGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertValueIsDateLocal);
  });
});
