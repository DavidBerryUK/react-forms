import AssertValueIsDateTimeLocal from "../../assertions/AssertValueIsDateTimeLocal";
import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";

describe("Field Builder - Add Assertion - shouldBeDateTimeLocal", () => {
  test("Assertion - shouldBeDateTimeLocal", () => {
    // ACT
    //
    var field = FieldBuilder.date().shouldBeDateTimeLocal().build();

    //
    // ASSERT
    //
    const item = field.ruleGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertValueIsDateTimeLocal);
  });
});
