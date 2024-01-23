import AssertValueIsDateLocal from "../../assertions/date/AssertValueIsDateLocal";
import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";

describe("Field Builder - Assertion - shouldBeDateLocal", () => {
  test("build - expact to pass", () => {
    // ACT
    //
    var field = FieldBuilder.date().dateLocal().build();

    //
    // ASSERT
    //
    const item = field.assertGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertValueIsDateLocal);
  });
});
