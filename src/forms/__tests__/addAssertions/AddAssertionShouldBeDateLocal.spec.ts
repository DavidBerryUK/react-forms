import AssertValueIsDateLocal from "../../assertions/AssertValueIsDateLocal";
import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";

describe("Field Builder - Assertion - shouldBeDateLocal", () => {
  test("build", () => {
    // ACT
    //
    var field = FieldBuilder.date().shouldBeDateLocal().build();

    //
    // ASSERT
    //
    const item = field.assertGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertValueIsDateLocal);
  });
});
