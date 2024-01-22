import AssertValueIsDateTimeLocal from "../../assertions/date/AssertValueIsDateTimeLocal";
import FieldBuilder from "../../syntaxSugar/fieldBuilders/FieldBuilder";

describe("Field Builder - Add Assertion - shouldBeDateTimeLocal", () => {
  test("Assertion - shouldBeDateTimeLocal", () => {
    // ACT
    //
    var field = FieldBuilder.date().shouldBeDateTimeLocal().build();

    //
    // ASSERT
    //
    const item = field.assertGroups.items[0].items[0];
    expect(item).toBeInstanceOf(AssertValueIsDateTimeLocal);
  });
});
